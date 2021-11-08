window.onload=main

function main(){



const map = new ol.Map({
  layers: [
    new ol.layer.Tile({
      source: new ol.source.OSM(),
    }),
  ],
  controls: ol.control.defaults().extend([new ol.control.FullScreen()])
  ,
  target: 'map',
  view: new ol.View({
    center: [0, 0],
    zoom: -1,
  }),
})

document.getElementById('zoom-out').onclick = function () {
  const view = map.getView();
  const zoom = view.getZoom();
  view.setZoom(zoom - 1);
};

document.getElementById('zoom-in').onclick = function () {
  const view = map.getView();
  const zoom = view.getZoom();
  view.setZoom(zoom + 1);
};




};
