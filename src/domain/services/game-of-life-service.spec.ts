import { Cell } from "../models/cell";
import { GameOfLifeServiceImpl } from "./game-of-life-service-impl"

describe('Testing game of life service',()=>{
    let service: GameOfLifeServiceImpl;

    beforeEach(()=>{
        service = new GameOfLifeServiceImpl();
    })

    it('',()=>{
        let matrix:Array<Cell>;
        let result = service.generateNextGeneration(matrix);
    })
})