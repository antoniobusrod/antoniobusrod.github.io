var sections = [
  'personal-data',
  'experience',
  'education',
  'computing-skills',
  'research',
  'misc'
];

var sectionSelected = getUrlParams()['q'];
if (sectionSelected) {
  if (sections.indexOf(sectionSelected) >= 0) {
    toggle(sectionSelected.toString());
  }
}

// Local functions

function getUrlParams() {
  var regexp = /[?&]([^=#]+)=([^&#]*)/g;
  var params = {};
  var matches;
  while (matches = regexp.exec(window.location.href)) {
    params[matches[1]] = matches[2];
  }
  return params;
}

function toggle(id) {
  sections.forEach(function(section) {
    document.getElementById(section).style.display = "none";
  });
  document.getElementById(id).style.display = "block";
}

