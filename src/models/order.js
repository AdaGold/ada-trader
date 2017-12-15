import Backbone from 'backbone';

const Order = Backbone.Model.extend({
  defaults: {
    symbol: 'UNDEF',
    targetPrice: 0.00
  },
  addBuyOrder() {

    this.set('buy', true);
  },
  addSellOrder() {

    this.set('buy', false);
  },
});

export default Order;
