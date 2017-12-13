import Backbone from 'backbone';
import _ from 'underscore';
import QuoteView from '../views/quote_view';
import Quote from '../models/quote';

const QuoteViewList = Backbone.View.extend({

  initialize(params) {
    this.template = params.template;
    this.tradeTemplate = params.tradeTemplate;
    this.listenTo(this.model, 'update', this.render);
  },

  render(){
    this.$('#quotes').empty();

    this.model.each((quote) => {
      const quoteView = new QuoteView({
        model: quote,
        template: this.template,
        tradeTemplate: this.tradeTemplate,
        tagName: 'li',
        className: 'quote',
      });
      this.listenTo(quoteView, 'showTrade', this.showTrade)
      this.$('#quotes').append(quoteView.render().$el);
    })
    return this;
  },
  showTrade(quoteView) {
    const compiledTradeTemplate = quoteView.tradeTemplate(quoteView.model.toJSON());
    this.$('#trades').prepend(compiledTradeTemplate);
  },
});

export default QuoteViewList;
