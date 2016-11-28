import $ from 'jquery';
import ApplicationView from 'app/views/application_view';

$(document).ready(function() {
  var appView = new ApplicationView({
    el: '#application'
  });

  appView.render();
});
