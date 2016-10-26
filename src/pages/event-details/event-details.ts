import { Component, } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { Fullscreenimage } from '../modals/fullscreenimage/fullscreenimage';

@Component({
  selector: 'page-event-details',
  templateUrl: 'event-details.html'
})
export class EventDetails {

  public event: any = [];

  constructor(public navCtrl: NavController, private navParam: NavParams, public modalCtrl: ModalController) { }

  ionViewDidLoad() {
    this.event = this.navParam.get('data');
    console.log(this.event);
  }


  viewEvent(image) {
    let modal = this.modalCtrl.create(Fullscreenimage, { 'urlImage': image });
    modal.present();
  }

}
