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
  },

  sell() {
    // Implement this function to decrease the price by $1.00
    console.log("*********");
    this.set('price', this.get('price') - 1.00);
  },
});

export default Quote;
