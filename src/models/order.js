import Backbone from 'backbone';

const Order = Backbone.Model.extend({
  defaults: {
    symbol: 'UNDEF',
    targetPrice: 0.00
  },
  validate(attributes) {
    const errors = {};

    if (attributes.buy && attributes.targetPrice > attributes.quote.get('price')) {
      errors['targetPrice'] = ["Price is blank OR is greater than or equal to the current market price"];
    } else if (!attributes.buy && attributes.targetPrice < attributes.quote.get('price')) {
      errors['targetPrice'] = ["Price is blank OR less than to the current market price"];
    } else if (isNaN(attributes.targetPrice)) {
      errors['targetPrice'] = ["Price must be a number."];
    }

    if ( Object.keys(errors).length > 0 ) {
      return errors;
    } else {
      return false;
    }
  },
  addBuyOrder() {
    this.set('buy', true);
  },
  addSellOrder() {
    this.set('buy', false);
  },
});

export default Order;
