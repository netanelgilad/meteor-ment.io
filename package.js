Package.describe({
  summary: " Mentions and Macros for Angular",
  version: "0.0.5",
  git: "https://github.com/netanelgilad/meteor-ment.io.git"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.1');

  api.use('urigo:angular@0.4.2', 'client');

  api.addFiles('mentio.js', 'client');
  api.addFiles('templates.js', 'client');

  api.addFiles('init.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('netanelgilad:ment.io');
  api.addFiles('netanelgilad:ment.io-tests.js');
});
