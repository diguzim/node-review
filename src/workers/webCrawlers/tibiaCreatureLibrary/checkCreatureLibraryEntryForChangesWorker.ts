import { Creature, CreatureLibraryEntry } from "@models";
import axios from "axios";
import { Job, Worker } from "bullmq";
import * as cheerio from "cheerio";
import { NotifyLibraryEntryDescriptionChangeWorker } from "./notifyLibraryEntryDescriptionChangeWorker";

new Worker(
    'GenericQueue',
    async (job: Job) => {
        checkCreatureLibraryEntryForChangesWorker(job.data.race);
    }
);

export const checkCreatureLibraryEntryForChangesWorker = async function (race: string) {
    console.log("Checking changes for race: ", race);

    const url = `https://www.tibia.com/library/?subtopic=creatures&race=${race}`;

    const response = await axios.get(url);
    const page = cheerio.load(response.data);

    const name_and_description = page("#creatures > .Border_2 > .Border_3 > .BoxContent > :nth-child(2)");

    console.log(name_and_description);

    const pluralized_name = name_and_description.find(":nth-child(1) > h2").text();
    console.log(pluralized_name);
    const description_paragraphs = name_and_description.find(":nth-child(2) > p").toArray();

    const description = description_paragraphs.map((paragraph) => {
        return page(paragraph).text();
    }).join("\n");

    console.log(description);

    const existing_creature_library_entry = await CreatureLibraryEntry.findOne({ race: race });

    if (existing_creature_library_entry) {
        if (existing_creature_library_entry.description != description) {
            NotifyLibraryEntryDescriptionChangeWorker(race);
        }
    } else {
        const creature = await Creature.create({ name: pluralized_name });

        CreatureLibraryEntry.create({
            race,
            pluralizedName: pluralized_name,
            description,
            creatureId: creature.id,
        });
    }

};
