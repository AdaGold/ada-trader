import Backbone from 'backbone';
import Order from 'models/order';

const OrderList = Backbone.Collection.extend({
  model: Order,
});

export default OrderList;
