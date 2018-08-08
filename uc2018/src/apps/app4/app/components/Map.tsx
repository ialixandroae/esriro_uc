import * as React from "react";
import { _MyMap } from "../ts/main";

export default class Map extends React.Component<any, any>{
    render() {
        
        const myMap = new _MyMap(this.props.container);
        myMap.createMap();

        return null;
    }
};

