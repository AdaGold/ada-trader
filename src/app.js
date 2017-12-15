import 'foundation-sites/dist/foundation.css';
import 'css/app.css';

import $ from 'jquery';
import _ from 'underscore';

import Simulator from 'models/simulator';
import QuoteList from 'collections/quote_list';
import OrderList from 'collections/order_list';

import QuoteView from './views/quote_view.js';
import QuoteListView from './views/quote_list_view.js';

import OrderView from './views/order_view.js';
import OrderListView from './views/order_list_view.js';

import Order from 'models/order';


const quoteData = [
  {
    symbol: 'HUMOR',
    price: 88.50,
  },
  {
    symbol: 'CLOTH',
    price: 81.70,
  },
  {
    symbol: 'HABIT',
    price: 98.00,
  },
  {
    symbol: 'SUPER',
    price: 83.10,
  },
];


let quoteTemplate;
const quotes = new QuoteList(quoteData);
const orders = new OrderList();

// orders.add(new Order({symbol: "HUMOR", targetPrice: 100.00, buy: true}));



$(document).ready(function() {

  const simulator = new Simulator({
    quotes: quotes,
  });

  const quoteListView = new QuoteListView({
    model: quotes,
    template: _.template($('#quote-template').html()),
    tradeTemplate: _.template($('#trade-template').html()),
    el: 'main'
  });

  const orderListView = new OrderListView({
    model: orders,
    template: _.template($('#order-template').html()),
    quoteList: quotes,
    el: 'main',
  });


  quoteListView.render();

  // why is this an issue?
  orderListView.render();

  simulator.start();
});
