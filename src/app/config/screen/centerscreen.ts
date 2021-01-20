
import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CenterScreen {

  public posScreen: any[] = [];
  private posX: any;
  private posY: any;
  private rowCol: any;
  public colRow: any[] = [];

  get screen(): any{
    return this.posScreen;
  }

  centerOfScreen(data: any, Y: any, X: any) {

    this.rowCol = this.numrow(data);
    // console.log(this.rowCol);
    this.posX = 0;
    this.posY = Y * this.rowCol.row;

    for (let b = 0; b < data; b++) {

      for (let i = 0; i < this.rowCol.row; i++) {

        if (Number.isInteger(b / this.rowCol.col) === true) {

          this.posY -= 1.75;
          this.posX = X * this.rowCol.row;
        }


        for (let a = 0; a < this.rowCol.col; a++) {


          if (Number.isInteger(a / this.rowCol.col) === true) this.posX -= X;
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

  getCanvasRelativePosition(ptrs) {
    // const rect = this.third.renderer.domElement.ownerDocument.activeElement.getBoundingClientRect();
    // // console.log(rect)
    // return {
    //   x: (ptrs.clientX - rect.left) * (window.innerWidth / rect.width),
    //   y: (ptrs.clientY - rect.top) * (window.innerHeight / rect.height),
    // };
  }

}
