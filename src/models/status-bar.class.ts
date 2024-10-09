import { MovableObject } from "./movable-object.class";

export class StatusBar extends MovableObject {
    IMAGES = [
        '../../assets/img/7.Marcadores/Barra/Marcador vida/azul/0_.png',
        '../../assets/img/7.Marcadores/Barra/Marcador vida/azul/20_.png',
        '../../assets/img/7.Marcadores/Barra/Marcador vida/azul/40_.png',
        '../../assets/img/7.Marcadores/Barra/Marcador vida/azul/60_.png',
        '../../assets/img/7.Marcadores/Barra/Marcador vida/azul/80_.png',
        '../../assets/img/7.Marcadores/Barra/Marcador vida/azul/100_.png'
    ];

    percentage: number = 100;


    constructor() {
        super();
        this.loadImages(this.IMAGES);
        this.x = 20;
        this.y = 0;
        this.width = 150;
        this.height = 60;
        this.setPercentage(this.percentage);
    }

    setPercentage(percentage: number): void {
        this.percentage = percentage;
        let path = this.IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];

    }


    resolveImageIndex(): number {
        if (this.percentage == 100) {
            return 5;
        } else if (this.percentage > 80) {
            return 4;
        } else if (this.percentage > 60) {
            return 3;
        } else if (this.percentage > 40) {
            return 2;
        } else if (this.percentage > 20) {
            return 1;
        } else {
            return 0;
        }
    }
}
