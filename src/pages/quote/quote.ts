import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {

  person: string;
  text: string;

  constructor(public navCtrl: NavController, private navParams: NavParams, private viewCtrl: ViewController) {

  }

  ionViewWillEnter() {
    this.person = this.navParams.get('person');
    this.text = this.navParams.get('text');
    

    console.log(this.person);
  }

  closeModal(remove = false) {
    this.viewCtrl.dismiss(remove);
  }
}
