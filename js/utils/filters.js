'use strict';

const createGrid= ()=>{

    const divServicio = $('<div class="row"></div>');
    const nombreServicio = $('<h2 class="col s12">'+state.stations.name+'</h2>');
    const direccionServicio = $('<h4 class="col s12">'+state.stations.address+'</h4>');
    const iconServicio = $('<i class = "fa fa-map"></i>');

    divServicio.append(nombreServicio);
    divServicio.append(direccionServicio);
    divServicio.append(iconServicio);


    return divServicio;
}

const filterByDistrict = (stations,query) => {
    const filterContainer = $('<div class="filterContainer"></div>');
    stations.forEach((query) => {
        filterContainer.append(createGrid(query));
});

    return filterContainer;
}
