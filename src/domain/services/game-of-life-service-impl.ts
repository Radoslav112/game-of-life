import { Cell } from "../models/cell";
import { Coordinate } from "../models/coordinate";

import { IGameOfLifeService } from "./game-of-life-service";

//    no life on the edge
//    1. Any live cell with fewer than two live neighbours dies, as if caused by underpopulation.
//    2. Any live cell with more than three live neighbours dies, as if by overcrowding.
//    3. Any live cell with two or three live neighbours lives on to the next generation.
//    4. Any dead cell with exactly three live neighbours becomes a live cell.
class GameOfLifeServiceImpl implements IGameOfLifeService {

    private currentGeneration: Array<Cell>;
    private nextGeneration: Array<Cell>;
    private cellCountOnRow: number = 0;

    constructor(){
        this.currentGeneration = new Array();
        this.nextGeneration = new Array();
    }

    public generateNextGeneration(matrix:Array<Cell>): Array<Cell> {
        this.currentGeneration=matrix;
        this.cellCountOnRow = Math.sqrt(this.currentGeneration.length);
        this.currentGeneration.forEach((cell)=>{
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
        return cell.getPosition().getX()===1||
            cell.getPosition().getY()===1||
            cell.getPosition().getX()==this.cellCountOnRow||
            cell.getPosition().getY()==this.cellCountOnRow;
    }

    private getNeighbours(cell: Cell) : Array<Cell> {
        let cellPosition = cell.getPosition();
        let neighbours = new Array();
        neighbours.push(this.currentGeneration.find((element)=>{
            element.getPosition()===new Coordinate(cellPosition.getX()-1,cellPosition.getY()-1)
        }));
        neighbours.push(this.currentGeneration.find((element)=>{
            element.getPosition()===new Coordinate(cellPosition.getX()-1,cellPosition.getY())
        }));
        neighbours.push(this.currentGeneration.find((element)=>{
            element.getPosition()===new Coordinate(cellPosition.getX()-1,cellPosition.getY()+1)
        }));
        neighbours.push(this.currentGeneration.find((element)=>{
            element.getPosition()===new Coordinate(cellPosition.getX(),cellPosition.getY()-1)
        }));
        neighbours.push(this.currentGeneration.find((element)=>{
            element.getPosition()===new Coordinate(cellPosition.getX(),cellPosition.getY()+1)
        }));
        neighbours.push(this.currentGeneration.find((element)=>{
            element.getPosition()===new Coordinate(cellPosition.getX()+1,cellPosition.getY()-1)
        }));
        neighbours.push(this.currentGeneration.find((element)=>{
            element.getPosition()===new Coordinate(cellPosition.getX()+1,cellPosition.getY())
        }));
        neighbours.push(this.currentGeneration.find((element)=>{
            element.getPosition()===new Coordinate(cellPosition.getX()+1,cellPosition.getY()+1)
        }));

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