import { Cell } from "./cell";
import { Coordinate } from "./coordinate";


export class Matrix{
    private matrix:Array<Cell> = new Array();

    constructor(arrMatrix?:number[][]){
        arrMatrix?.forEach((col,i)=>{
            col.forEach((num,j)=>{
                num ? this.matrix.push(new Cell(true,new Coordinate(i,j))): this.matrix.push(new Cell(false,new Coordinate(i,j)));
            });
        });
    }

    public getArrayMatrix():Array<Cell> {
        return this.matrix;
    }

    public push(cell:Cell){
        this.matrix.push(cell);
    }
}