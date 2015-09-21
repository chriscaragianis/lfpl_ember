import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('kids');
  this.resource('research', function() {
    this.resource('ill', {path: '/research/ill'});
    this.resource('internet');
    this.resource('geneaology');
    this.resource('government');
    this.resource('newspapers');
  });
  this.resource('learn-online');
  this.resource('locations');
  this.resource('events');
  this.resource('facilities');
  this.resource('services');
  this.resource('borrowing', function() {
    this.resource('circ');
    this.resource('check');
    this.resource('placing');
    this.resource('card', {path: '/borrowing/card'});
  });
});

export default Router;
