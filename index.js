fetch('https://world-country.herokuapp.com/api/countries')
  .then(response => response.json())
  .then(json => {
    for (let i = 0; i < json.length; i++) {

      let x = document.createElement("option")
      x.innerHTML = json[i].name
      document.getElementById("countryNames").appendChild(x)

    }
  })
let counter = 0;

//working flag and country name card function without covid info
function drawCard() {

  let search = document.getElementById('name');
  search = search.value;
  search = search.toLowerCase();

  fetch('https://world-country.herokuapp.com/api/countries')
    .then(response => response.json())
    .then(json => {
      for (let i = 0; i < json.length; i++) {

        let lowercase = json[i].name
        lowercase = lowercase.toLowerCase();
        if (search == lowercase) {

          let content = `
          <div class="card bg-white " style="width: 18rem;margin:5px;">
            <img class="card-img-top" src="Cflag" alt="Card image cap">
            <div class="card-body bg-transparent">
              <h2 class="card-title text-primary">CardTitle</h5>
              <h4 class="card-text text-warning"><small>Capital: text1</small></h4>
              <h4 class="card-text text-success"><small>Region : text2</small></h4>
              <h4 class="card-text text-danger"><small>population : text3</small></h4>
              <h4 class="card-text text-secondary"><small>Native Name : text4</small></h4>
              <a href="https://en.wikipedia.org/wiki/Cnames" target="_blank" class="btn btn-primary">Visit Wikipedia</a>
            </div>
          </div>
`


          let x = document.createElement("div")

          let y = content.replace("Cflag", json[i].flag)
          y = y.replace("CardTitle", json[i].name)

          y = y.replace("text1", json[i].capital)
          y = y.replace("text2", json[i].region)
          y = y.replace("text3", json[i].population)
          y = y.replace("text4", json[i].nativeName)
          y = y.replace("Cnames", json[i].name)

          x.innerHTML = y
          x.id = "newitems"
          x.className = "bg-transparent"
          document.getElementById("new").appendChild(x)
          counter++;


        }
      }
    })

  document.getElementById('name').value = "";

}



//working reset button
function reset() {

  if (counter > 0) {
    let search = document.getElementById('name');
    search.value = "";

    for (let i = 0; i < counter; i++) {
      let b = document.getElementById("newitems")
      b.remove()
    }
    counter = 0;


  }

}




