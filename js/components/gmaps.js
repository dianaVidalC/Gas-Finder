/**
 * Created by LABORATORIA 0017le on 7/06/2017.
 */
'use strict';
const gmap = (update)=>{

    const divMap=$('<div id="map" class="row map"></div>');
    const lat   =state.selectedStation.lat;
    const long  =state.selectedStation.long;
    const ciudad=state.selectedStation.title;
    const divRuta=$('<div class="ruta"></div>');

    $(_=> {
        const map = new GMaps({
            div: '#map',
            lat: lat,
            lng: long
        });

        map.addMarker({
            lat: lat,
            lng: long,
            title: ciudad
        });

        GMaps.geolocate({
            success: function (position) {
                map.setCenter(position.coords.latitude, position.coords.longitude);

                map.addMarker({
                    lat: latitud,
                    lng: longitud,
                    infoWindow: {
                        content: '<div style="color:#212121;"><strong>Tu ubicacion:</strong><p>lima</p></div>'
                    }
                });
                map.drawRoute({
                    origin: [lat, long],
                    destination: [state.selectedStation.lat, state.selectedStation.lng],
                    travelMode: 'driving',
                    strokeColor: '#131540',
                    strokeOpacity: 0.6,
                    strokeWeight: 6
                });
                map.getRoutes({
                    origin: [lat, long],
                    destination: [state.selectedStation.lat, state.selectedStation.lng],
                    callback: function (response) {
                        let duration = response[0].legs[0].duration.text;
                        let distance = response[0].legs[0].distance.value / 1000;
                        divRuta.append(`<strong>Distancia: </strong> ${distance} Km. <br> <strong>Tiempo: </strong>${duration}`)
                    }
                });
            },
            error: function (error) {
                alert('Geolocalización fallada: ' + error.message);
            },
            not_supported: function () {
                alert("Tu navegador no soporta la API geolocation");
            }
        });
    })
    return divMap;
}

const ruta=()=>{
    
}