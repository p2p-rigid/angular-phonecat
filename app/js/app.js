'use strict';

/* App Module */

var albumApp = angular.module("albumSharingApp", [ "ngRoute" ]);
		
albumApp.config(function($routeProvider){
	$routeProvider.when("/albums",{controller: "AlbumController", templateUrl: "partials/album_list_partial.html"})
			 	  .when("/", {redirectTo: "/albums"})
				  .when("/404_page", {controller: "Controller_404", templateUrl: "partials/404_page_partial.html"})
				  .otherwise({redirectTo: "404_page"});  		
});


