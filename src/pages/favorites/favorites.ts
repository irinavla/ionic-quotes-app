import { Component } from '@angular/core';
import { IonicPage, MenuController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import { QuotesService } from '../../services/quotes';
import { ModalController } from 'ionic-angular';
import { QuotePage } from '../quote/quote';
import { SettingsService } from '../../services/settings';


@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes: Quote[];

  constructor(
    public qService: QuotesService,
    public settingsService: SettingsService, 
    public modalCtrl: ModalController,
    public menuCtrl: MenuController
  ) {
  }

  ionViewWillEnter() {
    this.quotes = this.qService.getFavoriteQuotes();
  }

  removeFromFavorites(quote: Quote) {
    this.qService.removeQuoteFromFavorites(quote);
    this.quotes = this.qService.getFavoriteQuotes();

    let index = this.quotes.indexOf(quote);

    if(index > -1){
      this.quotes.splice(index, 1);
    }
  }

  editQuote(quote: Quote) {
    let modal = this.modalCtrl.create(QuotePage, quote);
    modal.present();
    modal.onDidDismiss((remove: boolean) => {
      if(remove) {
        this.removeFromFavorites(quote);
      }
    });
  }

  openMenu() {
    this.menuCtrl.open();
  }

  getBackground() {
    return this.settingsService.isAltBackground() ? 'altQuoteBackground' : 'light';
  }

  isAltBackground() {
    return this.settingsService.isAltBackground();
  }
}
