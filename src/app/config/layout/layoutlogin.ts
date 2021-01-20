import { Injectable } from '@angular/core';
import { Sounds } from '../utils/sounds';

import 'Phaser';

@Injectable({ providedIn: 'root' })
export class LayoutLogin {

  private scene: any;
  private sound: any;

  constructor(parent){
    this.scene = parent
    this.sound = new Sounds(parent);
  }

  get loadBgImage(): any {
    return this.scene.third.load.preload('background', 'assets/img/bg/login.png');
  }

  get loadImgPlay(): any {
    return this.scene.load.image('play', 'assets/img/bg/play.png');
  }

  get loadImgSettings(): any {
    return this.scene.load.image('settings', 'assets/img/bg/settings.png');
  }

  get loadAudio(): any {
    return this.scene.load.audio('login', ['assets/music/login.mp3'])
  }

  get configSound(): any {
    return this.sound.loadConfigAudio
  }

  get buttonPlay(): any {
    return this.scene.add.sprite(((window.screen.width * window.devicePixelRatio)/2) - 175, ( (window.screen.height * window.devicePixelRatio)/2), 'play').setInteractive({ useHandCursor: true  });
  }

  get buttonSettings(): any {
    return this.scene.add.sprite(((window.screen.width * window.devicePixelRatio)/2) + 175, ( (window.screen.height * window.devicePixelRatio)/2), 'settings').setInteractive({ useHandCursor: true  });
  }

  get musicLogin(): any {
    return this.scene.sound.add('login');
  }




}
