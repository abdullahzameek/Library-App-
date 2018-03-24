
//
// function Scanner() {
// //   use their code to initiate camera and
// //   finially this function creates a number
// //   append/remove the number to the string[]
//  }



function MakeMarSaysSave() {
  fetch('https://libraryapphacknyu.herokuapp.com/data')
    .then(function(response) {
      return response.json();
    })
    .then(function(myJson) {
      document.getElementById('listOfItems').innerHTML = '';
      var ul = document.getElementById('listOfItems');
      for (i = 401; i <= 441; i++) {
        var entry = document.createElement("li");
        entry.appendChild(document.createTextNode(i));
        entry.style.color="white";
        if (myJson.indexOf(i)>=0) {
          entry.style.color = "red";
        }

        ul.appendChild(entry);
      }
    });
}
function Timer(){
alert('You have been here for almost an hour! Please sign out and sign in again!');
}
