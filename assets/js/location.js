function initMap() {
    var uluru = {lat: 41.831, lng: -87.627};
    var uluru2 = {lat: 41.828, lng: -87.627};
    var map = new google.maps.Map(
        document.getElementById('map'), {zoom: 15, center: uluru});
    var marker = new google.maps.Marker({position: uluru2, map: map, icon: 'assets/media/hawksm.png'});
    var transitLayer = new google.maps.TransitLayer();
    transitLayer.setMap(map);    
  }