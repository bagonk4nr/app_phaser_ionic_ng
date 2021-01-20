import { Component, Injectable } from '@angular/core';
import 'Phaser';
import {
  Scene3D,
  ExtendedObject3D, THREE
} from '@enable3d/phaser-extension';

import { LoserPage } from '../loser/loser.page';
import { WinPage } from '../win/win.page';

import { LayoutAll } from '../../config/layout/layoutall';
import { LayoutLvls } from '../../config/layout/layoutlvls';
import { CenterScreen } from '../../config/screen/centerscreen';


@Injectable({ providedIn: 'root' })
// @Component({
//   selector: 'app-lvls',
//   templateUrl: './lvls.page.html',
//   styleUrls: ['./lvls.page.scss'],
// })
export class LvlsPage extends Scene3D {

  private boxImgs: any[] = [];
  private boxPositions: any;


  private pictPosition: any;
  private pickedObject: any;


  private boxStars: any;
  private boxXs: any;
  private boxOs: any;
  private boxQ: any;

  private boxArray: any[] = [];
  private boxId: any[] = [];

  private dataArr: any[] = [];

  private boxShape: any;

  private inGame: any;
  private dataLevel2: any[]= [];

  private music: any;
  private topBar: any;

  private layoutAll: any;
  private layoutLvls: any;
  private centerScreen: any;

  private iconSoundOn: any;
  private iconSoundOff: any;

  private musicOn: any;

  private startTime: any;
  private totalTime: any = 0;
  private timeElapsed: any = 0;
  private timeLabel: any;

  private platformMaterial: any;
  private scalenya: any;
  private sensor: any;

  private star: any;
  private bq: any;
  private bx: any;
  private bo: any;
  private panda: any;

  constructor(private location: Location) {
    super({ key: 'LvlsPage' });

    this.layoutAll = new LayoutAll(this);
    this.layoutLvls = new LayoutLvls(this);
    this.centerScreen = new CenterScreen();
    this.platformMaterial = this.layoutAll.platformMaterial
    this.scalenya = this.layoutAll.scale;
    this.star =  window.location.origin + '/assets/img/lvl1/star.glb';
    this.bq =  window.location.origin + '/assets/img/lvl1/bq.glb';
    this.bo =  window.location.origin + '/assets/img/lvl1/bo.glb';
    this.bx =  window.location.origin + '/assets/img/lvl1/bx.glb';
    this.panda =  window.location.origin + '/assets/img/lvl1/panda.glb';
  }

  init(data) {

    this.layoutAll.initAll()

    // this.layoutAll.clearStorage()

    delete this.boxShape
    delete this.boxStars
    delete this.boxXs
    delete this.boxOs
    delete this.boxQ


  }

  preload() {
    this.layoutLvls.audio
    this.layoutLvls.imgBG
    // this.renderer.domElement.addEventListener("mouseover", this.onOver.bind(this, { passive: true} ), true);
    // this.renderer.domElement.addEventListener("mousemove", this.onMove.bind(this, { passive: true} ), true);
    this.layoutAll.soundImageOn;
    this.layoutAll.soundImageOff;
    this.layoutAll.loadTopBar
  }

