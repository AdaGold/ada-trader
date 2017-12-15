import Backbone from 'backbone';

const Order = Backbone.Model.extend({
  defaults: {
    symbol: 'UNDEF',
    targetPrice: 0.00
  },
  validate(attributes) {
    const errors = {};
    console.log('*****************');
    console.log(attributes.quote);

    if (attributes.buy && attributes.targetPrice >= attributes.quote.get('price')) {
      errors['targetPrice'] = ["WORKING?"];
    } else if (!attributes.buy && attributes.targetPrice <= attributes.quote.get('price')) {
      errors['targetPrice'] = ["WORKING?"];
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
