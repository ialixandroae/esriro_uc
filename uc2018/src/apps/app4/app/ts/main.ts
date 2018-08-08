import EsriMap = require("esri/Map");
import MapView = require("esri/views/MapView");

export class _MyMap {

    container: string;
    basemap: string;

    constructor(container: string, basemap: string = 'hybrid') {
        this.container = container;
        this.basemap = basemap
    };

    createMap() {
        const map = new EsriMap({
            basemap: this.basemap
        });

        const mapView = new MapView({
            map: map,
            container: this.container,
            center: [25, 46],
            zoom: 7
        });
        return mapView;
    };
};
