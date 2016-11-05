import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, Platform } from 'ionic-angular';

import { Fullscreenimage } from '../modals/fullscreenimage/fullscreenimage';

import { SocialSharing } from 'ionic-native';

@Component({
  selector: 'page-event-details',
  templateUrl: 'event-details.html'
})
export class EventDetails {

  public selectedEvent;
  public platform;

  constructor(public navCtrl: NavController, public navParam: NavParams, public modalCtrl: ModalController, platform: Platform) {
    this.platform = platform;
  }

  ionViewDidLoad() {
    this.selectedEvent = this.navParam.get('data');
    console.log(this.selectedEvent);
  }


  viewEvent(image) {
    let modal = this.modalCtrl.create(Fullscreenimage, { 'urlImage': image });
    modal.present();
  }

  openMapsApp(location) {
    console.log(location.location_latitude);

    let destination = location.location_latitude + "," + location.location_longitude;
    if (this.platform.is('ios')) {
      window.open("http://maps.apple.com/?q=" + destination, '_system');
      return;
    }
    if (this.platform.is('android')) {

      window.open('geo:0,0?q=' + destination + '(' + location.location_name + ')', '_system');
      return;
    }
    if (this.platform.is('windows')) {
      window.open("geo:" + destination);
      return;
    }
    window.open("http://maps.google.com/?q=" + destination, '_system');
    return;
  }

  shareEvent(event) {
    // Check if sharing via email is supported

    let options = {
      'message': 'Check out this new event:' + event.event_name + ', Download the app at https://goo.gl/H6JusS',
      'subject': 'NC Events',
      'file': ['', ''],
      'url': 'https://goo.gl/H6JusS'
    }
    SocialSharing.share(options.message, options.subject, options.url).then(() => {
      // Sharing via email is possible
    }).catch(() => {
      //TODO: Add error handling to this
      // Sharing via email is not possible
    });
  }

}
