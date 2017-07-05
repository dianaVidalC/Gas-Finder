/**
 * Created by LABORATORIA 0017le on 7/06/2017.
 */
'use strict';
const gmap = (update)=>{

    const divMap=$('<div id="map" class="row map"></div>');
    const lat=state.selectedStation.lat;
    const long=state.selectedStation.long;

    $(_=>{
        const map= new GMaps({
            div: '#map',
            lat: lat,
            lng: long
        });

        map.addMarker({
            lat: lat,
            lng: long,
            title: 'Lima'
        });

        GMaps.geolocate({
            success: function(position) {
                map.setCenter(position.coords.latitude, position.coords.longitude);
            },
            error: function(error) {
                alert('Geolocation failed: '+error.message);
            },
            not_supported: function() {
                alert("Your browser does not support geolocation");
            },
            always: function() {
                alert("Done!");
            }
        });
    })


    return divMap;
}

