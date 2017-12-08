import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';
import Quote from 'app/models/quote';

const QuoteView = Backbone.View.extend({
  initialize: function(params) {
    this.template = params.template;

    this.listenTo(this.model, "change", this.render);
  },
  render: function() {
    const compiledTemplate = this.template(this.model.toJSON());
    this.$el.html(compiledTemplate);
    return this;
  },
});

export default QuoteView;
