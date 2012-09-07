define([
  'jquery',
  'underscore',
  'backbone',
  'text!templates/HeaderView.html'
  ], function($, _, Backbone, headerTemplate){

	var headerView = Backbone.View.extend({

	    initialize:function () {
	        this.render();
	    },

	    render:function () {
	        $(this.el).html(headerTemplate);
	        return this;
	    },

	    selectMenuItem: function (menuItem) {
	        $('.nav li').removeClass('active');
	        if (menuItem) {
	            $('.' + menuItem).addClass('active');
	        }
	    }

	});	
	
  return new headerView;
});

