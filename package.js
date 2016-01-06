Package.describe({
  name: 'gwendall:mongo-algolia-sync',
  summary: 'Automatically sync a Mongo collection to an Algolia index',
  git: 'https://github.com/gwendall/meteor-mongo-algolia-sync.git',
  version: '0.1.2'
});

Package.onUse(function(api, where) {

  api.use([
    'mongo@1.1.2',
    'underscore@1.0.4',
    'lai:collection-extensions@0.2.1_1',
    'matb33:collection-hooks@0.7.13',
  ], 'server');

  api.imply([
    'acemtp:algolia@3.9.1'
  ], 'server');

  api.addFiles([
    'lib.js'
  ], 'server');

});
