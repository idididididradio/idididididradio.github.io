var showthumbs = [ 
  "thepower.jpg",
  "dadplaylist.jpg",
  "learning.jpg",
  "astheworldturns.jpg",
  "openmicanddjing.jpg"
];

var showtitles = [ 
  "THE POWER OF ESCAPE",
  "DAD PLAYLIST EPHEMERA",
  "LEARNING THINGS IN REAL TIME",
  "AS THE WORLD TURNS",
  "OPEN MIC AND DJING" 
];

var showtimes = [{
  start: 'November 18, 2020 12:00:00',
  end: 'November 18, 2020 13:00:00'
}, {
  start: 'November 18, 2020 13:15:00',
  end: 'November 18, 2020 14:15:00'
}, {
  start: 'November 18, 2020 14:30:00',
  end: 'November 18, 2020 15:30:00'
}, {
  start: 'November 18, 2020 15:45:00',
  end: 'November 18, 2020 16:45:00'
}, {
  start: 'November 18, 2020 17:00:00',
  end: 'November 19, 2020 00:00:00'
}, ]


teste();

function teste() {

  var now = new Date();

  


  var i = 0;


  while (i < showtimes.length) {

    var showtime = new Date((showtimes[i])['start']);
    var endshowtime = new Date((showtimes[i])['end']);

    var logo = document.getElementById('show_logo_right');
    var title = document.getElementById('show_playing');

    /*
        if (endshowtime == 'null') {
          endshowtime = 'November 19, 2021 00:00:00'

          logo.setAttribute('src', 'thatsallfolks.jpg');
          logo.setAttribute('alt', 'thatsallfolks.jpg');
        }*/

    if (now > showtime && now < endshowtime) {

      logo.setAttribute('src', showthumbs[i]);
      logo.setAttribute('alt', showthumbs[i]);
      title.innerHTML = showtitles[i];

      i = showtimes.length;

    } else {

      logo.setAttribute('src', 'interlude.jpg');
      title.innerHTML = 'Interlude';

      i++
    }

  }

  setTimeout('reload()', 30000)

}


function reload() {
  teste()
}