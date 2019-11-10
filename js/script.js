var myMap;
var marker;
function init(){
	var el = document.getElementById('canvas');
	var curLoc = new google.maps.LatLng(37.8269775,-122.4251442);
	var mapOptions = {
		center: curLoc,
		zoom: 18,
		mapTypeId: google.maps.MapTypeId.SATELLITE,
		mapTypeControlOptions: {
			position: google.maps.ControlPosition.BOTTOM_CENTER
		}
	};

	myMap = new google.maps.Map(el, mapOptions);

	marker = new google.maps.Marker({
		position: curLoc,
		map: myMap,
		icon: 'lighthouse.png',
    visible: true
	});
  marker.setMap(myMap);

	var contentString = '<h1>Alcatraz Island</h1><p> Alcatraz Island used to hold functions for a military fort, military prison, and federal prison until it was designated as a National Historial Landmark in 1986. Today, the island is open to tours. </p>';

	var infowindow = new google.maps.InfoWindow({
      content: contentString
  	});

	google.maps.event.addListener(marker, 'mouseover', function() {
    	infowindow.open(myMap, marker);
  	});


}

google.maps.event.addDomListener(window, 'load', init);
