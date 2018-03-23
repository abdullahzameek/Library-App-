// function changeColor(newColor) {
//   console.log(0);
//   var text = document.getElementById("variable");
//   text.style.color = newColor;
// }



function MakeMarSaysSave() {
    document.getElementById('listOfItems').innerHTML = '';
    var ul = document.getElementById('listOfItems');
    for (i = 401; i <= 441; i++) {
      var entry = document.createElement("li");
      entry.appendChild(document.createTextNode(i));


      if (i==411)
      entry.style.color = "red";


      ul.appendChild(entry);
    }

}
