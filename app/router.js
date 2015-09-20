import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('kids');
  this.resource('borrowing', function() {
    this.resource('circ');
    this.resource('check');
    this.resource('placing');
  });
});

export default Router;
