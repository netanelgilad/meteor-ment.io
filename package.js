Package.describe({
  summary: " Mentions and Macros for Angular",
  version: "0.9.4",
  git: "https://github.com/netanelgilad/meteor-ment.io.git",
  name: "netanelgilad:ment.io"
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@0.9.1');

  api.use('angular:angular@1.2.18', 'client');

  api.addFiles('mentio.js', 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('netanelgilad:ment.io', 'client');
  api.addFiles('netanelgilad:ment.io-tests.js', 'client');
});
