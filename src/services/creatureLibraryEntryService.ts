import { CreatureLibraryEntry } from '@models';

export const CreatureLibraryEntryService = {
    getByRace: async (race: string) => {
        return await CreatureLibraryEntry.findOne({ race: race });
    }
};
