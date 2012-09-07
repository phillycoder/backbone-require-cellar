define([
	'underscore',
	'backbone',
  'models/wine'
], function(_, Backbone, WineModel){
  var wines = Backbone.Collection.extend({
	    model: WineModel,
	    url: "api/wines"
  });
  return wines;
});

