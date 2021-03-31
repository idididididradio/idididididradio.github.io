var showthumbs = [ 
  "learning.jpg",
  "ourprojects.jpg",
  "astheworldturns.jpg",
  "strangetimes.jpg",
  "endless.jpg"
];

var showtitles = [ 
  "AS THE WORLD TURNS - CALL +44 7720 980 999",
  "CONNECTING NAMIBIA AND GERMANY - INTERVIEW WITH FROWIN BECKER",
  "FRIENDS LEARNING THINGS!",
  "MASTERS OPEN CALL",
  "SEX AND CARE - INTERVIEW WITH MAGGIE SAUNDERS",
  "OPEN END - French pr$ss, Nick & Polarwolf"
];

var showtimes = [{
  start: 'April 1, 2021 11:00:00',
  end: 'April 1, 2021 12:00:00'
}, {
  start: 'April 1, 2021 12:15:00',
  end: 'April 1, 2021 13:15:00'
}, {
  start: 'April 1, 2021 13:30:00',
  end: 'April 1, 2021 14:30:00'
}, {
  start: 'April 1, 2021 14:30:00',
  end: 'April 1, 2021 15:30:00'
}, {
  start: 'April 1, 2021 15:45:00',
  end: 'April 1, 2021 16:45:00'
}, {
  start: 'April 1, 2021 16:45:00',
  end: 'April 1, 2021 20:00:00'
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

 

    if (now > showtime && now < endshowtime) {

      logo.setAttribute('src', showthumbs[i]);
      logo.setAttribute('alt', showthumbs[i]);
      title.innerHTML = showtitles[i];

      i = showtimes.length;

    } else {

      logo.setAttribute('src', 'interlude.jpg');
      title.innerHTML = '...';

      i++
    }

  }

  setTimeout('reload()', 30000)

}


function reload() {
  teste()
}