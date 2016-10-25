import { Component, } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-event-details',
  templateUrl: 'event-details.html'
})
export class EventDetails {

  public event: any = [];

  constructor(public navCtrl: NavController, private navParam: NavParams) { }

  ionViewDidLoad() {
    this.event = this.navParam.get('data');
    console.log(this.event);
  }

}
