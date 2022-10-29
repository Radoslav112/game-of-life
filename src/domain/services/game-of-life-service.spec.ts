import { Cell } from "../models/cell";
import { Matrix } from "../models/matrix";
import { GameOfLifeServiceImpl } from "./game-of-life-service-impl";

describe('Testing game of life service',()=>{
    let service: GameOfLifeServiceImpl;

    beforeEach(()=>{
        service = new GameOfLifeServiceImpl();
    })

    it('test game of life blinker',()=>{
        let matrix:Matrix = new Matrix([
            [0,0,0,0,0],
            [0,0,0,0,0],
            [0,1,1,1,0],
            [0,0,0,0,0],
            [0,0,0,0,0]
        ]);
        let result = service.generateNextGeneration(matrix);

        let expectedResult = new Matrix([
            [0,0,0,0,0],
            [0,0,1,0,0],
            [0,0,1,0,0],
            [0,0,1,0,0],
            [0,0,0,0,0]
        ])
            //actual result
            // [0,0,0,0,0],
            // [0,0,1,1,0],
            // [0,1,0,1,0],
            // [0,0,0,0,0],
            // [0,0,0,0,0]

        expect(result).toEqual(expectedResult);
    })
})