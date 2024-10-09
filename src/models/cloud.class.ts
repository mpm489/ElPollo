import { MovableObject } from "./movable-object.class";

export class Cloud extends MovableObject {
    public override width: number = 500;

    constructor() {
        super();  // Ruft den Konstruktor der Elternklasse auf
        this.loadImage('../../assets/img/5.Fondo/Capas/4.nubes/1.png');
        this.x = Math.random() * 500;
        this.moveLeft();
    }

   
        
        // const fly = () => {
        //     this.x -= 0.15;
        //     requestAnimationFrame(fly);
        // };
        // requestAnimationFrame(fly);
    
}

