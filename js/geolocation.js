var service;

function getNearbySearches(){
	service = new google.maps.places.PlacesService(map);
	

	var request = {
		location: {lat: lat, lng: lng 150.644},
		radius: 1760,
		keyword "chicken",
		openNow: true,
		type: "restaurant"
	};

	var results = service.nearbySearch(request, callback);

	for (var i = 0; i < results.length; i++) {
		next = results[0];
		return next;
	};
}

function getTopSearch

function callback(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      createMarker(results[i]);
    }
  }
}

}