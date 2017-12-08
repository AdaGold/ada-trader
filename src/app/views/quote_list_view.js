import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import QuoteView from 'app/views/quote_view';
import Quote from 'app/models/quote'

const QuoteListView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;
    this.listenTo(this.model, 'update', this.render);
  },
  render: function() {
    this.$('#quotes').empty();
    this.model.each((quote) => {
      const quoteView = new QuoteView({
        model: quote,
        template: this.template,
        tagName: 'li',
        className: 'quote',
      });
      this.$('#quotes').append(quoteView.render().$el);
    });
    return this;
  },
});

export default QuoteListView;
