import Backbone from 'backbone';
import Quote from 'app/models/quote';

const QuoteList = Backbone.Collection.extend({
  model: Quote,
});

export default QuoteList;
