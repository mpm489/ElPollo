import { MovableObject } from "./movable-object.class";

export class CoinBar extends MovableObject {
    COINBAR_IMAGES = [
        '../../assets/img/7.Marcadores/Barra/Marcador moneda/azul/0_.png',
        '../../assets/img/7.Marcadores/Barra/Marcador moneda/azul/20_.png',
        '../../assets/img/7.Marcadores/Barra/Marcador moneda/azul/40_.png',
        '../../assets/img/7.Marcadores/Barra/Marcador moneda/azul/60_.png',
        '../../assets/img/7.Marcadores/Barra/Marcador moneda/azul/80_.png',
        '../../assets/img/7.Marcadores/Barra/Marcador moneda/azul/100_.png'

    ];

    percentage: number = 0;


    constructor() {
        super();
        this.loadImages(this.COINBAR_IMAGES);
        this.x = 190;
        this.y = 0;
        this.width = 150;
        this.height = 60;
        this.setPercentage(this.percentage);
    }


    setPercentage(percentage: number) {
        this.percentage = percentage;
        let path = this.COINBAR_IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }


    resolveImageIndex(): number {
        if (this.percentage == 15) {
            return 5;
        } else if (this.percentage > 12) {
            return 4;
        } else if (this.percentage > 9) {
            return 3;
        } else if (this.percentage > 6) {
            return 2;
        } else if (this.percentage > 3) {
            return 1;
        } else {
            return 0;
        }
    }
}