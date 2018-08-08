require([
    "esri/Map",
    "esri/views/SceneView",
    "dojo/domReady!"
], function (Map, SceneView) {

    var map = new Map({
        basemap: "oceans",
        ground: "world-elevation"
    });

    var view = new SceneView({
        container: "viewDiv",
        map: map,
        scale: 50000000,
        center: [25, 46]
    });

});