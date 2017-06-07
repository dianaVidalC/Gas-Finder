'use strict';

const Header = (update) => {
  const header = $("<header></header>");
  const div = $('<div class="row valign-wrapper"></div>');
  const icon = $('<i class="fa fa-chevron-left col s1 left-align hide icono" aria-hidden="true"></i>');
  const title = $("<span class='col s12 left-align titulo'>Gas Finder</span>");

  div.append(icon);
  div.append(title);
  header.append(div);

  serviciosContenedor();

    icon.on('click',(e) => {
        e.preventDefault();
        state.selectedStation = null;
        update();
    })

    return header;
}
