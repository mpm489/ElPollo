import { MovableObject } from "./movable-object.class";

export class Chicken extends MovableObject {
    public override y: number = 380;
    public override width: number = 50;
    public override height: number = 50;
    IMAGES_WALKING: string[] = [
        '../../assets/img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/1.Ga_paso_derecho.png',
        '../../assets/img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/2-Ga_centro.png',
        '../../assets/img/3.Secuencias_Enemy_básico/Versión_Gallinita (estas salen por orden de la gallina gigantona)/3.Ga_paso izquierdo.png',

    ]
    constructor() {
        super();  // Ruft den Konstruktor der Elternklasse auf
        this.loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.x = 300 + Math.random() * 900;
        this.speed = 0.1 + Math.random() * 0.3;
        this.animate();

    }

    animate(): void {
        this.moveLeft ();
        setInterval(() => {
            this.currentImage++;
            if (this.currentImage >= this.IMAGES_WALKING.length) {
                this.currentImage = 0;
            }
            let path = this.IMAGES_WALKING[this.currentImage];
            this.img = this.imageCache[path];
        }, 1000/2);
    }

   

}
