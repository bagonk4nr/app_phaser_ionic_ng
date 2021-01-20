import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LayoutLvl1 {

  private scene: any;

  constructor(parent){
    this.scene = parent
  }

  get audio(): any {
    return this.scene.load.audio('lvl2', ['assets/music/lvl2.mp3'])

  }

  get imgBG() {
    return this.scene.third.load.preload('background', 'assets/img/bg/lvl2.png');
  }

  get musicLvl(): any {
    return this.scene.sound.add('lvl2');
  }

}
