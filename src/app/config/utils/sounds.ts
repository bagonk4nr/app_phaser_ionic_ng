
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Sounds {
  private onOff: any;
  private storage: any;
  private valSound: any[] = [];
  private iconOns: any;
  private iconOffs: any;
  private scene: any;

  constructor(Scene){
    this.iconOns = 'assets/img/bg/iconsound.png'
    this.iconOffs = 'assets/img/bg/iconsound1.png'
    this.scene = Scene

  }


  setDataSound(val: any) {
      localStorage.removeItem('soundval');
      localStorage.setItem('soundval', JSON.stringify(val));
  }

  dataSound() {
    this.storage = localStorage.getItem('soundval')
    // console.log(this.storage, 'storage')
    if (this.storage != undefined || this.storage != null) this.valSound = this.storage ? JSON.parse(this.storage) : {}
    else this.valSound[0] = 1;

    // return this.valSound
  }

  set On(data: any) {

    this.valSound[0] = data;
    this.setDataSound(this.valSound)
  }

  get onVal(): any {
    this.dataSound()
    // console.log(this.valSound[0], 'get1')
    this.onOff = this.valSound[0]
    // console.log(this.onOff, 'get')
    return this.onOff;

  }

  get imageOn(): any {
    return this.scene.load.image('soundon', this.iconOns);

  }

  get imageOff(): any {
    return this.scene.load.image('soundoff', this.iconOffs);

  }

  get iconOnTopBar(): any  {

    return this.scene.add.sprite(12, 12, 'soundon').setInteractive({ useHandCursor: true  }).setVisible(false);

  }

  get iconOffTopBar(): any  {

    return this.scene.add.sprite(12, 12, 'soundoff').setInteractive({ useHandCursor: true  }).setVisible(false);

  }

  iconOn(x, y){

    return this.scene.add.sprite(x, y, 'soundon').setInteractive({ useHandCursor: true  }).setVisible(false);

  }

  iconOff(x, y)  {

    return this.scene.add.sprite(x, y, 'soundoff').setInteractive({ useHandCursor: true  }).setVisible(false);

  }

  get textOn(): any  {
      return this.scene.add.text(210, 193, 'On', { fontSize: '32px', fill: '#ffffff' }).setVisible(false);

  }

  get textOff(): any {
      return this.scene.add.text(210, 193, 'Off', { fontSize: '32px', fill: '#ffff00' }).setVisible(false);
  }

  get loadConfigAudio(): any {
    let config = {
                    mute: false,
                    volume: 1,
                    rate: 1,
                    detune: 0,
                    seek: 0,
                    loop: true,
                    delay: 0
                }
    return config;
  }

}
