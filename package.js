Package.describe({
  name: 'gwendall:mongo-algolia-sync',
  summary: 'Automatically sync a Mongo collection to an Algolia index',
  git: 'https://github.com/gwendall/meteor-mongo-algolia-sync.git'
  version: '0.1.0'
});

Package.onUse(function(api, where) {

  api.use([
    'mongo',
    'underscore',
    'lai:collection-extensions',
    'matb33:collection-hooks',
  ], 'server');

  api.imply([
    'acemtp:algolia'
  ], 'server');

  api.addFiles([
    'lib.js'
  ], 'server');

});
