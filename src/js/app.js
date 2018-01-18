$(() => {
  const $map = $('#map');
  let map     = null;
  let marker  = null;
  let lat = 51.5153;
  let lng = -0.0722;

  let coOrd = {lat: lat, lng: lng};
  const options = {
    zoom: 6,
    center: coOrd,
    styles: [
      {
        "featureType": "administrative.country",
        "elementType": "geometry",
        "stylers": [
          {
            "visibility": "simplified"
          },
          {
            "hue": '#ff0000'
          }
        ]
      }
    ]
  };




  if ($('.newDive').length !== 0 || $('.editDive').length !== 0 || $('.showDive').length !== 0 ) {

    initMap();
  }

  function initMap() {
    map = new google.maps.Map($map.get(0), options);

    if (!$('.showDive').length) {
      google.maps.event.addListener(map, 'click', handleMapClick);
    }

    if ($('.editDive').length !== 0 || $('.showDive').length !== 0) {
      // if map is rendering on the edit page, place marker on map with current lat and lng values

      const markerLatLng = {
        lat: parseFloat($('input[name="latitude"]').val()),
        lng: parseFloat($('input[name="longitude"]').val())
      };

      marker = new google.maps.Marker({
        position: markerLatLng,
        map: map
      });

      map.setCenter(marker.getPosition());
      map.setZoom(4);
    }



    function handleMapClick(event) {
      const lat = event.latLng.lat();
      const lng = event.latLng.lng();

      $('input[name="latitude"]').val(lat);
      $('input[name="longitude"]').val(lng);

      if (marker) marker.setMap(null);

      if ($('#lat').val() && $('#lng').val()) {
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(lat, lng),
          map: map
        });

      } else {
        marker = new google.maps.Marker({
          position: new google.maps.LatLng(lat, lng),
          map: map
        });
      }
    }
  }


});
