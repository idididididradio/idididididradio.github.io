var showthumbs = [ // add path to directory if necessary
  "thepower.jpg",
  "dadplaylist.jpg",
  "learning.jpg",
  "astheworldturns.jpg",
  "openmicanddjing.jpg" // NOTE: no comma after last entry
];

var showtimes = [{
  start: 'November 17, 2020 21:35:00',
  end: 'November 17, 2020 21:38:00'
}, {
  start: 'November 17, 2020 21:40:00',
  end: 'November 17, 2020 21:42:00'
}, {
  start: 'November 17, 2020 23:21:00',
  end: 'November 17, 2020 23:24:00'
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

  //console.log(now);


  var i = 0;


  while (i < showtimes.length) {

    var showtime = new Date((showtimes[i])['start']);
    var endshowtime = new Date((showtimes[i])['end']);

    var logo = document.getElementById('show_logo_right');

    /*
        if (endshowtime == 'null') {
          endshowtime = 'November 19, 2021 00:00:00'

          logo.setAttribute('src', 'thatsallfolks.jpg');
          logo.setAttribute('alt', 'thatsallfolks.jpg');
        }*/

    if (now > showtime && now < endshowtime) {

      logo.setAttribute('src', showthumbs[i]);
      logo.setAttribute('alt', showthumbs[i]);

      i = showtimes.length;

    } else {

      logo.setAttribute('src', 'placeholder.svg');

      i++
    }

  }

  setTimeout('reload()', 3000)

}


function reload() {
  teste()
}