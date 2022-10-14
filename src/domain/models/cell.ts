import { Coordinate } from "./coordinate";


export class Cell {
    private status: boolean;
    private position: Coordinate; 

    constructor() {
        this.status = false;
        this.position = new Coordinate(0,0);
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