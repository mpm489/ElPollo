import { Keyboard } from "./keyboard.class";
import { MovableObject } from "./movable-object.class";
import { World } from "./world.class";

export class Character extends MovableObject {
    world: World;
    keyboard: Keyboard = new Keyboard();
    override speed: number = 10;
    private loseAudioPlayed: boolean = false; 
    walktAudio = new Audio('../../assets/audio/running.mp3');
    painAudio = new Audio('../../assets/audio/pain.mp3');
    jumpAudio = new Audio('../../assets/audio/jumo.mp3');






    IMAGES_WALKING: string[] = [
        '../../assets/img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-21.png',
        '../../assets/img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-22.png',
        '../../assets/img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-23.png',
        '../../assets/img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-24.png',
        '../../assets/img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-25.png',
        '../../assets/img/2.Secuencias_Personaje-Pepe-corrección/2.Secuencia_caminata/W-26.png'
    ];
    IMAGES_JUMPING: string[] = [
        '../../assets/img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-31.png',
        '../../assets/img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-32.png',
        '../../assets/img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-33.png',
        '../../assets/img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-34.png',
        '../../assets/img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-35.png',
        '../../assets/img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-36.png',
        '../../assets/img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-37.png',
        '../../assets/img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-38.png',
        '../../assets/img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-39.png',
        '../../assets/img/2.Secuencias_Personaje-Pepe-corrección/3.Secuencia_salto/J-40.png'

    ];
    IMAGES_DEAD: string[] = [
        `../../assets/img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-51.png`,
        '../../assets/img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-52.png',
        '../../assets/img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-53.png',
        '../../assets/img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-54.png',
        '../../assets/img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-55.png',
        '../../assets/img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-56.png',
        '../../assets/img/2.Secuencias_Personaje-Pepe-corrección/5.Muerte/D-57.png'
    ];
    IMAGES_HURT: string[] = [
        '../../assets/img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-41.png',
        '../../assets/img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-42.png',
        '../../assets/img/2.Secuencias_Personaje-Pepe-corrección/4.Herido/H-43.png'
    ];



    constructor(world: World) {
        super();
        this.world = world;
        this.loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_JUMPING);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_HURT);
        this.animate();
        this.applyGravity();
    }

    animate(): void {
        setInterval(() => {
            this.updateAnimation();
            this.updatePosition();
            this.world.camera_x = -this.x + 100;
        }, 1000 / 30);
    }

    private updateAnimation(): void {
        if (this.isDead()) {
            this.playAnimation(this.IMAGES_DEAD);
            if (!this.loseAudioPlayed) {
                this.world.loseAudio.play();
                this.loseAudioPlayed = true;
            }
            setTimeout(() => this.fly(), 2000);
            this.keyboard.RIGHT = false;
            this.keyboard.LEFT = false;
            this.world.overgameAnimation = true;
        } else if (this.isHurt()) {
            this.playAnimation(this.IMAGES_HURT);
            this.painAudio.play();
        } else if (this.isAboveGround()) {
            this.playAnimation(this.IMAGES_JUMPING);
        }
    }

    private updatePosition(): void {
        this.walktAudio.pause();
        if (this.keyboard.RIGHT && this.x < this.world.level.level_end_x) {
            this.moveRight();
            this.playAnimation(this.IMAGES_WALKING);

        }
        if (this.keyboard.LEFT && this.x > 0) {
            this.moveLeft();
            this.playAnimation(this.IMAGES_WALKING);

        }
        if (this.keyboard.SPACE && !this.isAboveGround()) {
            this.jump();
            this.jumpAudio.play();

        }
    }






    moveRight(): void {
        this.x += this.speed;
        this.otherDirection = false;
        this.walktAudio.play();
    }

    override moveLeft(): void {
        this.x -= this.speed;
        this.otherDirection = true;
        this.walktAudio.play();

    }
}
