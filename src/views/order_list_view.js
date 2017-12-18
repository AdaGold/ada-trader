import Backbone from 'backbone';
import _ from 'underscore';
import OrderView from '../views/order_view';
import Order from '../models/order';

const OrderListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.listenTo(this.model,"update", this.render);
    this.quoteList = params.quoteList
  },

  render(){
    this.$('#orders').empty();

    this.model.each((order) => {
      const orderView = new OrderView({
        model: order,
        template: this.template,
        tagName: 'li',
        className: 'order',
      });
      // this.listenTo(orderView, 'showOrder', this.addBuyOrder);

      this.$('#orders').prepend(orderView.render().$el);
    });
    return this;
  },
  events: {
    'click button.btn-buy': 'addBuyOrder',
    'click button.btn-sell': 'addSellOrder',
  },

  addBuyOrder: function(event) {
    event.preventDefault();

    const orderData ={
      buy: true,
      symbol: this.$('select[name=symbol]').val(),
      targetPrice: parseFloat(this.$('input[name=price-target]').val()),
    };

    orderData['quote'] = this.quoteList.find({symbol: orderData['symbol']})

    const newOrder = new Order(orderData);

    if (newOrder.isValid()) {
      this.model.add(newOrder);
      this.$('.form-errors').empty();
    } else {
      this.updateStatusMessageFrom(newOrder.validationError);
    }
  },

  addSellOrder: function(event) {
    event.preventDefault();

    const orderData ={
      buy: false,
      symbol: this.$('select[name=symbol]').val(),
      targetPrice: parseFloat(this.$('input[name=price-target]').val()),
    };

    orderData['quote'] = this.quoteList.find({symbol: orderData['symbol']});

    const newOrder = new Order(orderData);

    if (newOrder.isValid()) {
      this.model.add(newOrder);
      this.$('.form-errors').empty();
    } else {
      this.updateStatusMessageFrom(newOrder.validationError);
    }
  },

  updateStatusMessageFrom(messageHash) {
    const errorMessageElement = this.$('.form-errors');
    errorMessageElement.empty();
    _.each(messageHash, (messageType) => {
      messageType.forEach((error) => {
        errorMessageElement.append(`<p>${error}</p>`);
      })
    });
    errorMessageElement.show();
  },

});

export default OrderListView;
