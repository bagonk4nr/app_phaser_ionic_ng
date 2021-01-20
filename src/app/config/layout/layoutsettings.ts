
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class LayoutSettings {

  private posScreen: any[] = [];
  private posX: any;
  private posY: any;
  private rowCol: any;
  private colRow: any[] = [];
  private scene: any;

  constructor(parent) {
    this.scene = parent;
  }

  get loadImgBg() {
    return this.scene.third.load.preload('background', 'assets/img/bg/bgsettings.png');
  }

  get loadBackBtn() {
    return this.scene.load.image('backbutton', 'assets/img/bg/back.png');
  }

  get buttonBack(): any {
    return this.scene.add.sprite((window.screen.width * window.devicePixelRatio) - 50, (window.screen.height * window.devicePixelRatio ) - 75, 'backbutton').setInteractive({ useHandCursor: true  });
  }

  get screen(): any{
    return this.posScreen;
  }

  set centerOfScreen(data) {

    this.rowCol = this.numrow(data);
    // console.log(this.rowCol);
    this.posX = 0;
    this.posY = window.innerHeight / 18;

    for (let b = 0; b < data; b++) {

      for (let i = 0; i < this.rowCol.row; i++) {

        if (Number.isInteger(b / this.rowCol.col) === true) {

          this.posY += 110;
          this.posX = window.innerWidth / 7;
        }


        for (let a = 0; a < this.rowCol.col; a++) {


          if (Number.isInteger(a / this.rowCol.col) === true) this.posX += 150;
          // console.log('x : ' + this.posX);
          this.posScreen[b] = '{"x":' + this.posX + ', "y":' + this.posY + '}';

        }

      }

    }
    // console.log(JSON.parse(JSON.stringify(this.posScreen)));


  }

  numrow(number: any) {
    let baris = 0;
    let a = 1;
    let column = 0;
    for (a = 1; a <= number; a++) {

      if (Math.floor(number / a) >= a) {

        baris = a;
        column = (number / a);

      } continue;

    }

    this.colRow['row'] = baris;
    this.colRow['col'] = column;

    return this.colRow;
  }

}
