import { UserDoc } from "@models";

export { };

declare global {
    namespace Express {
        interface Request {
            user?: UserDoc;
        }
    }
}