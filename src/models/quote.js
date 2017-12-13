import Backbone from 'backbone';


const Quote = Backbone.Model.extend({
  defaults: {
    symbol: 'UNDEF',
    price: 0.00
  },


  buy() {
    // Implement this function to decrease the price by $1.00
    console.log("*********");
    this.set('price', this.get('price') + 1.00);
    this.set('buy', true);
    // console.log("THIS IS THE PRICE");
    // console.log(this.get('price'));
    // console.log("THIS IS THE SYMBOL");
    // console.log(this.get('symbol'));

    // let buyPhrase = `<li>You bought ${this.get('price')} at ${this.get('symbol')}</li>`;
    // console.log(buyPhrase);

    // $('#trades').prepend(buyPhrase);
  },

  sell() {
    // Implement this function to decrease the price by $1.00
    console.log("*********");
    this.set('price', this.get('price') - 1.00);
    this.set('buy', false);

    // let sellPhrase = `<li>You sold ${this.get('symbol')} at ${this.get('price')}</li>`;
    // console.log(sellPhrase);

    // $('#trades').prepend(sellPhrase);
  },
});

export default Quote;
