function initMap() {
    var uluru = {lat: 41.831, lng: -87.626};
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 15, center: uluru});
    var marker1 = new google.maps.Marker({position: uluru, map: map, icon: 'assets/media/hawksm.png'});
    var transitLayer = new google.maps.TransitLayer();
    transitLayer.setMap(map);    
  }