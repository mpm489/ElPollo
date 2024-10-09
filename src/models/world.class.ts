import { BottleBar } from "./bottle-bar.class";
import { Bottle } from "./bottles.class";
import { Character } from "./character.class";
import { CoinBar } from "./coin-bar.class";
import { Coin } from "./coin.class";
import { Level } from "./level.class";  // Level importieren
import { MovableObject } from "./movable-object.class";
import { StatusBar } from "./status-bar.class";
import { Keyboard } from "./keyboard.class";
import { ThrowableObject } from "./throwable-object.class";
import { Endboss } from './endboss.class'; // Stelle sicher, dass der Pfad korrekt ist


export class World {
  public ctx: CanvasRenderingContext2D;
  public keyboard: Keyboard = new Keyboard();
  public character: Character;
  public level: Level;
  camera_x = 0;
  public statusbar = new StatusBar();
  public coinbar = new CoinBar();
  public bottleBar = new BottleBar();
  public coins: Coin[] = [];
  public bottles: Bottle[] = [];
  public throwableObjects: ThrowableObject[] = [];
  public boss: MovableObject;
  public collect_sound = new Audio('../../assets/audio/botle.mp3');
  public coin_sound = new Audio('../../assets/audio/coin.mp3');
  public loseAudio = new Audio('../../assets/audio/lose.mp3');
  public overgameAnimation: boolean = false;

  constructor(ctx: CanvasRenderingContext2D) {
    this.ctx = ctx;
    this.level = new Level(this);
    this.character = new Character(this);
    this.character.img.onload = () => this.draw();
    this.checkCollisions();
    this.run();
    this.checkThrowObjects();
  }

  run(): void {
    setInterval(() => {
      this.endbossColision();
      this.coinColision();
      this.botleColision();
      this.checkBossAttack(); // Füge diesen Aufruf hinzu


    }, 200);
  }

  checkBossAttack(): void {
    if (this.character.x >= 2000) {
      (this.boss as Endboss).attack(); 
    }
  }

  checkCollisions(): void {
    setInterval(() => {
      this.level.enemies.forEach(enemy => {
        if (this.character.isColliding(enemy)) {
          this.character.hit();
          this.statusbar.setPercentage(this.character.energy);
        }
      });
    }, 1000);
  }

  endbossColision(): void {
    this.boss = this.level.enemies[this.level.enemies.length - 1];
    this.throwableObjects.forEach((bottle) => {
      if (this.boss.isColliding(bottle) && !bottle.hasBeenHit) {
        this.boss.hit();
        bottle.hasBeenHit = true;
      }
    });
  }

  coinColision(): void {
    this.level.coins.forEach((coin, i) => {
      if (this.character.isColliding(coin)) {
        this.coins.push(coin);
        this.level.coins.splice(i, 1);
        this.coinbar.setPercentage(this.coins.length);
        this.coin_sound.play();
      }
    });
  }

  botleColision(): void {
    this.level.bottles.forEach((bottle, i) => {
      if (this.character.isColliding(bottle)) {
        this.bottles.push(bottle);
        this.level.bottles.splice(i, 1);
        this.bottleBar.setPercentage(this.bottles.length);
        this.collect_sound.play();
      }
    });
  }

  checkThrowObjects(): void {
    setInterval(() => {
      if (this.keyboard.THROW) {
        let bottle = new ThrowableObject(this.character.x + 100, this.character.y + 100);
        if (this.bottles.length > 0) {
          this.throwableObjects.push(bottle);
          this.bottles.splice(0, 1)
          this.bottleBar.setPercentage(this.bottles.length);
        }
      }
    }, 100);
  }

  draw(): void {
    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.level.backgroundObjects);  // Hintergrundobjekte aus dem Level
    this.addObjectsToMap(this.level.clouds);  // Wolken aus dem Level
    this.ctx.translate(-this.camera_x, 0);
    this.addToMap(this.statusbar);
    this.addToMap(this.coinbar);
    this.addToMap(this.bottleBar);
    this.ctx.translate(this.camera_x, 0);
    this.addObjectsToMap(this.throwableObjects);
    this.addObjectsToMap(this.level.coins);
    this.addObjectsToMap(this.level.bottles);
    this.addToMap(this.character);
    this.addObjectsToMap(this.level.enemies);  // Gegner aus dem Level
    this.ctx.translate(-this.camera_x, 0);

    requestAnimationFrame(() => this.draw());
  }

  addObjectsToMap(objects: MovableObject[]): void {
    objects.forEach(o => {
      this.addToMap(o);
    });
  }

  addToMap(mo: MovableObject): void {
    if (mo.otherDirection) {
      this.flipImage(mo);
    } else {
      this.ctx.drawImage(mo.img, mo.x, mo.y, mo.width, mo.height);

    }
  }

  flipImage(mo) {
    this.ctx.save();
    this.ctx.translate(mo.x + mo.width, mo.y);
    this.ctx.scale(-1, 1);
    this.ctx.drawImage(mo.img, 0, 0, mo.width, mo.height);
    this.ctx.restore();
  }
}
