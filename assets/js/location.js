function initMap() {
    var uluru1 = {lat: 41.831, lng: -87.626};
    var uluru2 = {lat: 41.707, lng: -87.904};
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 10, center: uluru2});
    var marker1 = new google.maps.Marker({position: uluru, map: map, icon: 'assets/media/1.png'});
    var transitLayer = new google.maps.TransitLayer();
    transitLayer.setMap(map);    
  }