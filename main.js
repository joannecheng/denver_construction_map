var Popup = function(item) {
  this.item = item;
};

Popup.prototype.contentHTML = function() {
  return("<strong>Location: </strong>" + this.item.location + "<br /><strong>Purpose: </strong>" + this.item.purpose + "<br /><strong>Time of Day: </strong>" + this.item.time);
};

var MapMaker = function(mapContainer, centerLat, centerLng) {
  this.map = new L.Map(mapContainer, {
    center: new L.LatLng(centerLat, centerLng),
    zoom: 11
  });
  this.map.addLayer(new L.StamenTileLayer("toner"));
};

function init() {
  var markers = [];
  var mapMaker = new MapMaker("map", 39.7392, -104.9842); 

  $.get('http://denver-streets.herokuapp.com/closures', function(data) {
      _.each(data.items, function(item) {
        var popup = new Popup(item);
        var marker = L.marker([item.lat, item.lon]).addTo(mapMaker.map);
        marker.bindPopup(popup.contentHTML());
      });
    });

  $('a.open').pageslide();
  $('#start_datetime').datepicker()
}

$(document).ready(function() {
  init();
});

