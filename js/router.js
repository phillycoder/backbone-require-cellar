// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/about',
  'views/header',
  'views/winelist',
  'views/winedetails',
  
  'collections/wines',
  'models/wine'

], function($, _, Backbone, aboutView, headerView, WineListView,WineView, WineCollection,Wine ){
  var AppRouter = Backbone.Router.extend({
    routes: {
        ""                  : "list",
        "wines/page/:page"	: "list",
        "wines/add"         : "addWine",
        "wines/:id"         : "wineDetails",        
        "about"             : "about"
    },
	list: function(page) {
        var p = page ? parseInt(page, 10) : 1;
        var wineList = new WineCollection;
        wineList.fetch({success: function(){
            $("#content").html(new WineListView({model: wineList, page: p}).el);
        }});
        
        headerView.selectMenuItem('home-menu');
    },
    
    wineDetails: function (id) {
        var wine = new Wine({id: id});
        wine.fetch({success: function(){
            $("#content").html(new WineView({model: wine}).el);
        }});
        headerView.selectMenuItem();
    },

	addWine: function() {
        var wine = new Wine();
        $('#content').html(new WineView({model: wine}).el);
        headerView.selectMenuItem('add-menu');
	},    
    
    initialize: function () {
        $('.header').html(headerView.el);
    },

    about: function () {

        $('#content').html(aboutView.el);
        headerView.selectMenuItem('about-menu');        
    }
  });

  var initialize = function(){
    var app_router = new AppRouter;
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});
