import { Cell } from "../models/cell";

export interface IGameOfLifeService {
    generateNextGeneration(matrix:Array<Cell>): Array<Cell>;
}