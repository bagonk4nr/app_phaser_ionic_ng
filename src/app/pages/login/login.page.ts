import { Component } from '@angular/core';
import { LoadingPage } from '../loading/loading.page';
import { WinPage } from '../win/win.page';
import { LoserPage } from '../loser/loser.page';
import { Lvl1Page } from '../lvl1/lvl1.page';
import { LvlsPage } from '../lvls/lvls.page';
import { SettingsPage } from '../settings/settings.page';

import {
  Scene3D, enable3d, Canvas
} from '@enable3d/phaser-extension';
import 'Phaser';
import { LayoutLogin } from '../../config/layout/layoutlogin';
import { LayoutAll } from '../../config/layout/layoutall';



@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage extends Scene3D {
  private music: any;
  private play: any;
  private settings: any;
  private inGame: any;
  private layoutLogin: any;
  private layoutAll: any;


  constructor() {
    super({ key: 'LoginPage' });
    this.layoutLogin = new LayoutLogin(this);
    this.layoutAll = new LayoutAll(this);

  }

  init(data) {
    this.layoutAll.initAll()

    this.layoutLogin.clearStorage

  }

  preload() {


    this.layoutLogin.loadBgImage
    this.layoutLogin.loadImgPlay
    this.layoutLogin.loadImgSettings
    this.layoutLogin.loadAudio
  }

  create() {
    this.layoutAll.textureBG

    this.play = this.layoutLogin.buttonPlay
    this.play.displayWidth = 300
    this.play.displayHeight = 300
    this.play.on('pointerdown', (pointer) => {this.playnOnClick(pointer)}, this);

    this.settings = this.layoutLogin.buttonSettings
    this.settings.displayWidth = 300
    this.settings.displayHeight = 300
    this.settings.on('pointerdown', (pointer) => {this.settingsOnClick(pointer)}, this);

    this.input.on('pointerover', (event, gameObjects) => {this.OnOver(gameObjects)}, this);
    this.input.on('pointerout',  (event, gameObjects) => {this.OnOut(gameObjects)}, this);



    this.music = this.layoutLogin.musicLogin

    this.layoutAll.playOnOff()


    this.layoutAll.renderAll()


  }

  update() {
    if (this.inGame != undefined) {

        if (this.inGame == 1) {
            this.inGame = undefined
            this.layoutAll.changeScene(this, LoadingPage.name, 'LvlsPage', 'LvlsPage', null)

        }else if(this.inGame == 2) {
            this.inGame = undefined
            this.layoutAll.changeScene(this, SettingsPage.name, this.constructor.name, this.constructor.name, this.music)
        }

    }
  }

  settingsOnClick(p) {
    if (p.leftButtonDown()) {
            this.inGame = 2;
    }

  }

  playnOnClick(p) {
    if (p.leftButtonDown()) {
            this.inGame = 1;
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


const config = {
  type: Phaser.WEBGL,
  parent: 'content',
  transparent: true,
  antialias: false,
  // width: 1024,
  // height: 768,
  // physics:{
  //       default:'matter',
  //   },
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
    width: window.screen.width * window.devicePixelRatio, //1024,
    height: window.screen.height * window.devicePixelRatio, //768,
    pageAlignHorizontally: true,
    pageAlignVertically: true,
  },
  scene: [LoginPage, LoadingPage, LvlsPage, Lvl1Page, WinPage, LoserPage, SettingsPage],
  ...Canvas()
};
let wasm = 'assets/lib';
enable3d(() => new Phaser.Game(config)).withPhysics(wasm);
