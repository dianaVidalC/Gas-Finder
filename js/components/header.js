'use strict';

const Header = (update) => {
  const header = $("<header></header>");
  const div = $('<div class="row valign-wrapper"></div>');
  const title = $("<span class='col s12 left-align'>Gas Finder</span>");
  const icon = $('<i class="fa fa-chevron-left col s1 left-align hide" aria-hidden="true"></i>');

  div.append(title);
  header.append(div);
  div.append(icon);

    return header;
}