  create() {
    let topBar = this.layoutAll.topBars

    topBar.displayWidth = ((window.screen.width * window.devicePixelRatio) * 2)
    topBar.displayHeight = 100


    this.layoutAll.iconSoundTopBar(50, 25)

    this.startTime = new Date();
  	this.totalTime = 45;
  	this.timeElapsed = 0;
    this.layoutAll.createTimer()

    // add platforms


    this.layoutAll.textureBG
    let width = this.third.renderer.domElement.clientWidth
    let height = this.third.renderer.domElement.clientHeight

    if (width < height && width < 500) {
        this.centerScreen.centerOfScreen(9, 2.5, 1.75)

    } else if (width > 500 && width < 800) {
        this.centerScreen.centerOfScreen(9, 2.5, 1.75)

    } else {
        this.centerScreen.centerOfScreen(9, 3, 1.75)

    }

    this.boxPositions = this.centerScreen.screen;

    // add a this.sensor
    this.sensor = new ExtendedObject3D()
    // this.sensor.position.setY(0)
    this.third.physics.add.existing(this.sensor, { mass: 1e-8, shape: 'box', width: 0.2, height: 0.2, depth: 0.2 })
    this.sensor.body.setCollisionFlags(4)



    this.boxPositions.forEach((pos, ib) => {
      let posXs = JSON.parse(pos);

      this.third.load.gltf(this.star).then(gltf => {
        this.boxStars = new ExtendedObject3D()
        this.boxStars.add(gltf.scene)
        // console.log(gltf)
        this.boxStars.name = `this.boxStars`
        this.boxStars.scale.set(this.scalenya, this.scalenya, this.scalenya)
        this.boxStars.traverse(child => {

          if (child.isMesh) {
            child.castShadow = child.receiveShadow = true;

          }
        })

        this.boxStars.position.setX(posXs.x + 1)
        this.boxStars.position.setY(posXs.y + 2)

        let platforms =
          [
            this.third.physics.add.box({ name: 'platform-ground', x: posXs.x + 1, y: posXs.y + 2, width: 2, depth: 1, height: 0, mass: 0 }, this.platformMaterial)
          ]

        this.third.add.existing(this.boxStars)

        this.third.physics.add.existing(this.boxStars, { shape: 'box', depth: 120 })
        this.boxStars.body.setCollisionFlags(6)
        this.boxStars.body.setLinearFactor(0, 0, 0)
        this.boxStars.body.setAngularFactor(0, 0, 0)
        this.boxStars.body.setFriction(0)
        this.boxStars.visible = false

        // connect this.sensor to boxStars
        this.third.physics.add.constraints.lock(this.boxStars.body, this.sensor.body)

        this.sensor.body.on.collision((otherObject, event) => {
          if (/platform/.test(otherObject.name)) {
            if (event !== 'end')
              this.boxStars.userData.onGround = true
            else this.boxStars.userData.onGround = false
          }
        })

        this.boxArray.push(this.boxStars);
        if (ib < 3) {
        //   this.boxStars.position.setX(0)
        //   this.boxStars.position.setY(0)
          // this.boxStars.visible = true
          this.dataLevel2.push(this.boxStars)
        }
      })

      this.third.load.gltf(this.bq).then(gltf => {
        this.boxQ = new ExtendedObject3D()
        this.boxQ.add(gltf.scene)
        // console.log(gltf)
        this.boxQ.name = `this.boxQ`
        this.boxQ.scale.set(this.scalenya, this.scalenya, this.scalenya)
        this.boxQ.traverse(child => {

          if (child.isMesh) {
            child.castShadow = child.receiveShadow = true;

          }
        })

        this.boxQ.position.setX(posXs.x + 1)
        this.boxQ.position.setY(posXs.y + 2)

        let platforms =
          [
            this.third.physics.add.box({ name: 'platform-ground', x: posXs.x + 1, y: posXs.y + 2, width: 2, depth: 1, height: 0, mass: 0 }, this.platformMaterial)
          ]

        this.third.add.existing(this.boxQ)

        this.third.physics.add.existing(this.boxQ, { shape: 'box', depth: 120 })
        this.boxQ.body.setCollisionFlags(6)
        this.boxQ.body.setLinearFactor(0, 0, 0)
        this.boxQ.body.setAngularFactor(0, 0, 0)
        this.boxQ.body.setFriction(0)
        this.boxQ.visible = false

        // connect this.sensor to boxQ
        this.third.physics.add.constraints.lock(this.boxQ.body, this.sensor.body)

        this.sensor.body.on.collision((otherObject, event) => {
          if (/platform/.test(otherObject.name)) {
            if (event !== 'end')
              this.boxQ.userData.onGround = true
            else this.boxQ.userData.onGround = false
          }
        })

        this.boxArray.push(this.boxQ);

      })


      this.third.load.gltf(this.bo).then(gltf => {
        this.boxOs = new ExtendedObject3D()
        this.boxOs.add(gltf.scene)
        // console.log(gltf)
        this.boxOs.name = `this.boxOs`
        this.boxOs.scale.set(this.scalenya, this.scalenya, this.scalenya)
        this.boxOs.traverse(child => {

          if (child.isMesh) {
            child.castShadow = child.receiveShadow = true;

          }
        })

        this.boxOs.position.setX(posXs.x + 1)
        this.boxOs.position.setY(posXs.y + 2)

        let platforms =
          [
            this.third.physics.add.box({ name: 'platform-ground', x: posXs.x + 1, y: posXs.y + 2, width: 2, depth: 1, height: 0, mass: 0 }, this.platformMaterial)
          ]

        this.third.add.existing(this.boxOs)

        this.third.physics.add.existing(this.boxOs, { shape: 'box', depth: 120 })
        this.boxOs.body.setCollisionFlags(6)
        this.boxOs.body.setLinearFactor(0, 0, 0)
        this.boxOs.body.setAngularFactor(0, 0, 0)
        this.boxOs.body.setFriction(0)
        this.boxOs.visible = false

        // connect this.sensor to boxOs
        this.third.physics.add.constraints.lock(this.boxOs.body, this.sensor.body)

        this.sensor.body.on.collision((otherObject, event) => {
          if (/platform/.test(otherObject.name)) {
            if (event !== 'end')
              this.boxOs.userData.onGround = true
            else this.boxOs.userData.onGround = false
          }
        })

        this.boxArray.push(this.boxOs);

      })

      this.third.load.gltf(this.bx).then(gltf => {

        this.boxXs = new ExtendedObject3D()
        this.boxXs.add(gltf.scene)
        // console.log(gltf)
        this.boxXs.name = `this.boxXs`
        this.boxXs.scale.set(this.scalenya, this.scalenya, this.scalenya)
        this.boxXs.traverse(child => {

          if (child.isMesh) {
            child.castShadow = child.receiveShadow = true;

          }
        })

        this.boxXs.position.setX(posXs.x + 1)
        this.boxXs.position.setY(posXs.y + 2)

        let platforms =
          [
            this.third.physics.add.box({ name: 'platform-ground', x: posXs.x + 1, y: posXs.y + 2, width: 2, depth: 1, height: 0, mass: 0 }, this.platformMaterial)
          ]

        this.third.add.existing(this.boxXs)

        this.third.physics.add.existing(this.boxXs, { shape: 'box', depth: 120 })
        this.boxXs.body.setCollisionFlags(6)
        this.boxXs.body.setLinearFactor(0, 0, 0)
        this.boxXs.body.setAngularFactor(0, 0, 0)
        this.boxXs.body.setFriction(0)
        this.boxXs.visible = false

        // connect this.sensor to boxXs
        this.third.physics.add.constraints.lock(this.boxXs.body, this.sensor.body)

        this.sensor.body.on.collision((otherObject, event) => {
          if (/platform/.test(otherObject.name)) {
            if (event !== 'end')
              this.boxXs.userData.onGround = true
            else this.boxXs.userData.onGround = false
          }
        })

        this.boxArray.push(this.boxXs);

      })

      this.third.load.gltf(this.panda).then(gltf => {

        this.boxShape = new ExtendedObject3D()
        this.boxShape.add(gltf.scene)
        // console.log(gltf)
        this.boxShape.name = `this.boxShape-${ib}`
        this.boxShape.scale.set(this.scalenya, this.scalenya, this.scalenya)

        this.boxShape.traverse(child => {

          if (child.isMesh) {
            child.castShadow = child.receiveShadow = true;

          }
        })

        // animations
        this.third.animationMixers.add(this.boxShape.animation.mixer)
        gltf.animations.forEach(animation => {
          this.boxShape.animation.add(animation.name, animation)
        })
        this.boxShape.animation.play('Rotation')

        this.boxShape.position.setX(posXs.x + 1)
        this.boxShape.position.setY(posXs.y + 2)
        // console.log(posXs.x + 1, posXs.y + 2)
        let platforms =
          [
            this.third.physics.add.box({ name: 'platform-ground', x: posXs.x + 1, y: posXs.y + 2, width: 2, depth: 1, height: 0, mass: 0 }, this.platformMaterial)
          ]


        this.third.add.existing(this.boxShape)

        this.third.physics.add.existing(this.boxShape, { shape: 'box', depth: 120 })
        this.boxShape.body.setCollisionFlags(6)
        this.boxShape.body.setLinearFactor(0, 0, 0)
        this.boxShape.body.setAngularFactor(0, 0, 0)
        this.boxShape.body.setFriction(0)


        // connect this.sensor to boxShape
        this.third.physics.add.constraints.lock(this.boxShape.body, this.sensor.body)

        this.sensor.body.on.collision((otherObject, event) => {
          if (/platform/.test(otherObject.name)) {
            if (event !== 'end')
              this.boxShape.userData.onGround = true
            else this.boxShape.userData.onGround = false
          }
        })

        this.boxImgs.push(this.boxShape);
        if (ib < 6) {
          this.dataLevel2.push(this.boxShape)
        }
      })

    })

    this.input.on('pointerdown', (event, gameObjects) => {
      console.log(gameObjects[0])
      if (gameObjects[0] != undefined) {

          if (gameObjects[0].name == 'iconSound') {

              this.layoutAll.onSoundOff()

          }

      } else  {
        this.onClick(event);
      }

    });

    this.music = this.layoutLvls.musicLvl

    this.layoutAll.playOnOff()

    this.layoutAll.renderAll()

  }

