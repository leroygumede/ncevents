import { Component } from '@angular/core';

import { NavController, NavParams, LoadingController } from 'ionic-angular';

import { Wordpressapi } from '../../providers/wordpressapi/';

import { EventDetails } from '../event-details/event-details';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Wordpressapi]
})
export class HomePage {

  public events: any = [];
  loader: any;

  constructor(public navCtrl: NavController, private navParam: NavParams, private wordpress: Wordpressapi, public loadingCtrl: LoadingController) {
    this.loader = this.loadingCtrl.create({
      content: "Please wait...",
      duration: 90000
    });
  }


  ngAfterViewInit() {
    this.presentLoading();
    this.updateSchedule();

  }

  updateSchedule() {

    this.wordpress.load().then(data => {
      this.events = data;
      this.loader.dismiss();
      console.log(this.events);
    });
  }

  getDetailsPage(event) {
    this.navCtrl.push(EventDetails, { 'data': event });
  }


  presentLoading() {

    this.loader.present();
  }


}
