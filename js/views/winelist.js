define([
  'jquery',
  'underscore',
  'backbone',
  'views/winelistitem',
  'views/paginator'  
  ], function($, _, Backbone, WineListItemView, Paginator){

	var wineListView = Backbone.View.extend({

	    initialize:function () {
	        this.render();
	    },

	    render: function () {
	        var wines = this.model.models;
	        console.log(wines);
	        var len = wines.length;
	        var startPos = (this.options.page - 1) * 8;
	        var endPos = Math.min(startPos + 8, len);

	        $(this.el).html('<ul class="thumbnails"></ul>');

	        for (var i = startPos; i < endPos; i++) {
	            $('.thumbnails', this.el).append(new WineListItemView({model: wines[i]}).render().el);
	        }

	        $(this.el).append(new Paginator({model: this.model, page: this.options.page}).render().el);

	        return this;
	    }

	});	
	
  return wineListView;
});
