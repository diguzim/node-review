import { Queue } from "bullmq";

export function buildQueue() {
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