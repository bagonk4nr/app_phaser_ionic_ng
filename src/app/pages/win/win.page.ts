import { Component, Injectable } from '@angular/core';
import { LoadingPage } from '../loading/loading.page';
import {
  Scene3D
} from '@enable3d/phaser-extension';
import 'Phaser';
import { LayoutAll } from '../../config/layout/layoutall';

@Injectable({ providedIn: 'root' })
// @Component({
//   selector: 'app-win',
//   templateUrl: './win.page.html',
//   styleUrls: ['./win.page.scss'],
// })
export class WinPage extends Scene3D {

  private nScene: any;
  private video: any;
  private layoutAll: any;
  private inGame: any;
  private inData: any;

  constructor() {
    super({ key: 'WinPage' });
    this.layoutAll = new LayoutAll(this);
  }

  init(data) {
    this.layoutAll.initAll()
    this.nScene = data.scene1
    // console.log(this.nScene)
    this.inData = data.data

  }

  preload() {
    this.load.video('win', ['assets/video/win.mp4'])
    this.third.load.preload('background', 'assets/img/bg/win.png');

  }

  create() {
    this.third.load.texture('background').then(background => (this.third.scene.background = background));
    this.video = this.add.video(((window.screen.width * window.devicePixelRatio)/2), ((window.screen.height * window.devicePixelRatio)/2), 'win');

    this.video.play(true);
    let durationVideo = this.video.getDuration()
    // console.log(this.inGame, 'this.inGame')
    // console.log(durationVideo, 'durationVideo')
      setTimeout(() => {
        // console.log('complete video')
       this.inGame = 1

     }, 50000)

  }

  update() {
    if (this.inGame != undefined) {

      this.nextScene()
    }
  }

  nextScene() {
    this.inGame = undefined
    this.layoutAll.changeScene(this, LoadingPage.name, this.nScene, this.inData, null, 'wins')

  }

}
