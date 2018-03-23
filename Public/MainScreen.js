
//
// function Scanner() {
// //   use their code to initiate camera and
// //   finially this function creates a number
// //   append/remove the number to the string[]
//  }



function MakeMarSaysSave() {
  fetch('http://localhost:3636/data')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      document.getElementById('listOfItems').innerHTML = '';
      var ul = document.getElementById('listOfItems');
      for (i = 401; i <= 441; i++) {
        var entry = document.createElement("li");
        entry.appendChild(document.createTextNode(i));
        entry.style.color="green";
        if (myJson.indexOf(i)>=0) {
          entry.style.color = "red";
        }

        ul.appendChild(entry);
      }
    });
}
