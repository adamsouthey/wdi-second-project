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
    styles: [{"featureType":"all","elementType":"all","stylers":[{"visibility":"on"}]},{"featureType":"all","elementType":"labels","stylers":[{"visibility":"off"},{"saturation":"-100"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40},{"visibility":"off"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"off"},{"color":"#000000"},{"lightness":16}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},{"featureType":"landscape","elementType":"geometry.fill","stylers":[{"color":"#4d6059"}]},{"featureType":"landscape","elementType":"geometry.stroke","stylers":[{"color":"#4d6059"}]},{"featureType":"landscape.natural","elementType":"geometry.fill","stylers":[{"color":"#4d6059"}]},{"featureType":"poi","elementType":"geometry","stylers":[{"lightness":21}]},{"featureType":"poi","elementType":"geometry.fill","stylers":[{"color":"#4d6059"}]},{"featureType":"poi","elementType":"geometry.stroke","stylers":[{"color":"#4d6059"}]},{"featureType":"road","elementType":"geometry","stylers":[{"visibility":"on"},{"color":"#7f8d89"}]},{"featureType":"road","elementType":"geometry.fill","stylers":[{"color":"#7f8d89"}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#7f8d89"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#7f8d89"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},{"featureType":"road.arterial","elementType":"geometry.fill","stylers":[{"color":"#7f8d89"}]},{"featureType":"road.arterial","elementType":"geometry.stroke","stylers":[{"color":"#7f8d89"}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},{"featureType":"road.local","elementType":"geometry.fill","stylers":[{"color":"#7f8d89"}]},{"featureType":"road.local","elementType":"geometry.stroke","stylers":[{"color":"#7f8d89"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},{"featureType":"water","elementType":"all","stylers":[{"color":"#2b3638"},{"visibility":"on"}]},{"featureType":"water","elementType":"geometry","stylers":[{"color":"#2b3638"},{"lightness":17}]},{"featureType":"water","elementType":"geometry.fill","stylers":[{"color":"#24282b"}]},{"featureType":"water","elementType":"geometry.stroke","stylers":[{"color":"#24282b"}]},{"featureType":"water","elementType":"labels","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.text","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.text.fill","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.text.stroke","stylers":[{"visibility":"off"}]},{"featureType":"water","elementType":"labels.icon","stylers":[{"visibility":"off"}]}]
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
