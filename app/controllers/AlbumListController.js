'use strict';

/* Controllers */
(function(){
	function AlbumController($scope){
		$scope.new_album = {};
		$scope.add_album_error="";
		$scope.albums = [{name:'Photoes for Melbourn',title:'Melbourn trip',date:'2015-10-12', description:'A wonderful trip'},{name:'Photoes for Brisbane',title:'Brisbane trip',date:'2015-10-12', description:'A wonderful trip'},{name:'Photoes for Perth',title:'Melbourn trip',date:'2015-10-12', description:'A wonderful trip'},{name:'Photoes for Canberra',title:'Melbourn trip',date:'2015-10-12', description:'A wonderful trip'}];
		$scope.add_album = function(new_album) {
			$scope.validate(new_album);
			if(_.isEmpty($scope.add_album_error)) {
				$scope.albums.push(new_album);
				$scope.new_album = {};
		    }
		}

        $scope.init = function() {
          $( "#datepicker" ).datepicker();
        }

		$scope.validate = function(album) {
			$scope.add_album_error="";
			if(_.isEmpty(album.title)) {
				$scope.add_album_error = "Missing album title";
			} else if (_.isEmpty(album.name)) {
				$scope.add_album_error = "Missing album name";
			} else if (_.isEmpty(album.description)) {
				$scope.add_album_error = "Missing album description";
			} else if (_.isEmpty(album.date)) {
				$scope.add_album_error = "Missing album date";
			}
		}

        $scope.init();
			
	}

	albumApp.controller("AlbumController", AlbumController);
	albumApp.controller("Controller_404", function($scope, $http){
		$scope.error_message = "oops, not working...";
	});
})();