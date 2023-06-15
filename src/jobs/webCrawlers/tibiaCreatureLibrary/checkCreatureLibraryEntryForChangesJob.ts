import { Job, Worker } from "bullmq";

export const checkCreatureLibraryEntryForChangesJob = new Worker('GenericQueue', async (job: Job) => {
    console.log("checkCreatureLibraryEntryForChangesJob", job.data);
});
