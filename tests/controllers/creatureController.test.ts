import { CreatureController } from '@controllers';
import { CreatureService } from '@services';
import { Request, Response } from 'express';

test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
});

describe('CreatureController', () => {
    const creature = {
        name: 'creature name',
        userId: '1'
    } as any;


    describe('getAll', () => {
        describe('success', () => {
            // create a variable creature that mimics a creature found by Creature.find as a mongoose model so that I can use it on the mockImplementation I'm using ahead and typescript doesn't complain
            it('should call CreatureService.getAll', async () => {
                jest.spyOn(CreatureService, 'getAll').mockImplementation(() => {
                    return Promise.resolve([creature]);
                });

                const req = {} as Request;
                const res = {
                    json: jest.fn(),
                    status: jest.fn(),
                } as unknown as Response;

                await CreatureController.getAll(req, res);

                expect(CreatureService.getAll).toHaveBeenCalled();
                expect(res.json).toHaveBeenCalledWith([creature]);
            });
        });

        describe('error', () => {
            it('should call CreatureService.getAll', async () => {
                jest.spyOn(CreatureService, 'getAll').mockImplementation(() => {
                    return Promise.reject();
                });

                const req = {} as Request;
                const res = {
                    json: jest.fn(),
                    status: jest.fn(() => res),
                } as unknown as Response;

                await CreatureController.getAll(req, res);

                expect(CreatureService.getAll).toHaveBeenCalled();
                expect(res.status).toHaveBeenCalledWith(500);
                expect(res.json).toHaveBeenCalledWith({ error: 'Error when fething creatures' });
            });
        });
    });


});
