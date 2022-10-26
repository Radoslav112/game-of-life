import { Cell } from "../models/cell";
import { Matrix } from "../models/matrix";

export interface IGameOfLifeService {
    generateNextGeneration(matrix:Matrix): Matrix;
}