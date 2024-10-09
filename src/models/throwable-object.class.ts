import { MovableObject } from "./movable-object.class";

export class ThrowableObject extends MovableObject {
    THROW_BOTTLE = [
        '../../assets/img/6.botella/Rotación/Mesa de trabajo 1 copia 3.png',
        '../../assets/img/6.botella/Rotación/Mesa de trabajo 1 copia 4.png',
        '../../assets/img/6.botella/Rotación/Mesa de trabajo 1 copia 5.png',
        '../../assets/img/6.botella/Rotación/Mesa de trabajo 1 copia 6.png'
    ];

    EXPLODING = [
        '../../assets/img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 7.png',
        '../../assets/img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 8.png',
        '../../assets/img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 9.png',
        '../../assets/img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 10.png',
        '../../assets/img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 11.png',
        '../../assets/img/6.botella/Rotación/Splash de salsa/Mesa de trabajo 1 copia 12.png'
    ];
    hasBeenHit: boolean = false;

    constructor(x: number, y: number) {
        super();
        this.loadImage(this.THROW_BOTTLE[0]);
        this.loadImages(this.THROW_BOTTLE);
        this.loadImages(this.EXPLODING);
        this.x = x;
        this.y = y;
        this.width = 80;
        this.height = 80;
        this.throw();
    }

    throw(): void {
        this.speedY = 10;
        this.applyGravity();
        
        const intervalId = setInterval(() => {
            this.x += 10;
            this.playAnimation(this.THROW_BOTTLE);

            if (!this.explosion && this.y >= 340 && this.y <= 360) {
                this.playAnimation(this.EXPLODING);
                clearInterval(intervalId); 
            }
        }, 25);
    }

    override isAboveGround(): boolean {
        return this.y < 450;
    }

    
}
