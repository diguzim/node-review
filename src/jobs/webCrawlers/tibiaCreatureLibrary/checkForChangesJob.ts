import axios from 'axios';
import { Queue } from 'bullmq';
import * as cheerio from 'cheerio';

const CREATURES_URL = "https://www.tibia.com/library/?subtopic=creatures";

function buildQueue() {
    return new Queue(
        'GenericQueue',
        {
            connection: {
                host: process.env.REDIS_HOST,
                port: Number(process.env.REDIS_PORT),
            }
        }
    );
}

async function getCreatures() {
    const queue = buildQueue();

    const response = await axios.get(CREATURES_URL);
    const page = cheerio.load(response.data);

    const creature_div_elements = page(".Creatures > div").toArray();
    for (const creature_div_element of creature_div_elements) {
        const anchor_element = page(creature_div_element).find("a");
        const url = anchor_element.attr("href") as string;
        console.log(url);

        const race = (url.match(/creatures&race=(.+)$/) as RegExpMatchArray)[1];

        await queue.add('CheckCreatureLibraryEntryForChangesJob', { race });
    }
}

export const checkForChangesJob = async function main() {
    await getCreatures();
};
