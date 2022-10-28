import { Component } from "@angular/core";
import { Cell } from "src/domain/models/cell";
import { Matrix } from "src/domain/models/matrix";

@Component({
    selector: 'game-of-life',
    templateUrl: 'game-of-life.component.html'
})
export class GameOfLifeComponent{
    matrix: Matrix = new Matrix([
        [0,0,0,0,0],
        [0,0,1,0,0],
        [0,0,1,0,0],
        [0,0,1,0,0],
        [0,0,0,0,0]
    ]);

    onCellChangedHandler(event:{state:boolean,cell:Cell}){
        let findedCell=this.matrix.getArrayMatrix().findIndex((e)=>{
            return e===event.cell;
        });
        let newCell = new Cell(event.state,event.cell.getPosition()); 
        this.matrix.getArrayMatrix().splice(findedCell,1,newCell);
    }
}