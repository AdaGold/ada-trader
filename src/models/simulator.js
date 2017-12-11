import Backbone from 'backbone';
import _ from 'underscore';

const Simulator = Backbone.Model.extend({
  initialize(params) {
    this.quotes = params.quotes;
  },

  start() {
    setInterval(() => this._tick(), 1000);
  },

  // PRIVATE FUNCTIONS \\

  _tick() {
    // Don't do anything if we have no quotes to simulate
    if (this.quotes === undefined) {
      return;
    }

    this.quotes.forEach((quote) => {
      // Calculate a random price movement
      const maxChange = 1.00;
      const minChange = 0.00;
      let change = _.random(minChange * 10, maxChange * 10) / 10;

      // Decide if the change is positive or negative
      if(_.random(0,1) === 1) {
        change *= -1;
      }

      // Actually trigger the change
      const oldPrice = quote.get('price');
      quote.set('price', oldPrice + change);
    });
  },
});

export default Simulator;
