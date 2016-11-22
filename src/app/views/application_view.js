import Backbone from 'backbone';

const ApplicationView = Backbone.View.extend({
  initialize: function() {
  },

  render: function() {
    this.$el.html('<p>Hello World</p>');

    return this;
  }
});

export default ApplicationView;
