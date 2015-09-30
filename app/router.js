import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('galleria', {path : '/'});
  this.resource('kids');
  this.resource('research', function() {
    this.resource('ill');
    this.resource('internet');
    this.resource('genealogy');
    this.resource('government');
    this.resource('newspapers');
  });
  this.resource('learn-online', function() {
    this.resource('lynda');
    this.resource('treehouse');
    this.resource('bootcamp');
  });
  this.resource('students', function() {
    this.resource('bookmobile');
    this.resource('ccconnection');
    this.resource('college');
  });
  this.resource('parents');
  this.resource('locations');
  this.resource('events');
  this.resource('facilities');
  this.resource('services');
  this.resource('borrowing', function() {
    this.resource('ill_b', {path : 'ill'});
    this.resource('circ');
    this.resource('check');
    this.resource('placing');
    this.resource('card', {path: '/borrowing/card'});
  });
});

export default Router;
