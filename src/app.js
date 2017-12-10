import 'foundation-sites/dist/foundation.css';
import './css/app.css';

import $ from 'jquery';
import _ from 'underscore';
import ApplicationView from './views/application_view';
import Simulator from './models/simulator';

$(document).ready(function() {
  const appView = new ApplicationView({
    el: '#application'
  });

  appView.render();

  const simulator = new Simulator({
//  quotes: <quote collection instance>
  });

  simulator.start();
});
