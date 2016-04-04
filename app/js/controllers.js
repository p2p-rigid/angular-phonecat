'use strict';

/* Controllers */
(function(){
	function AlbumController($scope){
		$scope.new_album = {};
		$scope.albums = [{name:'Photoes for Melbourn',title:'Melbourn trip',date:'2015-10-12', description:'A wonderful trip'},{name:'Photoes for Brisbane',title:'Brisbane trip',date:'2015-10-12', description:'A wonderful trip'},{name:'Photoes for Perth',title:'Melbourn trip',date:'2015-10-12', description:'A wonderful trip'},{name:'Photoes for Canberra',title:'Melbourn trip',date:'2015-10-12', description:'A wonderful trip'}];
		$scope.add_album = function(new_album) {
			console.log(new_album);
			$scope.albums.push(new_album);
			$scope.new_album = {};
		}	
			
	}

	function Controller_404($scope){
		$scope.error_message = "oops, not working...";
	}

	albumApp.controller("AlbumController", AlbumController);
	albumApp.controller("Controller_404", Controller_404);
})();