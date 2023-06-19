import axios from 'axios';
import * as cheerio from 'cheerio';
import { buildQueue } from './queue';

const CREATURES_URL = "https://www.tibia.com/library/?subtopic=creatures";

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

        await queue.add('CheckCreatureLibraryEntryForChangesWorker', { race });
        break;
    }
}

export const checkForChangesWorker = async function main() {
    await getCreatures();
};
