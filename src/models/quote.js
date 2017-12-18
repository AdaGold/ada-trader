import Backbone from 'backbone';


const Quote = Backbone.Model.extend({
  defaults: {
    symbol: 'UNDEF',
    price: 0.00
  },
  buy() {
    this.set('price', this.get('price') + 1.00);
    this.set('buy', true);
  },
  sell() {
    this.set('price', this.get('price') - 1.00);
    this.set('buy', false);
  },
});

export default Quote;
