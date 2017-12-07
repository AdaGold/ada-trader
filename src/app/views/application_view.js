import Backbone from 'backbone';
import _ from 'underscore';
import $ from 'jquery';

const ApplicationView = Backbone.View.extend({
  initialize: function() {
  },

  render: function() {
    this.$el.append($('<p>Hello World</p>'));

    return this;
  }
});

export default ApplicationView;
