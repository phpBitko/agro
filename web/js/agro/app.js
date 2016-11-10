$(function () {
    var projection = new ol.proj.Projection({
        code: 'EPSG:900913',
        units: 'm'
    });

    osmLayer = new ol.layer.Tile({
        source: new ol.source.OSM(),
        name: 'osm',
        visible: 1,
    });
   /* var wmsSource2 = new ol.source.TileWMS({
        url: 'http://192.168.33.160:8080/geoserver/cite/wms',
        params: {
            'LAYERS': 'cite:Export_Output_3',
            'ALIAS':'Векторна карта',
            'VERSION': '1.1.0',
            'TILED': 'true',
            'FORMAT': 'image/png8',
            'WIDTH': 768,
            'HEIGHT': 512,
            'CRS': 'EPSG:900913',
            serverType: 'geoserver',
            crossOrigin: '',
            projection: projection,
        }
    });

    var wmsLayer2 = new ol.layer.Tile({
        source: wmsSource2,
        visible: 1,
        name: 'wms2'
    });*/
 /*   var wmsSource3 = new ol.source.TileWMS({
        url: 'http://192.168.33.160:8080/geoserver/cite/wms',
        params: {
            'LAYERS': 'cite:a_street',
            'ALIAS':'Векторна карта',
            'VERSION': '1.1.0',
            'TILED': 'true',
            'FORMAT': 'image/png8',
            'WIDTH': 716,
            'HEIGHT': 768,
            'CRS': 'EPSG:900913',
            serverType: 'geoserver',
            crossOrigin: '',
            projection: projection,
        }
    });

    var wmsLayer3 = new ol.layer.Tile({
        source: wmsSource3,
        visible: 1,
        name: 'wms3'
    });*/



    var view = new ol.View({
        center:[3396647.44192, 6527057.33961],
        zoom: 12,
        minZoom: 2
    });

    map = new ol.Map({
        target: "mapView",
        layers: [
            osmLayer,
          /*  wmsLayer3,*/
        ],
        view: view,
        controls: [],
    });

});