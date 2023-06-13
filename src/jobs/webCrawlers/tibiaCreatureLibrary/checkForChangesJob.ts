import axios from 'axios';
import * as cheerio from 'cheerio';

const url = "https://www.tibia.com/library/?subtopic=creatures";

async function getCreatures() {
    const response = await axios.get(url);
    const page = cheerio.load(response.data);

    const creature_div_elements = page(".Creatures > div").toArray();
    for (const creature_div_element of creature_div_elements) {
        const anchor_element = page(creature_div_element).find("a");
        const url = anchor_element.attr("href") as string;
        console.log(url);

        const race = (url.match(/creatures&race=(.+)$/) as RegExpMatchArray)[1];

        // TODO: do something further with it after I setup a job execution system
    }
}

async function main() {
    await getCreatures();
}

main()
    .then(() => {
        console.log("Script concluído com sucesso");
        process.exit(0);
    })
    .catch((error) => {
        console.error("Ocorreu um erro durante a execução do script:", error);
        process.exit(1);
    });