  update() {

    if (this.pictPosition != undefined && this.pictPosition != '') {

      this.dataArr.length = 0
      this.boxImgs.forEach((boxInPic) => {

        if (boxInPic.position.x == this.pictPosition.x && boxInPic.position.y == this.pictPosition.y) {

          this.boxArray.forEach((boxInArr) => {

              if (boxInArr.position.x == boxInPic.position.x && boxInArr.position.y == boxInPic.position.y) {

                  this.dataArr.push(boxInArr)
              }
          })

          boxInPic.remove()
          this.third.scene.remove(boxInPic)
           this.tweens.add({
              targets:  Phaser.Utils.Array.GetRandom(this.dataArr),
              duration: 2500,
              ease: 'Sine.easeInOut',
              visible: true,
              x: boxInPic.position.x,
              y: boxInPic.position.y,
              onUpdate: (tween) => {

                tween.data[0].target.x = boxInPic.position.x
                tween.data[0].target.y = boxInPic.position.y
                tween.data[0].target.visible = false
                tween.data[0].target = Phaser.Utils.Array.GetRandom(this.dataArr)
                tween.data[0].target.visible = true
              },
              onUpdateScope: this,
              onComplete: (tween) => {
                  // console.log('complete');
                  // this.isWin()
                  if (tween.data[0].target.name != 'this.boxQ') this.boxId.push(tween.data[0].target)

                  if (tween.data[0].target.name == 'this.boxQ') {
                      this.boxImgs.forEach((boxInPic) => {
                          boxInPic.visible = false
                      })
                      this.input.on('pointerdown', event => {
                        this.boxImgs.forEach((boxInPic) => {
                            boxInPic.visible = true
                        })
                        this.onClick(event);
                      });
                  } else if (tween.data[0].target.name  == 'this.boxStars') {

                        console.log('boxStar')
                        console.log('Wins!!!')
                        this.inGame = 'Win'
                        this.boxImgs.forEach((boxInPic) => {
                            boxInPic.visible = false
                        })

                  } else if (this.boxId.length > 1) {
                        // console.log(this.boxId)

                        if (this.boxId[0].name == 'this.boxOs') {

                            if (this.boxId[0].name == this.boxId[1].name) {
                                if (this.boxId[2] != undefined) {
                                  if (this.boxId[1].name == this.boxId[2].name) {
                                    console.log('Wins!!!')
                                    this.inGame = 'Win'
                                  }
                                }


                            } else if (this.boxId.length == 3){
                                this.inGame = 'GameOver'

                            }

                        } else if (this.boxId.length == 3){
                            this.inGame = 'GameOver'

                        }


                  }
                  tween.data.length = 0

              },
          });


        }
      });

      this.pictPosition = '';
    }



    this.layoutAll.iconSoundOffOnTopBar(50, 25)
    this.layoutAll.updateTimer();

      if (this.inGame != undefined && this.timeLabel.text != '02:00') {
         if (this.inGame != 'GameOver') {
              this.inGame = undefined
              this.isWin()

          } else if (this.inGame == 'GameOver' || this.timeLabel.text == '00:00') {

            this.inGame = undefined
            this.isLose()

          }

    }  else if (this.timeLabel.text == '00:00') {

      this.inGame = undefined
      this.isLose()

    }

  }

