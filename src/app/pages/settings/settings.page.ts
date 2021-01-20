// import { Component, Injectable } from '@angular/core';

import {
  Scene3D
} from '@enable3d/phaser-extension';
import 'Phaser';
import { LayoutSettings } from '../../config/layout/layoutsettings';
import { LayoutAll } from '../../config/layout/layoutall';


// @Component({
//   selector: 'app-settings',
//   templateUrl: './settings.page.html',
//   styleUrls: ['./settings.page.scss'],
// })
export class SettingsPage extends Scene3D {
  private nScene: any;
  private iconSoundOn: any;
  private iconSoundOff: any;
  private music: any;
  private layoutSettings: any;
  private posXs: any;
  private musicOn: any;
  private textOn: any;
  private textOff: any;
  private buttonBack: any;

  private layoutAll: any;
  private inTheGame: any;

  constructor() {
    super({ key: 'SettingsPage' });
    this.layoutAll = new LayoutAll(this);
    this.layoutSettings = new LayoutSettings(this);
  }

  init(data) {

    this.layoutAll.initAll()

    this.nScene = data.data
    // console.log(this.nScene)
    this.music = data.music
  }

  preload() {
    this.layoutSettings.loadImgBg
    this.layoutSettings.loadBackBtn
    this.layoutAll.soundImageOn;
    this.layoutAll.soundImageOff;
  }

  create() {

    this.layoutAll.textureBG
    this.buttonBack = this.layoutSettings.buttonBack
    this.buttonBack.name = 'backButton'
    this.buttonBack.scale = 0.1

    // this.layoutSettings.centerOfScreen = 4;
    // let setPosition = this.layoutSettings.screen
    //
    // setPosition.forEach(pos => {
    //   this.posXs = JSON.parse(pos);
    //   console.log(this.posXs)
    //   const rect1 = this.add.rectangle(this.posXs.x, this.posXs.y, 280, 210)
    //   rect1.setStrokeStyle(2, 0x39FF14);
    // })

    const soundsText = this.add.text(150, 150, 'Sounds', { fontSize: '32px', fill: '#ffff00' });
    // console.log(this.layoutAll.soundOnOffVal)

    this.layoutAll.iconSoundSetting(180, 210)

    this.input.on('pointerdown',  (pointer, gameObjects) => { this.OnClick(pointer, gameObjects) }, this);

    this.input.on('pointerover', (event, gameObjects) => {this.OnOver(gameObjects)}, this);
    this.input.on('pointerout',  (event, gameObjects) => {this.OnOut(gameObjects)}, this);

    this.layoutAll.renderAll()

  }

  update() {

    this.layoutAll.iconSoundOffOn(180, 210)

    if (this.inTheGame != undefined) {
        if (this.inTheGame == 1) {

          // console.log(this.nScene)
          this.inTheGame = undefined
          this.layoutAll.changeScene(this, this.nScene, null, null)

        }
    }
  }

  OnClick(p, gameObjects) {

    this.musicOn = this.layoutAll.soundOnOffVal
    if (p.leftButtonDown()) {
        // console.log(gameObjects[0].name)
        if (gameObjects[0].name == 'backButton') this.inTheGame = 1;
        else {


          this.layoutAll.onSoundOff()
        }
    }
  }

  OnOver(justOver) {
    if (justOver) {
      // justOver[0].alpha = 0.5;
      justOver[0].setTint(0xc0c0c0);
    }
  }

  OnOut(justOut) {
    if (justOut) {
      // justOut[0].alpha = 1;
      justOut[0].clearTint();
    }
  }
}
