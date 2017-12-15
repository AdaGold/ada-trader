import Backbone from 'backbone';
import Order from '../models/order';


const OrderView = Backbone.View.extend({
  initialize(params) {
    this.template = params.template;
    this.orderTemplate = params.orderTemplate;
    this.listenTo(this.model,"update", this.render);
  },

  render() {
    const compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);

    return this;
  },

  events: {
    // 'click button.btn-buy': 'addBuyOrder',
    'click button.btn-cancel': 'deleteOrder',
  },
  // CHECK THAT THIS WORKS
  deleteOrder: function(event) {
    this.model.destroy();
    this.remove();
  },
  // addBuyOrder: function() {
  //   console.log('ITS WORKING');
  //   this.model.addBuyOrder();
  //   this.trigger('showOrder', this);
  // },

});

export default OrderView;
