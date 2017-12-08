import _ from 'underscore';
import Backbone from 'backbone';

const Quote = Backbone.Model.extend({
  defaults: {
    symbol: "DEEBUG",
    price: 0
  },
  initialize: function() {

  },
  increasePrice: function() {
    return this.price + 2;
  },
  decreasePrice: function() {
    return this.price - 2;
  }
});

export default Quote;
