import { Quote } from '../data/quote.interface';

export class QuotesService {
    private favoriteQuotes: Quote[] = [];

    addQuoteToFavorites(quote: Quote) {
        this.favoriteQuotes.push(quote);
        console.log(this.favoriteQuotes);
    }

    removeQuoteFromFavorites(quote: Quote) {
        // let position = this.favoriteQuotes.findIndex((quoteElement: Quote) => {
        //     return quoteElement.id == quote.id;
        // });

        
        // this.favoriteQuotes.splice(position, 1);

        let index = this.favoriteQuotes.indexOf(quote);

        if(index > -1){
          this.favoriteQuotes.splice(index, 1);
        }

        //console.log(this.favoriteQuotes);
    }

    getFavoriteQuotes() {
        return this.favoriteQuotes.slice(); 
    }

    isQuoteFavorite(quote: Quote) {
        return this.favoriteQuotes.find((quoteEl: Quote) => {
            return quoteEl.id == quote.id;
        });
    }
}