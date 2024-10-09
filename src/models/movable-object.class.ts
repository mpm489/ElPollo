
export class MovableObject {
    public x: number = 0;
    public y: number = 0;
    public height: number = 350;
    public width: number = 150;
    public img: HTMLImageElement = new Image();
    public imageCache: {} = {};
    public currentImage: number = 0;
    public speed: number = 0.15;
    public otherDirection: boolean = false;
    public speedY: number = 0;
    public acceleration: number = 2;
    public energy: number = 100;
    private lastHit: number = 0;
    public explosion: boolean = false;

    constructor() { }


    applyGravity(): void {
        setInterval(() => {
            if (this.isAboveGround() || this.speedY > 0) {
                this.y -= this.speedY;
                this.speedY -= this.acceleration;
            }
        }, 1000 / 25);
    }

    isAboveGround(): boolean {
        return this.y < 80;
    }

    loadImage(path: string): void {
        this.img.src = path;

    }

    loadImages(arr: string[]): void {
        arr.forEach((path) => {
            let img = new Image();
            img.src = path;
            this.imageCache[path] = img;
        });
    }

    moveLeft() {
        setInterval(() => {
            this.x -= this.speed;
        }, 1000 / 60);
    }

    jump() {
        this.speedY = 25;
    }


    playAnimation(images: string[]): void {
        // Inkrementiere das aktuelle Bild
        this.currentImage++;

        // Wenn das Ende des Bildarrays erreicht ist, setze auf das erste Bild zurück
        if (this.currentImage >= images.length) {
            this.currentImage = 0;
        }

        // Setze das aktuelle Bild auf das zwischengespeicherte Bild
        this.img = this.imageCache[images[this.currentImage]];
    }

    isColliding(mo) {
        return this.x + this.width > mo.x &&
            this.y + this.height > mo.y &&
            this.x < mo.x &&
            this.y < mo.y + mo.height
    }

    hit(): void {
        this.energy -= 5;
        if (this.energy < 0) {
            this.energy = 0;
        } else {
            this.lastHit = new Date().getTime();
        }
    }

    isDead(): boolean {
        return this.energy === 0
    }

    isHurt(): boolean {
        let timePassed = new Date().getTime() - this.lastHit;
        timePassed = timePassed / 1000;
        return timePassed < 0.5;
    }

    explode(): boolean {
        return this.explosion = false;

    }

    fly(): void {
        this.y -= this.speedY;
        this.speedY -= this.acceleration;
    }

       

}
