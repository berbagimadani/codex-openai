import Phaser from 'phaser';
import gsap from 'gsap';

export class CountObjectsGame {
  constructor(parent, config) {
    this.parent = parent;
    this.config = config;
    this._createGame();
  }

  _createGame() {
    this.game = new Phaser.Game({
      type: Phaser.AUTO,
      width: 800,
      height: 600,
      parent: this.parent,
      scene: {
        preload: this.preload.bind(this),
        create: this.create.bind(this)
      }
    });
  }

  preload() {
    const level = this.config.levels[0];
    this.load.image('object', level.objectImage);
  }

  create() {
    const level = this.config.levels[0];
    const objects = [];
    for (let i = 0; i < level.count; i++) {
      const sprite = this.add.sprite(100 + i * 100, 300, 'object');
      objects.push(sprite);
    }
    gsap.from(objects, { scale: 0, duration: 0.5, stagger: 0.1 });
  }

  destroy() {
    if (this.game) {
      this.game.destroy(true);
    }
  }
}
