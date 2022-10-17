import { Coordinate } from "./coordinate";


export class Cell {
    private status: boolean = false;
    private position: Coordinate = new Coordinate();

    constructor(status?:boolean,position?:Coordinate) {
        if(status){
            this.status=status;
        }
        if(position){
            this.position=position;
        }
    }

    getStatus(){
        return this.status;
    }

    getPosition() {
        return this.position;
    }

    setStatus(Status: boolean){
        this.status=Status;
    }
}