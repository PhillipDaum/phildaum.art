//list items change colors on mouse over
function hoverIt(x) {
    x.className = "text-warning";
  }
  
function unHover(x) {
    x.className = "text-light";
  }


//updates document with CV, prints it only once

let thingy = false;

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


const cv = [
"===== SELECTED EXHIBITIONS =====",
"2018  Project Phoenix, International Cultic Studies Association Annual Conference, Philidelphia, PA",
"2018  AXIOM, ARKA Art, Houston, TX",
"2018  The Grafters, Mercantile Montrose, Houston, TX (2-person show)",
"2017  Anonymous Children’s Immigration Art, Pop-Up Gallery, Galveston Art Center, Galveston, TX",
"2017  Law and Artyer, Kallinen Contemporary, Houston, TX",
"2017  TRUMP! The Art Show, Kallinen Contemporary, Houston, TX",
"2017  Uniquely Vivid Art Show, Tellepsen Family Downtown YMCA, Houston, TX",
"2016  Speaking of Abstract, JoMar Visions, Houston, TX",
"2016  Kind of Like Tree Rings, MOD Coffeehouse, Galveston, TX (solo)",
"2016  G. Lee Gallery, Galveston, TX",
"2015  Tres Hobres and The Last Picture Show, G. Lee Gallery, Galveston, TX (3-person show)",
"2015  Brushes by the Beach, G. Lee Gallery, Galveston, TX",
"2015  Stuff I Made, Fraser Valley Library, Fraser, CO (solo)",
"2014  Artistico Gallery, Winter Park, CO",
"2014  Possibly Picasso, Idaho Falls, ID",
"2009  notMOMA, Gallery 2, Washington State University, Pullman, WA",
"-",
"===== PERFORMANCES =====",
"2017  Why Am I Still Doing This?, East Down Warehouse, Houston, TX",
"2017  Digital Anxiety Rejection Therapy, Kohn’s Downtown, Kohn’s Wine, Darts, Coffee, Art, Houston, TX",
"2017  Digital Anxiety Rejection Therapy, JoMar Visions, Houston, TX",
"-",
"===== INTERVENTIONS ======",
"2017  Activating Crosswalks - Across from Katz’s Deli (Take 1,) Montrose, Houston, TX",
"2017  Activating Crosswalks - Across from Katz’s Deli (Take 2,) Montrose, Houston, TX",
"2016  Black Friday Free Hugs, Greater Houston Area, TX",
"2015  Free Hugs Shirt, Various Locations",
"-",
"===== WORKSHOPS + LECTURES =====",
"2016  Composition, Abstraction and Expression, G. Lee Gallery, Galveston, TX",
"2016  Abstract Expressionism, G. Lee Gallery, Galveston, TX",
"-",
"===== EXHIBITIONS JURIED =====",
"2016  World Ocean Day Art Contest, Stewart Beach Pavilion, Artist Boat, Galveston, TX",
"-",
"===== PERMANENT PUBLIC ART =====",
"2016  “Cradle of Life - Saltwater marshes of Galveston,” With the Houston YMCA after school program, Project SIT, Artist Boat, Seawall near 53rd, Galveston, TX",
"2016  “Is this Island a Desert? - Freshwater Marshes of Galveston,” With the Houston YMCA after school program, Project SIT, Artist Boat, Seawall near 53rd, Galveston, TX",
"2016  “A River of Grasses - Prairies of Galveston” With the Houston YMCA after school program, Project SIT, Artist Boat, Seawall near 53rd, Galveston, TX",
"-",
"==== PERMANENT COLLECTION ====",
"2015  [Untitled], YMCA of the Rockies",
"-",
"===== OTHER PROFESSIONAL EXPERIENCE =====",
"2016  Figure Drawing Model, Galveston Arts Center, Galeveston, TX",
"2015  Teaching Artist, Galveston Arts Center, Galeveston, TX",
"-",
"===== BIBLIOGRAPHY =====",
"'Hurricane art by HISD students on sale to raise money for hurricane relief,' HISD News Blog, 28 September 2017",
"“Estudiantes de Texas acuden al arte para luchar contra el miedo de que sus padres sean deportados,” Univision 45 Houston, 13 May 2017",
"“Trump-themed Houston art show receives dozens of submissions from anonymous school children,” Houston Chronicle, 12 May 2017",
"“Anonymous Texas School Art Delivers A Message To Donald Trump,” Christian Sarkar, The Huffington Post, 2 May 2016",
"“Rotary Crawfish Boil,” Coast Monthly, 28 May 2016",
"“Sun of the Beach,” Marooned, Fall 2013, Arizona State University Dept. of English",
]