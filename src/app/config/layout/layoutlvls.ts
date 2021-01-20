import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LayoutLvls {

  private scene: any;

  constructor(parent){
    this.scene = parent
  }

  get audio(): any {
    return this.scene.load.audio('lvl1', ['assets/music/lvl1.mp3'])

  }

  get imgBG() {
    return this.scene.third.load.preload('background', 'assets/img/bg/lvl1.png');
  }


  get musicLvl(): any {
    return this.scene.sound.add('lvl1');
  }

}
