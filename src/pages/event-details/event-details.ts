import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

import { Fullscreenimage } from '../modals/fullscreenimage/fullscreenimage';

@Component({
  selector: 'page-event-details',
  templateUrl: 'event-details.html'
})
export class EventDetails {

  public selectedEvent;

  constructor(public navCtrl: NavController, public navParam: NavParams, public modalCtrl: ModalController) { }

  ionViewDidLoad() {
    this.selectedEvent = this.navParam.get('data');
  }


  viewEvent(image) {
    let modal = this.modalCtrl.create(Fullscreenimage, { 'urlImage': image });
    modal.present();
  }

}
