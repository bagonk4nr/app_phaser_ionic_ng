import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class Scene {


  changeScene(parent: any, scene: any, scene1: any, data: any, song: any, type: any) {

    if (scene == 'SettingsPage') {
        parent.scene.sleep()
        parent.scene.stop()


        parent.scene.start(scene, {scene1: scene1, data: data, music: song, type: type})

    } else if (type == 'loses' || type == 'wins') {
      // console.log(scene, 'changesceneloseswins')
      if(parent.music != undefined) {
        parent.music.pause();
        parent.music.stop();
      } else {

        parent.video.stop();
      }

        parent.scene.sleep()
        parent.scene.stop()
        let restartScene = parent.scene.get(scene)
        restartScene.scene.restart({scene1: scene1, data: data, music: song, type: type})


    } else {
      // console.log(scene, 'changescene')
      if(parent.music != undefined) {
        parent.music.pause();
        parent.music.stop();
      } else {

        parent.video.stop();
      }

        parent.scene.sleep()

        parent.scene.start(scene, {scene1: scene1, data: data, music: song, type: type})
    }

  }

}
