(function(window){

  //DARTH VADER OBJECT
  //first request to get name
  var oReq1 = new XMLHttpRequest();
  oReq1.addEventListener("load", getName1);
  oReq1.open("GET", "http://swapi.co/api/people/4/");
  oReq1.send();

  //from the addEventListener
  function getName1(){
    var darthVader = JSON.parse(this.responseText);
    var name = document.getElementById('person4Name');
    name.innerHTML = darthVader.name;

    //second request to get homeworld
    var oReq1Home = new XMLHttpRequest();
    oReq1Home.addEventListener("load", getHome);
    oReq1Home.open("GET", darthVader.homeworld);
    oReq1Home.send();

    // add 2nd function so you can sync in order
    function getHome(){
      var darthVader = JSON.parse(this.responseText);
      var name = document.getElementById('person4HomeWorld');
      name.innerHTML = "Home Planet: " + darthVader.name;
    }
  }

//HAN SOLO OBJECT
  var oReq2 = new XMLHttpRequest();
  oReq2.addEventListener("load", getName2);
  oReq2.open("Get", "http://swapi.co/api/people/14/");
  oReq2.send();

  function getName2 (){
    var hanSolo = JSON.parse(this.responseText);
    var name = document.getElementById('person14Name');
    name.innerHTML = hanSolo.name;

    var oReq2Species = new XMLHttpRequest();
    oReq2Species.addEventListener("load", getSpecies);
    oReq2Species.open("GET", hanSolo.species);
    oReq2Species.send();

    function getSpecies (){
      var hanSolo = JSON.parse(this.responseText);
      var species = document.getElementById('person14Species');
      species.innerHTML = "Species: " + hanSolo.name;
    }
  }

//FILMS OBJECT
  var oReq3 = new XMLHttpRequest();
  oReq3.addEventListener("load", getFilm);
  oReq3.open("GET", "http://swapi.co/api/films/");
  oReq3.send();

  //Grabs "filmList" id from <ul>
  var getUl = document.getElementById("filmList");

  function getFilm(){
    var films = JSON.parse(this.responseText);
    // console.log(films.results);


    for (var i = 0; i < films.results.length; i++){

      //Creates <li> and appends to list
      var filmList = document.createElement('li');
      filmList.className = 'film';
      getUl.appendChild(filmList);
        //Creates <h2> and appends to "film"
        var filmTitle = document.createElement('h2');
        filmTitle.className = "filmTitle";
        filmTitle.innerHTML = films.results[i].title;
        filmList.appendChild(filmTitle);

          //creates <h3> and appends to "film"
          var planetHeader = document.createElement('h3');
          planetHeader.innerHTML = "Planets";
          filmList.appendChild(planetHeader);
            //creates <ul>
            var filmPlanets = document.createElement('ul');
            filmPlanets.className = "filmPlanets";
            filmList.appendChild(filmPlanets);
              //creates <li> and appends to filmPlanets
              var planetList = document.createElement('li');
              planetList.className = "planet";
              filmPlanets.appendChild(planetList);


              function getPlanets(planetList){

                return function(){
                  var films = JSON.parse(this.responseText);
                console.log(films);
                var planetName = document.createElement('h4')
                planetName.className = "planetName";
                planetName.innerHTML = films.name;
                planetList.appendChild(planetName);
                }
              }
                console.log(films.results[i]);

              for (var j = 0; j < films.results[i].planets.length; j++){
                var oReq4 = new XMLHttpRequest();
                oReq4.addEventListener("load", getPlanets(planetList));
                oReq4.open("GET", films.results[i].planets[j]);
                oReq4.send();
              }



    }
  }


}(window));


// //films part
// let filmList = document.getElementById("filmList"); //<ul>
// let filmsReq = new XMLHttpRequest();
// filmsReq.addEventListener('Load', function(){
//   // this happens after we get list item
//   let films = JSON.parse(this.responseText);
//   console.log(films.results);

//   for (var i =0, len = films.results.length; i < len; i++){
//     let filmListItem = document.createElement('li');
//     let filmeTitleHeader = document.createElement('h2');
//     filmeTitleHeader.innerHTML = films.results[i].title;
//     filmList.appendChild(filmListHeader);
//   }

//   <!-- example
//           <li class="film">
//             <h2 class="filmTitle"></h2>
//             <h3>Planets</h3>
//             <ul class="filmPlanets">
//               <li class="planet">
//                 <h4 class="planetName"></h4>
//               </li>
//             </ul>
//           </li>
//         -->

// });
// filmsReq.open('GET', "http://swapi.co/api/films/");
// films.send();

