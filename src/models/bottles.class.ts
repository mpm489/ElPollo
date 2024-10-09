import { MovableObject } from "./movable-object.class";

export class Bottle extends MovableObject {



    constructor(imagePath: string, x:number, y:number) {
        super();
        this.loadImage(imagePath);
        this.x = x;
        this.y = y;
        this.width = 80;
        this.height = 80;
    }
} 