var showthumbs = [ 
  "learning.jpg",
  "ourprojects.jpg",
  "astheworldturns.jpg",
  "strangetimes.jpg",
  "endless.jpg"
];

var showtitles = [ 
  "LEARNING THINGS IN REAL TIME",
  "OUR PROJECTS, AN INSIGHT",
  "AS THE WORLD TURNS - CALL +44 7720 980 999",
  "STRANGE TIMES, STRANGE DREAMS",
  "ENDLESS VOYAGE (SRS)"
];

var showtimes = [{
  start: 'December 11, 2020 10:00:00',
  end: 'December 11, 2020 11:00:00'
}, {
  start: 'December 11, 2020 11:15:00',
  end: 'December 11, 2020 12:00:00'
}, {
  start: 'December 11, 2020 12:15:00',
  end: 'December 11, 2020 13:15:00'
}, {
  start: 'December 11, 2020 13:30:00',
  end: 'December 11, 2020 14:30:00'
}, {
  start: 'December 11, 2020 14:45:00',
  end: 'December 11, 2020 15:45:00'
},]


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