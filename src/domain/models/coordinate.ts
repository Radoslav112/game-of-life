export class Coordinate {
    x:number;
    y:number;

    constructor(X:number,Y:number){
        this.x=X;
        this.y=Y;
    }

    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }
}