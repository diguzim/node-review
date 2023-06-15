import { Job, Worker } from "bullmq";

export const checkCreatureLibraryEntryForChangesWorker = new Worker(
    'GenericQueue',
    async (job: Job) => {
        console.log("workers.ts", job.data);
    }
);
