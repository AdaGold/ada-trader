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
    console.log("************");
    console.log(this.model);

    this.model.each((order) => {
      const orderView = new OrderView({
        model: order,
        template: this.template,
        tagName: 'li',
        className: 'order',
      });
      this.listenTo(orderView, 'showOrder', this.addOrder);

      this.$('#orders').prepend(orderView.render().$el);
    });
    return this;
  },
  events: {
    'click button.btn-buy': 'addOrder',
    'click button.btn-sell': 'sellOrder',
  },

  addOrder: function(event) {
    event.preventDefault();

    const orderData ={
      buy: true,
      // symbol: this.$('select[name=symbol]').val(),
      // num: parseFloat(this.$('input[name=price-target]').val()),
    };

    const sym = this.$('select[name=symbol]').val();
    if (sym != '') {
      orderData['symbol'] = sym;
    }

    const num = this.$('input[name=price-target]').val();
    // console.log(num);
    if (num != '') {
      orderData['targetPrice'] = parseFloat(num);
    }

    orderData['quote'] = this.quoteList.find({symbol: orderData['symbol']})

    const newOrder = new Order(orderData);

    if (newOrder.isValid()) {
      this.model.add(newOrder);
    } else {
      this.updateStatusMessageFrom(newOrder.validationError);
    }
  },

  sellOrder: function(event) {
    event.preventDefault();

    const orderData ={
      buy: false,
      // symbol = this.$('select[name=symbol]').val(),
      // num: parseFloat(this.$('input[name=price-target]').val()),
    };
    // orderData['buy'] = false;

    const sym = this.$('select[name=symbol]').val();
    if (sym != '') {
      orderData['symbol'] = sym;
    }

    const num = this.$('input[name=price-target]').val();
    // console.log(num);
    if (num != '') {
      orderData['targetPrice'] = parseFloat(num);
    }

    orderData['quote'] = this.quoteList.find({symbol: orderData['symbol']});

    const newOrder = new Order(orderData);

    if (newOrder.isValid()) {
      this.model.add(newOrder);
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