  isLose() {
    // console.log(this.constructor.name)
    this.layoutAll.changeScene(this, LoserPage.name, this.constructor.name, this.constructor.name, null)
  }

  isWin() {

  this.layoutAll.changeScene(this, WinPage.name, 'Lvl1Page', this.dataLevel2, null)

  }


  onClick(e) {

      let pickPosition = { x: 0, y: 0 };
      let pickPosition1 = { x: 0, y: 0 };
      this.pictPosition = { x: 0, y: 0 };
      var raycaster = new THREE.Raycaster();
      pickPosition.x = (e.position.x / (window.screen.width * window.devicePixelRatio)) * 2 - 1;
      pickPosition.y = (e.position.y / (window.screen.height * window.devicePixelRatio)) * -2 + 1;  // note we flip Y
      pickPosition1.x = pickPosition.x;
      pickPosition1.y = pickPosition.y;
      raycaster.setFromCamera(pickPosition1, this.third.camera);
      const intersectedObjects = raycaster.intersectObjects(this.third.scene.children);

      if (intersectedObjects.length) {

        this.pickedObject = intersectedObjects[0].object;

        this.pictPosition.x = this.pickedObject.position.x
        this.pictPosition.y = this.pickedObject.position.y


        // console.log('bobo: ', this.pictPosition.x, this.pictPosition.y, this.pickedObject);
      }
    }

}
