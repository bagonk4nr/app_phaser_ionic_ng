import { Injectable } from '@angular/core';
import { Sounds } from '../utils/sounds';

@Injectable({ providedIn: 'root' })
export class LayoutLoading {

  private scene: any;
  private sound: any;
  private runPanda: any;

  constructor(parent){
    this.scene = parent
    this.sound = new Sounds(parent);
    this.runPanda = window.location.origin + '/assets/img/lvl1/runpanda.glb';

  }

  textLoadings() {

    let textloading = this.scene.add.sprite(((window.screen.width * window.devicePixelRatio)/2) - 200, (window.screen.height * window.devicePixelRatio ) - 90, 'textloading');

  }

  get imageLoading(): any {
    return  this.scene.load.image('textloading', 'assets/img/bg/textloading.png');
  }

  get audioLoading(): any {
    return this.scene.load.audio('loading', ['assets/music/loading.mp3'])

  }

  get imgBG() {
    return this.scene.third.load.preload('background', 'assets/img/bg/loading.png');
  }

  get configSound(): any {
    return this.sound.loadConfigAudio
  }

  gltfFile(Y) {
    // console.log(this.runPanda)
    this.scene.third.load.gltf(this.runPanda).then( gltf => {


      this.scene.runPanda.add(gltf.scene)
      // console.log(gltf)
      this.scene.runPanda.name = `this.scene.runPanda`
      this.scene.runPanda.scale.set(this.scene.scalenya, this.scene.scalenya, this.scene.scalenya)
      this.scene.runPanda.traverse(child => {

        if (child.isMesh) {
          child.castShadow = child.receiveShadow = true;

        }
      })

      // animations
      this.scene.third.animationMixers.add(this.scene.runPanda.animation.mixer)
      gltf.animations.forEach(animation => {
        this.scene.runPanda.animation.add(animation.name, animation)

      })
      this.scene.runPanda.animation.play('Walk')


      this.scene.runPanda.position.setX(0)
      this.scene.runPanda.position.setY(Y)
      this.scene.runPanda.rotateX(0)
      this.scene.runPanda.rotateY(225.5)
      this.scene.runPanda.rotateZ(0)

      let platforms =
        [
          this.scene.third.physics.add.box({ name: 'platform-ground', x: 0, y: Y, width: 2, depth: 1, height: 0, mass: 0 }, this.scene.platformMaterial)
        ]

      this.scene.third.add.existing(this.scene.runPanda)

      this.scene.third.physics.add.existing(this.scene.runPanda, { shape: 'box', depth: 120 })
      this.scene.runPanda.body.setCollisionFlags(6)
      this.scene.runPanda.body.setLinearFactor(0, 0, 0)
      this.scene.runPanda.body.setAngularFactor(0, 0, 0)
      this.scene.runPanda.body.setFriction(0)

      // connect sensor to runPanda
      this.scene.third.physics.add.constraints.lock(this.scene.runPanda.body, this.scene.sensor.body)

      this.scene.sensor.body.on.collision((otherObject, event) => {
        if (/platform/.test(otherObject.name)) {
          if (event !== 'end')
            this.scene.runPanda.userData.onGround = true
          else this.scene.runPanda.userData.onGround = false
        }
      })

    })
  }

}
