/* functions: marker, polygon/shape, info window */

	var myMap;
	var marker;
	function init(){
		var el = document.getElementById('canvas');
		var curLoc = new google.maps.LatLng(37.8270,-122.4223);
		var mapOptions = {
			center: curLoc,
			zoom: 17,
			mapTypeId: google.maps.MapTypeId.SATELLITE,
			mapTypeControlOptions: {
				position: google.maps.ControlPosition.BOTTOM_CENTER
			}
		};

		myMap = new google.maps.Map(el, mapOptions);

		marker = new google.maps.Marker({
			position: curLoc,
			map: myMap,
			/*icon: 'lighthouse.png',*/
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

		var alcatrazCoord = [
			{lat: 37.826252, lng: -122.422487},
			{lat: 37.826600, lng: -122.423216},
			{lat: 37.826735, lng: -122.423131},
			{lat: 37.827032, lng: -122.423495},
			{lat: 37.827159, lng: -122.423431},
			{lat: 37.826396, lng: -122.422219}
		];

		var alcatraz = new google.maps.Polygon({
			paths: alcatrazCoord,
			strokeColor: '#FF0000',
			strokeOpacity: 0.8,
			strokeWeight: 2,
			fillColor: '#FF0000',
			fillOpacity: 0.35
		});
		alcatraz.setMap(myMap);

		var polyLoc = new google.maps.LatLng(37.826252, -122.422487);
		var polymarker = new google.maps.Marker({
			position: polyLoc ,
			map: myMap,
			/*icon: 'lighthouse.png',*/
			visible: true
		});
		polymarker.setMap(myMap);
		var polygonString = '<h1>Alcatraz Federal Penitentiary</h1><p> Alcatraz was a maximum security federal prison on Alcatraz Island </p>';
		var polygonInfo = new google.maps.InfoWindow({
				content: polygonString
			});

		google.maps.event.addListener(polymarker, 'mouseover', function() {
				polygonInfo.open(myMap, polymarker);
			});
	}

	google.maps.event.addDomListener(window, 'load', init);
