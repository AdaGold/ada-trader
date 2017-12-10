import Backbone from 'backbone';
import Quote from 'models/quote';

const QuoteList = Backbone.Collection.extend({
  model: Quote,
});

export default QuoteList;
