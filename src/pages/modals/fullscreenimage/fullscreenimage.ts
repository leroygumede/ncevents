import { Component, } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
    templateUrl: 'fullscreenimage.html'
})
export class Fullscreenimage {


    constructor(public navCtrl: NavController, private navParam: NavParams, public viewCtrl: ViewController) { }

    fullImage: string;

    ionViewDidLoad() {

        this.fullImage = this.navParam.get('urlImage');
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
}
