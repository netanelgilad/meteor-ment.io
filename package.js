Package.describe({
  summary: " Mentions and Macros for Angular",
  version: "0.0.7",
  git: "https://github.com/netanelgilad/meteor-ment.io.git",
  name: "netanelgilad:ment.io"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.1');

  api.use('urigo:angular@0.7.2', 'client');

  api.addFiles('mentio.min.js', 'client');

  api.addFiles('init.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('netanelgilad:ment.io', 'client');
  api.addFiles('netanelgilad:ment.io-tests.js', 'client');
});
