/**
 * Created by LABORATORIA 0017le on 7/06/2017.
 */
'use strict';
const gmap = ()=>{

    const divMap=$('<div id="map" class="row map"></div>');

    new GMaps({
        div: '#map',
        lat: -12.043333,
        lng: -77.028333
    });

    return divMap;
}

