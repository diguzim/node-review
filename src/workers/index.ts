console.log('Registering workers...');

import { checkForChangesWorker } from "./webCrawlers";
import "./webCrawlers";

// This is initiated here just for testing purposes currently
checkForChangesWorker();