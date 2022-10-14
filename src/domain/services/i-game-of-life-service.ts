import { Cell } from "../models/cell";

export interface IGameOfLifeService {
    generateNextGeneration(): Array<Cell>;
}