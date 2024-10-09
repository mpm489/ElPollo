import { MovableObject } from "./movable-object.class";

export class Coin extends MovableObject {

  


    constructor(imagePath: string, x:number, y:number) {
        super();
        this.loadImage(imagePath);
        this.x = x;
        this.y = y;
        this.width = 120;
        this.height = 120;
    }
}








