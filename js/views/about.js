define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/AboutView.html'
  ], function($, _, Backbone, aboutTemplate){

	var aboutView = Backbone.View.extend({

	    initialize:function () {
	        this.render();
	    },

	    render:function () {
	        $(this.el).html(aboutTemplate);
	        return this;
	    }

	});	
	
  return new aboutView;
});

