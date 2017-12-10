import 'foundation-sites/dist/foundation.css';
import './css/app.css';

import $ from 'jquery';
import _ from 'underscore';
import Simulator from './models/simulator';

$(document).ready(function() {
  const simulator = new Simulator({
//  quotes: <quote collection instance>
  });

  simulator.start();
});
