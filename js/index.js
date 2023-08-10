//list items change colors on mouse over
function hoverIt(x) {
    x.className = "text-warning";
  }
  
function unHover(x) {
    x.className = "text-light";
  }


//updates document with CV, prints it only once

function printCv() {
    //prints cv
    for (var i = 0; i < cv.length; i++) {
      let cvitems = document.createElement('div');
      if (cv[i] == "-") {
        cvitems.className = "p-2"
        document.getElementById("cvp").appendChild(cvitems);
      } else {
        var txt = cv[i];
        cvitems.className = "text-light font-monospace";
        cvitems.id = [i];
        document.getElementById("cvp").appendChild(cvitems);
        document.getElementById([i]).innerHTML += txt;
    }
  }
  thingy = true;
}

function printOnce() {
  if (!thingy) printCv();
}

// print space 
// thingType, enter
// then year, TAB, title (comma, space) venue, etc.... enter
// for each thingType, blank div, title, list items....




const cV = [
  {
    thingType: "Selected Exhibtions",
    items: [ 
      {
        year: 2018,
        title: "Project Phoenix",
        venue: "International Cultic Studies Association Annual Conference",
        city: "Philadelphia",
        state: "PA"
      },
      {
        year: 2018,
        title: "AXIOM",
        venue: "ARKA Art",
        city: "Houston",
        state: "TX"
      },
      {
        year: 2018,
        title: "The Grafters (2-person show)",
        venue: "Mercantile Montrose",
        city: "Houston",
        state: "TX"
      },
      {
        year: 2017,
        title: "Anonymous Children’s Immigration Art",
        venue: "Pop-Up Gallery,  Galveston Art Center",
        city: "Galveston",
        state: "TX"
      },
      {
        year: 2017,
        title: "Law and Artyer",
        venue: "Kallinen Contemporary",
        city: "Houston",
        state: "TX"
      },
      {
        year: 2017,
        title: "TRUMP! The Art Show",
        venue: "Kallinen Contemporary",
        city: "Houston",
        state: "TX"
      },
      {
        year: 2017,
        title: "Uniquely Vivid Art Show",
        venue: "Tellepsen Family Downtown YMCA",
        city: "Houston",
        state: "TX"
      },
      {
        year: 2016,
        title: "Speaking of Abstract",
        venue: "JoMar Visions",
        city: "Houston",
        state: "TX"
      },
      {
        year: 2016,
        title: "Kind of Like Tree Rings (solo)",
        venue: "MOD Coffeehouse",
        city: "Galveston",
        state: "TX"
      },
      {
        year: 2016,
        title: "",
        venue: "G. Lee Gallery",
        city: " Galveston",
        state: " TX"
      },
      {
        year: 2015,
        title: "Tres Hobres and The Last Picture Show (3-person show)",
        venue: "G. Lee Gallery",
        city: "Galveston",
        state: "TX"
      },
      {
        year: 2015,
        title: "Brushes by the Beach",
        venue: "G. Lee Gallery",
        city: "Galveston",
        state: "TX"
      },
      {
        year: 2015,
        title: "Stuff I Made (solo)",
        venue: "Fraser Valley Library",
        city: "Fraser",
        state: "CO"
      },
      {
        year: 2014,
        title: "Artistico Gallery",
        venue: "",
        city: "Winter Park",
        state: "CO"
      },
      {
        year: 2014,
        title: "Possibly Picasso",
        venue: "",
        city: "Idaho Falls",
        state: "ID"
      },
      {
        year: 2009,
        title: "notMOMA",
        venue: "Gallery 2,  Washington State University",
        city: "Pullman",
        state: "WA"
      } 
    ]   
  },
  {
    thingType: "Performances",
    items: [ 
      {
        year: 2017,
        title: "Why Am I Still Doing This?",
        venue: "East Down Warehouse",
        city: "Houston",
        state: "TX"
      },
      {
        year: 2017,
        title: "Digital Anxiety Rejection Therapy",
        venue: "Kohn’s Wine, Darts, Coffee, Art",
        city: "Houston",
        state: "TX"
      },
      {
        year: 2017,
        title: "Digital Anxiety Rejection Therapy",
        venue: "JoMar Visions",
        city: "Houston",
        state: "TX"
      } 
    ]
  }    
];
