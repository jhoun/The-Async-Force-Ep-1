(function(window){

function person4Name(){
  console.log(this.responseText);
  var darthVader = JSON.parse(this.responseText);
  console.log(darthVader);
  var name = document.getElementById("person4Name");
  name.innerHTML = darthVader.name;


}




var oReq = new XMLHttpRequest();


var oReq = new XMLHttpRequest();
oReq.addEventListener("load", person4Name);
oReq.open("GET", "http://swapi.co/api/people/4/");
oReq.send();

}(window));