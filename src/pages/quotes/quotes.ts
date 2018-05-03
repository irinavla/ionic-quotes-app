import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Quote } from "../../data/quote.interface";
import { AlertController } from 'ionic-angular';
import { QuotesService } from '../../services/quotes';

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage implements OnInit {

  quoteCollection: { category: string, quotes: Quote[], icon: string }[];

  constructor(
    public alertCtrl: AlertController, 
    public navParams: NavParams,
    public qService: QuotesService
  ) {
    
  }

  // ionViewDidLoad() {
  //   this.quoteCollection = this.navParams.data;
  // }

    ngOnInit() {
    this.quoteCollection = this.navParams.data;
  }

  addToFavorites(selectedQuote: Quote) {
    let alert = this.alertCtrl.create({
      title: 'Add Quote',
      message: 'Are you sure you want to add the quote to Favorites?',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          handler: data => {

          }
        },
        {
          text: 'OK',
          handler: data => {
            this.qService.addQuoteToFavorites(selectedQuote);
          }
        }
      ]
    });
    alert.present();
  }

  removeFromFavorites(quote: Quote) {
    this.qService.removeQuoteFromFavorites(quote);
  }

  isFavorite(quote: Quote) {
    return this.qService.isQuoteFavorite(quote);
  }
}
