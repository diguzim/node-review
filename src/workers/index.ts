import { Job, Worker } from "bullmq";
import { checkCreatureLibraryEntryForChangesWorker, checkForChangesWorker } from "./webCrawlers";

console.log('Registering workers...');
new Worker(
    'GenericQueue',
    async (job: Job) => {
        checkCreatureLibraryEntryForChangesWorker(job.data);
    }
);

// This is initiated here just for testing purposes currently
checkForChangesWorker();