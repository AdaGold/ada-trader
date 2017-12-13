import Backbone from 'backbone';
import Quote from '../models/quote';


const QuoteView = Backbone.View.extend({

  initialize(params) {
    this.template = params.template;
    this.tradeTemplate = params.tradeTemplate;
    this.listenTo(this.model, "change", this.render);
  },

  render() {
    const compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);

    return this;
  },
  events: {
    'click button.btn-buy': function() {
      this.model.buy();
      // trigger custom event
      this.trigger('showTrade', this);
    },

    'click button.btn-sell': function() {
      this.model.sell();
      // trigger custom event
      this.trigger('showTrade', this);
    },
  },

});

export default QuoteView;
