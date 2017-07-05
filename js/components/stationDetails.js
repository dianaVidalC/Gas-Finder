/**
 * Created by LABORATORIA 0017le on 7/06/2017.
 */
'use strict';

const serviceDetails = (update) => {

    const container  = $('<div class="container serviceDetail"></div>');
    const row        = $('<div class="row"></div>');
    const div        = $('<div class="pad-div"></div>')
    const nombre     = $('<h5>'+state.selectedStation.name+'</h5>');
    const hr         = $('<hr>');
    const divProducts=$('<div class="data-gas"></div>');
    const divDetails =$('<div></div>');

    div.append(nombre);
    div.append(hr);
    divDetails.append($('.ruta'));
    console.log($('.ruta'));
    div.append(divProducts);
    div.append(divDetails);
    row.append(div);
    container.append(row);

    state.selectedStation.products.forEach((e)=> {
        const divData = $('<div class="product"><strong>' + e + '</strong></div>');
        divProducts.append(divData);
    })

        return container;
}
