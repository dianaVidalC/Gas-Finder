'use strict';

const Header = (update) => {
  const header = $("<header></header>");
  const div = $('<div class="row valign-wrapper"></div>');
  const title = $("<span class='col s12 left-align'>Gas Finder</span>");
  const icon = $('<i class="fa fa-chevron-left col s1 left-align hide" aria-hidden="true"></i>');
  const divInput = $('<div class="buscar"></div>');
  const input = $('<input class="col s12" type="text" placeholder="Ingresa tu distrito a buscar">');
  const iconSearch = $('<i class="fa fa-search"></i>');

  div.append(icon);
  div.append(title);
  input.append(iconSearch);
  divInput.append(input);
  header.append(div);
  header.append(divInput);

  input.on('keyup',(e)=>{
      filterByDistrict(state.stations,input.val());
})

  return header;
}
