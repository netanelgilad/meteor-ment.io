/**
 * Created by netanel on 06/09/14.
 */
Meteor.startup(function() {
  if (typeof(angularMeteor) !== 'undefined') {
    angularMeteor.requires.push('mentio');
  }
});