
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class TopBar {

  private dataImage: any;
  private scene: any;

  constructor(parent) {
    this.scene = parent;
    this.dataImage = 'assets/img/bg/topbar.png';

  }

  get loadTopBar(): any {
    return this.scene.load.image('topbar', this.dataImage);
  }

  get topBars(): any {

    return this.scene.add.sprite(50, 21.5, 'topbar');
  }



}
