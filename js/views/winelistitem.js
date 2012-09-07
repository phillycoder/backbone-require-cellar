define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/WineListItemView.html'
  ], function($, _, Backbone, wineListItemTemplate){

	var wineListItemView = Backbone.View.extend({
		   tagName: "li",

		    className: "span3",
	    initialize:function () {
	        this.render();
	    },

	    render:function () {
	        $(this.el).html(_.template(wineListItemTemplate,this.model.toJSON()));
	        return this;
	    }

	});	
	
  return wineListItemView;
});

