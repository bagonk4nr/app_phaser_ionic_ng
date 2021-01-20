import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class OnOffSound {
  private scene: any;

  constructor(parent) {
    this.scene = parent;

  }

  playOnOff() {
    if (this.scene.layoutAll.soundOnOffVal == 1) {
        this.scene.music.play(this.scene.layoutAll.configSound)
    } else if (this.scene.layoutAll.soundOnOffVal == 0) {
        // this.scene.music.pause()
    }
  }

  iconSoundTopBar(x, y) {
    if (this.scene.layoutAll.soundOnOffVal == 1 || this.scene.musicOn == 1) {

      this.scene.iconSoundOn = this.scene.layoutAll.soundIconOn(x, y)
      this.scene.iconSoundOn.visible = true;
      this.scene.iconSoundOff = this.scene.layoutAll.soundIconOff(x, y)
      this.scene.iconSoundOff.visible = false
      this.scene.iconSoundOn.scale = 0.025
      // this.scene.iconSound.clearTint()
      this.scene.iconSoundOn.name = 'iconSound'
      this.scene.iconSoundOff.name = 'iconSound'

    } else if (this.scene.musicOn == 0 || this.scene.layoutAll.soundOnOffVal == 0 ) {
      // this.scene.music.pause()
      this.scene.iconSoundOn = this.scene.layoutAll.soundIconOn(x, y)
      this.scene.iconSoundOn.visible = false;
      this.scene.iconSoundOff = this.scene.layoutAll.soundIconOff(x, y)
      this.scene.iconSoundOff.visible = true;
      // this.scene.iconSound.setTint(0xc0c0c0)
      this.scene.iconSoundOff.scale = 0.025
      this.scene.iconSoundOn.name = 'iconSound'
      this.scene.iconSoundOff.name = 'iconSound'
    }
  }

  iconSoundOffOnTopBar(x, y) {
    if (this.scene.musicOn != undefined) {

      if (this.scene.musicOn == 1) {

        this.scene.iconSoundOff = this.scene.layoutAll.soundIconOff(x, y)
        this.scene.iconSoundOff.visible = false
        this.scene.iconSoundOn = this.scene.layoutAll.soundIconOn(x, y)
        this.scene.iconSoundOn.visible = true
        // this.scene.iconSound.setTint(0xc0c0c0)
        this.scene.iconSoundOn.scale = 0.025
        this.scene.music.play(this.scene.layoutAll.configSound)
        this.scene.musicOn = undefined
        this.scene.iconSoundOn.name = 'iconSound'
        this.scene.iconSoundOff.name = 'iconSound'

      } else if (this.scene.musicOn == 0) {

        this.scene.iconSoundOn = this.scene.layoutAll.soundIconOn(x, y)
        this.scene.iconSoundOn.visible = false;
        this.scene.iconSoundOff = this.scene.layoutAll.soundIconOff(x, y)
        this.scene.iconSoundOff.visible = this.scene;
        // this.iconSound.clearTint()
        this.scene.iconSoundOff.scale = 0.025
        this.scene.music.pause()
        this.scene.musicOn = undefined
        this.scene.iconSoundOn.name = 'iconSound'
        this.scene.iconSoundOff.name = 'iconSound'
      }
    }
  }

  iconSoundSetting(x, y) {
    if (this.scene.layoutAll.soundOnOffVal == 1 || this.scene.musicOn == 1) {

      this.scene.iconSoundOn = this.scene.layoutAll.soundIconOn(x, y)
      this.scene.iconSoundOn.visible = true;
      this.scene.iconSoundOff = this.scene.layoutAll.soundIconOff(x, y)
      this.scene.iconSoundOff.visible = false
      this.scene.iconSoundOn.scale = 0.05
      // this.scene.iconSound.clearTint()
      this.scene.textOff = this.scene.layoutAll.soundTextOff;
      this.scene.textOn = this.scene.layoutAll.soundTextOn;
      this.scene.textOn.visible = true

    } else if (this.scene.musicOn == 0 || this.scene.layoutAll.soundOnOffVal == 0 ) {
      this.scene.music.pause()
      this.scene.iconSoundOn = this.scene.layoutAll.soundIconOn(x, y)
      this.scene.iconSoundOn.visible = false;
      this.scene.iconSoundOff = this.scene.layoutAll.soundIconOff(x, y)
      this.scene.iconSoundOff.visible = true;
      // this.scene.iconSound.setTint(0xc0c0c0)
      this.scene.iconSoundOff.scale = 0.05
      this.scene.textOn = this.scene.layoutAll.soundTextOn;
      this.scene.textOff = this.scene.layoutAll.soundTextOff;
      this.scene.textOff.visible = true
    }
  }

  iconSoundOffOn(x, y) {
    if (this.scene.musicOn != undefined) {

      if (this.scene.musicOn == 1) {

        this.scene.iconSoundOff = this.scene.layoutAll.soundIconOff(x, y)
        this.scene.iconSoundOff.visible = false
        this.scene.iconSoundOn = this.scene.layoutAll.soundIconOn(x, y)
        this.scene.iconSoundOn.visible = true
        // this.scene.iconSound.setTint(0xc0c0c0)
        this.scene.iconSoundOn.scale = 0.05
        this.scene.textOn.visible = true;
        this.scene.textOff.visible = false;
        this.scene.music.play(this.scene.layoutAll.configSound)
        this.scene.musicOn = undefined

      } else if (this.scene.musicOn == 0) {

        this.scene.iconSoundOn = this.scene.layoutAll.soundIconOn(x, y)
        this.scene.iconSoundOn.visible = false;
        this.scene.iconSoundOff = this.scene.layoutAll.soundIconOff(x, y)
        this.scene.iconSoundOff.visible = this.scene;
        // this.iconSound.clearTint()
        this.scene.iconSoundOff.scale = 0.05
        this.scene.textOff.visible = true
        this.scene.textOn.visible = false;
        this.scene.music.pause()
        this.scene.musicOn = undefined
      }
    }
  }

  onSoundOff() {
    if (this.scene.layoutAll.soundOnOffVal == 0 || this.scene.musicOn == 0) {
        this.scene.layoutAll.soundOnOff = 1
        this.scene.musicOn = 1

    } else if(this.scene.layoutAll.soundOnOffVal == 1 || this.scene.musicOn == 1) {
        this.scene.layoutAll.soundOnOff = 0
        this.scene.musicOn = 0

    }
  }

}
