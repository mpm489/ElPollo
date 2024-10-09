import { MovableObject } from "./movable-object.class";

export class BackgroundObject extends MovableObject{
public override width: number = 720;
public override height: number = 480;

constructor(imagePath: string, x: number,) {
    super();
    this.loadImage(imagePath);
    this.x = x;
    this.y = 480 - this.height;
}


}