var markers = [];
var map = new L.Map("map", { 
  center: new L.LatLng(39.7392, -104.9842),
  zoom: 11
});

map.addLayer(new L.StamenTileLayer("toner"));

$.get('http://secret-gorge-2345.herokuapp.com/closures', function(data) {
  _.each(data.items, function(item) {
    var marker = L.marker([item.lat, item.lon]).addTo(map);
    marker.bindPopup("<strong>Location: </strong>" + item.location + "<br /><strong>Purpose: </strong>" + item.purpose + "<br /><strong>Time of Day: </strong>" + item.time);
  });
});
