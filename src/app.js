import $ from 'jquery';
import _ from 'underscore';
import ApplicationView from 'app/views/application_view';

const simulate = function(quote) {
  // Calculate a random price movement
  const maxChange = 1.00;
  const minChange = 0.00;
  let change = _.random(minChange * 10, maxChange * 10) / 10;

  // Decide if the change is positive or negative
  if(_.random(0,1) === 1) {
    change *= -1;
  }

  // Actually trigger the change
  quote.trigger('change:price', change);
};

$(document).ready(function() {
  const appView = new ApplicationView({
    el: '#application'
  });

  appView.render();

  setInterval(function() {
    // Call simulate() on each quote in the ApplicationView
  }, 1000);
});
