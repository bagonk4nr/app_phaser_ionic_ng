import { Injectable } from '@angular/core';
import { Scene } from '../scene/scene';
import { Sounds } from '../../config/utils/sounds';
import { TopBar } from './topbar';
import { OnOffSound }  from '../../config/utils/onoffsound';
import { Time } from '../../config/utils/time';

@Injectable({ providedIn: 'root' })
export class LayoutAll {
  private scene: any;
  private scne: any;
  private theSounds: any;
  private topBar: any;
  private onOffSound: any;
  private times: any;

  constructor(parent) {
    this.scene = parent;
    this.scne = new Scene();
    this.theSounds = new Sounds(this.scene)
    this.topBar = new TopBar(this.scene)
    this.onOffSound = new OnOffSound(this.scene)
    this.times = new Time(this.scene)
  }

  createTimer() {
     this.times.createTimer()
  }

  updateTimer() {
      this.times.updateTimer()
  }

  playOnOff() {
    this.onOffSound.playOnOff()
  }

  iconSoundTopBar(x, y) {
      this.onOffSound.iconSoundTopBar(x, y)
  }

  iconSoundOffOnTopBar(x, y) {
      this.onOffSound.iconSoundOffOnTopBar(x, y)
  }

  iconSoundSetting(x, y) {
      this.onOffSound.iconSoundSetting(x, y)
  }

  iconSoundOffOn(x, y) {
      this.onOffSound.iconSoundOffOn(x, y)
  }

  onSoundOff() {
      this.onOffSound.onSoundOff()
  }

  get loadTopBar(): any {
    return this.topBar.loadTopBar
  }

  get topBars(): any {
      return this.topBar.topBars
  }

  initAll() {
      this.scene.accessThirdDimension()
      this.scene.third.cache.clear()
      this.scene.third.renderer.setPixelRatio(window.devicePixelRatio)

      this.scene.third.warpSpeed('light', 'camera', '-sky', 'orbitControls', '-ground')

      this.scene.third.camera.aspect = this.scene.third.renderer.domElement.clientWidth / this.scene.third.renderer.domElement.clientHeight;
      this.scene.third.camera.updateProjectionMatrix();

      let width = this.scene.third.renderer.domElement.clientWidth
      let height = this.scene.third.renderer.domElement.clientHeight

      if (width < height && width < 500) {
          this.scene.third.renderer.setSize(this.scene.third.renderer.domElement.clientWidth, this.scene.third.renderer.domElement.clientHeight)
          this.scene.third.camera.position.set(0, 0, 40)
      } else if (width > 500 && width < 800) {
          this.scene.third.renderer.setSize(this.scene.third.renderer.domElement.clientWidth, this.scene.third.renderer.domElement.clientHeight)
          this.scene.third.camera.position.set(0, 0, 30)
      } else {
          this.scene.third.renderer.setSize(this.scene.third.renderer.domElement.clientWidth, this.scene.third.renderer.domElement.clientHeight)
          this.scene.third.camera.position.set(0, 0, 25)
      }

  }

  renderAll() {
    this.scene.third.camera.lookAt(0, 0, 0)
    this.scene.third.renderer.render(this.scene.third.scene, this.scene.third.camera)
    this.scene.third.renderer.autoUpdate
  }

  clearObjectScene() {
    while (this.scene.third.scene.children.length > 0) {
        this.scene.third.scene.remove(this.scene.third.scene.children[0]);
    }
  }

  get textureBG(): any {
    return this.scene.third.load.texture('background').then(background => (this.scene.third.scene.background = background));
  }

  get platformMaterial(): any {
    const platformMaterial = { phong: { transparent: true, opacity: 0 } }
    return platformMaterial;
  }

  get scale(): any {
    const scalenya = 1;
    return scalenya;
  }

  get soundTextOn(): any {
    return this.theSounds.textOn
  }

  get soundTextOff(): any {
    return this.theSounds.textOff
  }

  get soundImageOn(): any  {
    return this.theSounds.imageOn

  }

  get soundImageOff(): any  {
    return this.theSounds.imageOff
  }

  get soundIconOnTopBar(): any {
      return this.theSounds.iconOnTopBar
  }

  get soundIconOffTopBar(): any {
      return this.theSounds.iconOffTopBar
  }

  soundIconOn(x, y) {
      return this.theSounds.iconOn(x, y)
  }

  soundIconOff(x, y) {
      return this.theSounds.iconOff(x, y)
  }

  set soundOnOff(data: any) {
    this.theSounds.On = data
  }

  get soundOnOffVal(): any {
    return this.theSounds.onVal
  }

  get configSound(): any {
    return this.theSounds.loadConfigAudio
  }

  changeScene(parent: any, scene: any, scene1: any, data: any, song: any, type: any) {
    this.scne.changeScene(parent, scene, scene1, data, song, type);
  }

  clearStorage() {
    // localStorage.clear();
    localStorage.removeItem('position');
    localStorage.removeItem('uuid');
  }

}
