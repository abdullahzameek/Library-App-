
function MakeMarSaysSave() {
    document.getElementById('listOfItems').innerHTML = '';
    var ul = document.getElementById('listOfItems');
    for (i = 401; i <= 441; i++) {
      var entry = document.createElement("li");
      entry.appendChild(document.createTextNode(i));
      entry.style.color="green";

      if (list.indexOf(i)>=0)
        entry.style.color = "red";

      ul.appendChild(entry);
    }

}
