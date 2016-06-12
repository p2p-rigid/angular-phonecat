(function(){
	
	function albumProvider() {
		
		this.albums = [{name:'Photoes for Melbourn',title:'Melbourn trip',date:'2015-10-12', description:'A wonderful trip'},{name:'Photoes for Brisbane',title:'Brisbane trip',date:'2015-10-12', description:'A wonderful trip'},{name:'Photoes for Perth',title:'Melbourn trip',date:'2015-10-12', description:'A wonderful trip'},{name:'Photoes for Canberra',title:'Melbourn trip',date:'2015-10-12', description:'A wonderful trip'}];
		
		this.getAlbums = function() {
			return this.albums;
		}

		this.addAlbum = function() {

		}
	}

	albumApp.service("albumProvider", albumProvider);

})();