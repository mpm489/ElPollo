import { MovableObject } from "./movable-object.class";
import { World } from "./world.class";

export class Endboss extends MovableObject {
    world: World;
    private loseAudioPlayed: boolean = false;
    public override y: number = 70;
    public override x: number = 2200;
    public override width: number = 400;
    public override height: number = 400;
    public override energy: number = 40;
    public override speedY: number = 0;
    public hitCounter: number = 0;
    private painAudio = new Audio('../../assets/audio/hurt.mp3');
    private deadAudio = new Audio('../../assets/audio/endboss.mp3');



    IMAGES_WALKING: string[] = [
        '../../assets/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G5.png',
        '../../assets/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G6.png',
        '../../assets/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G7.png',
        '../../assets/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G8.png',
        '../../assets/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G9.png',
        '../../assets/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G10.png',
        '../../assets/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G11.png',
        '../../assets/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/1.Alerta/G12.png'
    ];
    IMAGES_HURT: string[] = [
        '../../assets/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G21.png',
        '../../assets/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G22.png',
        '../../assets/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/3.Herida/G23.png'
    ];
    IMAGES_DEAD = [
        '../../assets/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G24.png',
        '../../assets/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G25.png',
        '../../assets/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/4.Muerte/G26.png',
    ];
    IMAGES_ATTACK = [
        '../../assets/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G13.png',
        '../../assets/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G14.png',
        '../../assets/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G15.png',
        '../../assets/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G16.png',
        '../../assets/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G17.png',
        '../../assets/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G18.png',
        '../../assets/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G19.png',
        '../../assets/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/2.Ateción-ataque/2.Ataque/G20.png'
    ];
    IMAGES_A_WALKING = [
        '../../assets/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G1.png',
        '../../assets/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G2.png',
        '../../assets/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G3.png',
        '../../assets/img/4.Secuencias_Enemy_gigantón-Doña_Gallinota-/1.Caminata/G4.png'

    ]



    constructor(world: World) {
        super();
        this.world = world;
        this.loadImage(this.IMAGES_WALKING[0]);
        this.loadImages(this.IMAGES_WALKING);
        this.loadImages(this.IMAGES_HURT);
        this.loadImages(this.IMAGES_DEAD);
        this.loadImages(this.IMAGES_ATTACK);
        this.loadImages(this.IMAGES_A_WALKING);
        this.animate();
    }

    animate(): void {
        setInterval(() => {
            if (this.isDead()) {
                this.playAnimation(this.IMAGES_DEAD);
                this.fly();
                if (!this.loseAudioPlayed) {
                    this.deadAudio.play();
                    this.loseAudioPlayed = true;
                }
                this.world.overgameAnimation = true;
            } else if (this.isHurt()) {
                this.playAnimation(this.IMAGES_HURT);
                this.painAudio.play();
            }
            else {
                this.playAnimation(this.IMAGES_WALKING);
            }

        }, 100);
    }

    attack(): void {
        this.painAudio.play();
        this.playAnimation(this.IMAGES_ATTACK);
        if (this.x > this.world.character.x) {
            this.x -= 15; // Nach links bewegen
            this.playAnimation(this.IMAGES_A_WALKING);

        } else if (this.x < this.world.character.x) {
            this.x += 15; // Nach rechts bewegen
            this.playAnimation(this.IMAGES_A_WALKING);

        }


    }





}