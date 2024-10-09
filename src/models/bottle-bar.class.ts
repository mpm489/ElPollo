import { MovableObject } from "./movable-object.class";

export class BottleBar extends MovableObject {
    BOTTLE_IMAGES = [
        '../../assets/img/7.Marcadores/Barra/Marcador_botella/Azul/0_.png',
        '../../assets/img/7.Marcadores/Barra/Marcador_botella/Azul/20_.png',
        '../../assets/img/7.Marcadores/Barra/Marcador_botella/Azul/40_.png',
        '../../assets/img/7.Marcadores/Barra/Marcador_botella/Azul/60_.png',
        '../../assets/img/7.Marcadores/Barra/Marcador_botella/Azul/80_.png',
        '../../assets/img/7.Marcadores/Barra/Marcador_botella/Azul/100_.png'

    ];

    percentage: number = 0;


    constructor() {
        super();
        this.loadImages(this.BOTTLE_IMAGES);
        this.x = 355;
        this.y = 0;
        this.width = 150;
        this.height = 60;
        this.setPercentage(this.percentage);
    }


    setPercentage(percentage: number) {
        this.percentage = percentage;
        let path = this.BOTTLE_IMAGES[this.resolveImageIndex()];
        this.img = this.imageCache[path];
    }

    
    resolveImageIndex(): number {
        if (this.percentage == 12) {
            return 5;
        } else if (this.percentage > 10) {
            return 4;
        } else if (this.percentage > 8) {
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