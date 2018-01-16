$(() => {
  const $map = $('#map');
  let map     = null;
  let marker  = null;
  let lat = 51.5153;
  let lng = -0.0722;

  let coOrd = {lat: lat, lng: lng};
  const options = {
    zoom: 14,
    center: coOrd,
    styles: [{"featureType":"landscape","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"poi","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"road","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"stylers":[{"hue":"#00aaff"},{"saturation":-100},{"gamma":2.15},{"lightness":12}]},{"featureType":"road","elementType":"labels.text.fill","stylers":[{"visibility":"on"},{"lightness":24}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":57}]}]
  };




  if ($('.newDive').length !== 0 || $('.editDive').length !== 0 || $('.showDive').length !== 0 ) {

    // if($('.showDive').length !== 0) {
    //   lat = parseFloat($('#lat').text());
    //   lng = parseFloat($('#lng').text());
    //   coOrd = {lat: lat, lng: lng};
    //   options.center = coOrd;
    // }
    // if($('.editDive').length !== 0) {
    //   lat = parseFloat($('#lat').text());
    //   lng = parseFloat($('#lng').text());
    // }


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
      map.setZoom(8);
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
