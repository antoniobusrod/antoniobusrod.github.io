var sections = {
	'personal-data'    : true,
	'experience'       : true,
	'education'        : true,
	'computing-skills' : true,
	'research'         : true,
	'misc'             : true,
};
var queryParamId = 'q';

var sectionSelected = getUrlParams()[queryParamId];
if (!!sectionSelected && !!sections[sectionSelected]) {
	toggle(sectionSelected.toString());
}

// Local functions

function getUrlParams() {
  var regexp = /[?&]([^=#]+)=([^&#]*)/g;
  var params = {};
  var matches;
  while (!!(matches = regexp.exec(window.location.href))) {
    params[matches[1]] = matches[2];
  }
  return params;
}

function toggle(id) {
	for (var section in sections) {
    document.getElementById(section).style.display = "none";
	}
  document.getElementById(id).style.display = "block";
}

