import { CreatureController } from '@controllers';
import { Request, Response } from 'express';

test('adds 1 + 2 to equal 3', () => {
    expect(1 + 2).toBe(3);
});

// describe('CreatureController', () => {
//     describe('getAll', () => {
//         it('should call CreatureService.getAll', async () => {
//             const req = {} as Request;
//             const res = {
//                 json: jest.fn(),
//                 status: jest.fn(),
//             } as unknown as Response;

//             await CreatureController.getAll(req, res);

//             // expect(CreatureService.getAll).toHaveBeenCalled();
//         });
//     });
// });
