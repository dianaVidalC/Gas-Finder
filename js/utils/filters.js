'use strict';

const filterByDistrict = (stations,query) => {
    //console.log(stations)
    const valor = query.toLowerCase();

    const district=stations.filter((e)=>{
        return e.district.toLowerCase().indexOf(valor)!=-1;
    })
    console.log(district);
   return district;
};




