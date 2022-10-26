import { Cell } from "../models/cell";
import { Coordinate } from "../models/coordinate";
import { Matrix } from "../models/matrix";

import { IGameOfLifeService } from "./game-of-life-service";

//    no life on the edge
//    1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
//    2. Any live cell with more than three live neighbours dies, as if by overcrowding.
//    3. Any live cell with two or three live neighbours lives on to the next generation.
//    4. Any dead cell with exactly three live neighbours becomes a live cell.
export class GameOfLifeServiceImpl implements IGameOfLifeService {

    private currentGeneration: Matrix;
    private nextGeneration: Matrix;
    private cellCountOnRow: number = 0;

    constructor(){
        this.currentGeneration = new Matrix;
        this.nextGeneration = new Matrix;
    }

    public generateNextGeneration(matrix:Matrix): Matrix {
        this.currentGeneration=matrix;
        this.cellCountOnRow = Math.sqrt(this.currentGeneration.getArrayMatrix().length);
        this.currentGeneration.getArrayMatrix().forEach((cell)=>{
            if(!this.isCellOnEdge(cell)) {
                let neighbours = this.getNeighbours(cell);
                this.nextGeneration.push(this.getCellStatusForNextGeneration(cell, neighbours));
            }
            else{
                this.nextGeneration.push(new Cell(false,cell.getPosition()));
            }
        })

        return this.nextGeneration;
    }

    private isCellOnEdge(cell:Cell):boolean{
        return cell.getPosition().getX()===0||
            cell.getPosition().getY()===0||
            cell.getPosition().getX()==this.cellCountOnRow-1||
            cell.getPosition().getY()==this.cellCountOnRow-1;
    }

    private getNeighbours(cell: Cell) : Array<Cell> {
        let cellPosition = cell.getPosition();
        let neighbours = new Array();
        neighbours.push(this.currentGeneration.getArrayMatrix().find((element)=>
            element.getPosition().getX()===cellPosition.getX()-1&&
            element.getPosition().getY()===cellPosition.getY()-1
        ));
        neighbours.push(this.currentGeneration.getArrayMatrix().find((element)=>
            element.getPosition().getX()===cellPosition.getX()-1&&
            element.getPosition().getY()===cellPosition.getY()
        ));
        neighbours.push(this.currentGeneration.getArrayMatrix().find((element)=>
            element.getPosition().getX()===cellPosition.getX()-1&&
            element.getPosition().getY()===cellPosition.getY()+1
        ));
        neighbours.push(this.currentGeneration.getArrayMatrix().find((element)=>
            element.getPosition().getX()===cellPosition.getX()&&
            element.getPosition().getY()===cellPosition.getY()-1
        ));
        neighbours.push(this.currentGeneration.getArrayMatrix().find((element)=>
            element.getPosition().getX()===cellPosition.getX()&&
            element.getPosition().getY()===cellPosition.getY()+1
        ));
        neighbours.push(this.currentGeneration.getArrayMatrix().find((element)=>
            element.getPosition().getX()===cellPosition.getX()+1&&
            element.getPosition().getY()===cellPosition.getY()-1
        ));
        neighbours.push(this.currentGeneration.getArrayMatrix().find((element)=>
            element.getPosition().getX()===cellPosition.getX()+1&&
            element.getPosition().getY()===cellPosition.getY()
        ));
        neighbours.push(this.currentGeneration.getArrayMatrix().find((element)=>
            element.getPosition().getX()===cellPosition.getX()+1&&
            element.getPosition().getY()===cellPosition.getY()+1
        ));

        return neighbours;
    }

    private getCellStatusForNextGeneration(cell: Cell, neighbours: Array<Cell>) {
        let aliveNeighbours: number = this.getAliveNeighboursCount(neighbours);
        cell.setStatus(this.willCellSurvive(aliveNeighbours) || this.willCellRevive(aliveNeighbours))
        return cell;
    }

    private getAliveNeighboursCount(neighbours:Array<Cell>){
        let aliveNeighbours = 0;
        
        neighbours.forEach((cell)=>{
            if(cell.getStatus()) aliveNeighbours++;
        })

        return aliveNeighbours;
    } 

    private willCellSurvive(aliveNeighbours:number): boolean {
        return aliveNeighbours===2|| aliveNeighbours===3;
    }

    private willCellRevive(aliveNeighbours:number):boolean {
        return aliveNeighbours===3;
    }
}