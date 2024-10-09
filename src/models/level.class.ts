import { BackgroundObject } from "./background-object.class";
import { Bottle } from "./bottles.class";
import { Chicken } from "./chicken.class";
import { Cloud } from "./cloud.class";
import { Coin } from "./coin.class";
import { Endboss } from "./endboss.class";
import { World } from "./world.class";

export class Level {
    level_end_x: number = 2200;
    enemies: Chicken[];
    clouds: Cloud[];
    backgroundObjects: BackgroundObject[];
    coins: Coin[];
    bottles: Bottle[];
    world: World;

    constructor(world: World) {
        this.world = world;
        this.enemies = this.initEnemies();
        this.clouds = this.initClouds();
        this.backgroundObjects = this.initBackgroundObjects();
        this.coins = this.initCoins();
        this.bottles = this.initBottle();
    }

    initEnemies(): Chicken[] {
        return [
            new Chicken(), new Chicken(), new Chicken(), new Chicken(), new Chicken(),
            new Chicken(), new Chicken(),new Chicken(), new Chicken(), 
            new Endboss(this.world)
        ];
    }

    initClouds(): Cloud[] {
        return [new Cloud()];
    }

    initBackgroundObjects(): BackgroundObject[] {
        return [
            new BackgroundObject('../../assets/img/5.Fondo/Capas/5.cielo_1920-1080px.png', -719),
            new BackgroundObject('../../assets/img/5.Fondo/Capas/3.Fondo3/2.png', -719),
            new BackgroundObject('../../assets/img/5.Fondo/Capas/2.Fondo2/2.png', -719),
            new BackgroundObject('../../assets/img/5.Fondo/Capas/1.suelo-fondo1/2.png', -719),

            new BackgroundObject('../../assets/img/5.Fondo/Capas/5.cielo_1920-1080px.png', 0),
            new BackgroundObject('../../assets/img/5.Fondo/Capas/3.Fondo3/1.png', 0),
            new BackgroundObject('../../assets/img/5.Fondo/Capas/2.Fondo2/1.png', 0),
            new BackgroundObject('../../assets/img/5.Fondo/Capas/1.suelo-fondo1/1.png', 0),

            new BackgroundObject('../../assets/img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719),
            new BackgroundObject('../../assets/img/5.Fondo/Capas/3.Fondo3/2.png', 719),
            new BackgroundObject('../../assets/img/5.Fondo/Capas/2.Fondo2/2.png', 719),
            new BackgroundObject('../../assets/img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719),

            new BackgroundObject('../../assets/img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 2),
            new BackgroundObject('../../assets/img/5.Fondo/Capas/3.Fondo3/1.png', 719 * 2),
            new BackgroundObject('../../assets/img/5.Fondo/Capas/2.Fondo2/1.png', 719 * 2),
            new BackgroundObject('../../assets/img/5.Fondo/Capas/1.suelo-fondo1/1.png', 719 * 2),

            new BackgroundObject('../../assets/img/5.Fondo/Capas/5.cielo_1920-1080px.png', 719 * 3),
            new BackgroundObject('../../assets/img/5.Fondo/Capas/3.Fondo3/2.png', 719 * 3),
            new BackgroundObject('../../assets/img/5.Fondo/Capas/2.Fondo2/2.png', 719 * 3),
            new BackgroundObject('../../assets/img/5.Fondo/Capas/1.suelo-fondo1/2.png', 719 * 3),
        ];
    }

    initCoins() {
        return [
            new Coin('../../assets/img/8.Coin/Moneda1.png', 600, 200),
            new Coin('../../assets/img/8.Coin/Moneda1.png', 640, 190),
            new Coin('../../assets/img/8.Coin/Moneda1.png', 680, 200),
            new Coin('../../assets/img/8.Coin/Moneda1.png', 710, 230),
            new Coin('../../assets/img/8.Coin/Moneda1.png', 570, 230,),
            new Coin('../../assets/img/8.Coin/Moneda1.png', 540, 265,),
            new Coin('../../assets/img/8.Coin/Moneda1.png', 740, 265,),
            new Coin('../../assets/img/8.Coin/Moneda1.png', 520, 300,),
            new Coin('../../assets/img/8.Coin/Moneda1.png', 760, 295,),
            new Coin('../../assets/img/8.Coin/Moneda1.png', 600 * 3, 200),
            new Coin('../../assets/img/8.Coin/Moneda1.png', 615 * 3, 200),
            new Coin('../../assets/img/8.Coin/Moneda1.png', 630 * 3, 200),
            new Coin('../../assets/img/8.Coin/Moneda1.png', 615 * 3, 160),
            new Coin('../../assets/img/8.Coin/Moneda1.png', 630 * 3, 160),
            new Coin('../../assets/img/8.Coin/Moneda1.png', 645 * 3, 160),
        ];
    }

    initBottle() {
        return [
            new Bottle('../../assets/img/6.botella/2.Botella_enterrada2.png', 350, 360),
            new Bottle('../../assets/img/6.botella/2.Botella_enterrada2.png', 380, 360),
            new Bottle('../../assets/img/6.botella/2.Botella_enterrada2.png', 390, 360),
            new Bottle('../../assets/img/6.botella/2.Botella_enterrada2.png', 395, 360),
            new Bottle('../../assets/img/6.botella/2.Botella_enterrada2.png', 400, 360),
            new Bottle('../../assets/img/6.botella/2.Botella_enterrada2.png', 410, 360),
            new Bottle('../../assets/img/6.botella/2.Botella_enterrada1.png', 400 * 3, 390),
            new Bottle('../../assets/img/6.botella/2.Botella_enterrada1.png', 430 * 3, 390),
            new Bottle('../../assets/img/6.botella/2.Botella_enterrada1.png', 450 * 3, 360),
            new Bottle('../../assets/img/6.botella/2.Botella_enterrada1.png', 460 * 3, 360),
            new Bottle('../../assets/img/6.botella/2.Botella_enterrada1.png', 470 * 3, 360),
            new Bottle('../../assets/img/6.botella/2.Botella_enterrada1.png', 480 * 3, 360),



        ];
    }


}
