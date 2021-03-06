/**
 * Created by LABORATORIA 0017le on 6/06/2017.
 */
'use strict';

const listadoServicios=(station,update)=> {

    const divServicio= $('<div class="col s12 servicio">');
    const divStation=$('<div class="col s10">');
    const nombreServicio = $('<h5><strong>' + station.name + '</strong></h5>');
    const direccionServicio = $('<h6>' + station.address + '</h6>');
    const distritoServicio = $('<h6>' + station.district + '</h6>');
    const divIcono=$('<div class="col s2">');
    const iconMap = $('<i class = "fa fa-map right"></i>');


    divStation.append(nombreServicio);
    divStation.append(direccionServicio);
    divStation.append(distritoServicio);
    divIcono.append(iconMap);
    divServicio.append(divStation);
    divServicio.append(divIcono);

    iconMap.on('click',(e) => {
        e.preventDefault();
        console.log(station);
        state.selectedStation=station;
        update();

        $(".icono").removeClass("hide");
        $(".titulo").removeClass("col s12");
        $(".titulo").addClass("col s11");

    });

    return divServicio;
}

const serviciosContenedor= (update)=>{

    const contenedor=$('<div class="row contenedor"></div>');
    const divInput = $('<div class="col s12 buscar"></div>');
    const input = $('<input class="align-center" type="text" placeholder="Ingresa tu distrito a buscar">');
    const iconSearch = $('<i class="fa fa-search lupa"></i>');
    const stationList=$('<div class="stationsList"></div>');

    divInput.append(iconSearch);
    divInput.append(input);
    contenedor.append(divInput);
    contenedor.append(stationList);

    input.on('keyup',(e)=>{
        const filtrados= filterByDistrict(state.stations,input.val());
        reRender(stationList,filtrados,update);
    })

     return contenedor;
}


const reRender= (divServicio,district,update)=>{

    divServicio.empty();

    district.forEach((e)=>{
        divServicio.append(listadoServicios(e,update));
    });

}
