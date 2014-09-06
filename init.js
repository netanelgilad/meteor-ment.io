/**
 * Created by netanel on 06/09/14.
 */
Meteor.startup(function() {
  if (typeof(ngMeteor) !== 'undefined') {
    ngMeteor.requires.push('ment.io');
  }
});