import Backbone from 'backbone';
import _ from 'underscore';
import OrderView from '../views/order_view';
import Order from '../models/order';

const OrderListView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    // this.orderTemplate = params.orderTemplate;
    this.listenTo(this.model,"update", this.render);
  },

  render(){
    this.$('#orders').empty();
    console.log("************");
    console.log(this.model);
    this.model.each((order) => {
      const orderView = new OrderView({
        model: order,
        template: this.template,
        // template: this.template,
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
  },
  // addBuyOrder: function() {
  //   console.log('ITS WORKING');
  //   this.model.addBuyOrder();
  //   this.trigger('showOrder', this);
  // },

  addOrder: function(event) {
    event.preventDefault();

    const orderData ={};
      orderData['buy'] = true;
    //
    // ['symbol', 'target-Price'].forEach( (field) => {
    //   const val = this.$(`select[name=${field}]`).val();
    //   if (val != '') {
    //     orderData[field] = val;
    //   }
    // });

    const sym = this.$('select[name=symbol]').val();
    if (sym != '') {
      orderData['symbol'] = sym;
    }

    const num = this.$('input[name=price-target]').val();
    console.log(num);
    if (num != '') {
      orderData['targetPrice'] = parseFloat(num);
    }


    const newOrder = new Order(orderData);
    console.log("NEW ORDER");
    console.log(newOrder);
    this.model.add(newOrder);

    // if (newTask.isValid()) {
    //   this.model.add(newTask);
    //   this.updateStatusMessageWith(`New task added: ${newTask.get('task_name')}`);
    // } else {
    //   this.updateStatusMessageFrom(newTask.validationError);
    // }
  },

});

export default OrderListView;
