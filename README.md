Meteor Mongo Algolia Sync
=========================

Automatically sync a Mongo collection to an Algolia index.

Installation  
------------

``` sh
meteor add gwendall:mongo-algolia-sync
```

Methods
-------

The Algolia indexes can be created with [acemtp:algolia](http://github.com/acemtp/meteor-algolia).  

**MongoCollection.syncAlgolia(AlgoliaIndex, options)**  

Keeps track of all documents inserted / updated / removed within a Mongo collection, and performs the equivalent operations to an Algolia index.

```javascript
// Server-only
AlgoliaClient = AlgoliaSearch(ALGOLIA_APP_ID, ALGOLIA_SECRET_KEY);
AlgoliaIndex = AlgoliaClient.initIndex('posts');
MongoCollection = new Mongo.Collection('posts');
MongoCollection.syncAlgolia(AlgoliaIndex, {
  debug: true,
  transform: function(doc) {
    delete doc.secret;
    return doc;
  }
});
```

Options:
- debug (boolean): Console logs operations or not (```false``` by default).
- transform (function): Allows to transform the document that will be saved to Algolia (return ```false``` not to insert).

**MongoCollection.initAlgolia(AlgoliaIndex, options)**  

Performs the initial sync of all the documents in the given Mongo collection to the given Algolia index.

```javascript
MongoCollection.initAlgolia(AlgoliaIndex, {
  clearIndex: true
});
```
Options (same as above + the following):
- clearIndex: Empty the Algolia index on start (```false``` by default)
