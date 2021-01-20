import { Injectable } from '@angular/core';


@Injectable({ providedIn: 'root' })
export class Time {

  private scene: any;

  constructor(parent) {
    this.scene = parent;

  }

  createTimer() {
     this.scene.timeLabel = this.scene.add.text(((window.screen.width * window.devicePixelRatio) / 2), 7.5, "00:00", {font: "32px Arial", fill: "#fff",align: "center"});
  }

  updateTimer() {
        var currentTime = new Date();
        var timeDifference = this.scene.startTime.getTime() - currentTime.getTime();

        //Time elapsed in seconds
        this.scene.timeElapsed = Math.abs(timeDifference / 1000);

        //Time remaining in seconds
        var timeRemaining = this.scene.totalTime - this.scene.timeElapsed;

        //Convert seconds into minutes and seconds
        var minutes = Math.floor(timeRemaining / 60);
        var seconds = Math.floor(timeRemaining) - (60 * minutes);

        //Display minutes, add a 0 to the start if less than 10
        var result = (minutes < 10) ? "0" + minutes : minutes;

        //Display seconds, add a 0 to the start if less than 10
        result += (seconds < 10) ? ":0" + seconds : ":" + seconds;

        var b = '00:30';
        var b1 = b.split(':');
        var resB = (+b1[0]) * 60 * 60 + (+b1[1]) * 60;

        var c = '00:15';
        var c1 = c.split(':');
        var resC = (+c1[0]) * 60 * 60 + (+c1[1]) * 60;

        this.scene.timeLabel.text = result;
        var a = this.scene.timeLabel.text.split(':');
        var resA = (+a[0]) * 60 * 60 + (+a[1]) * 60;

        if ( resA <= resC) {
          this.scene.timeLabel.setColor("#ff0000", 0)
        } else if (resA <= resB && resC < resB) {
          this.scene.timeLabel.setColor("#ffff00", 0)
        }

  }

  getTopN(arr, prop, n) {
      // clone before sorting, to preserve the original array
      var clone = arr.slice(0);

      // sort descending
      clone.sort(function(x, y) {
          if (x[prop] == y[prop]) return 0;
          else if (parseInt(x[prop]) < parseInt(y[prop])) return 1;
          else return -1;
      });

      return clone.slice(0, n || 1);
  }
}
