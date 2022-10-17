export class Coordinate {
    private x:number = 0;
    private y:number = 0;

    constructor(x?:number,y?:number){
        if(x) {
        this.x=x;

        }
        if(y){
        this.y=y;
        }
    }

    getX(){
        return this.x;
    }

    getY(){
        return this.y;
    }
}