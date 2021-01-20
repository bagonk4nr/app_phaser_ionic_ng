import { Component, Injectable } from '@angular/core';
import 'Phaser';
import {
  Scene3D, ExtendedObject3D
} from '@enable3d/phaser-extension';
import { LayoutAll } from '../../config/layout/layoutall';
import { LayoutLoading } from '../../config/layout/layoutloading';


@Injectable({ providedIn: 'root' })
@Component({
  selector: 'app-loading',
  templateUrl: './loading.page.html',
  styleUrls: ['./loading.page.scss'],
})
export class LoadingPage extends Scene3D {

  private nScene: any;
  private runPanda: any;
  private music: any;
  private inGame: any;
  private layoutAll: any;
  private layoutloading: any;
  private dataPassing: any;
  private inType: any;
  private platformMaterial: any;
  private scalenya: any;
  private sensor: any;

  constructor() {
    super({ key: 'LoadingPage' });
    this.layoutAll = new LayoutAll(this);
    this.layoutloading = new LayoutLoading(this);
    this.platformMaterial = this.layoutAll.platformMaterial
    this.scalenya = this.layoutAll.scale

  }

  init(data) {

    this.layoutAll.initAll()
    delete this.sensor
    delete this.runPanda
    this.runPanda = undefined
    this.nScene = data.scene1
    // console.log(this.nScene)
    this.dataPassing = data.data
    this.inType = data.type
    // console.log(this.inType)

  }

  preload() {
    this.layoutloading.imageLoading
    this.layoutloading.audioLoading
    this.layoutloading.imgBG

  }

  create() {
    this.layoutAll.textureBG

    this.sensor = new ExtendedObject3D()
    this.runPanda = new ExtendedObject3D()
    // sensor.position.setY(0)
    this.third.physics.add.existing(this.sensor, { mass: 1e-8, shape: 'box', width: 0.2, height: 0.2, depth: 0.2 })
    this.sensor.body.setCollisionFlags(4)

    let width = this.third.renderer.domElement.clientWidth
    let height = this.third.renderer.domElement.clientHeight

    if (width < height && width < 500) {
        this.layoutloading.gltfFile(-18)
    } else if (width > 500 && width < 800) {
        this.layoutloading.gltfFile(-13)
    } else {
        this.layoutloading.gltfFile(-10)
    }



    this.layoutloading.textLoadings()

    this.music = this.sound.add('loading');

    this.layoutAll.playOnOff()


     setTimeout(() => {
       // console.log('complete')
      this.changeScene()
    }, 25000);

    this.layoutAll.renderAll()


  }

  update() {
    if (this.inGame == 1) {
        this.inGame = undefined
        this.layoutAll.changeScene(this, this.nScene, this.nScene, this.dataPassing, null, this.inType)

    }
  }

  changeScene() {
    this.inGame = 1;
  }


}
