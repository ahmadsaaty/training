//making datalist options to select country name:

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


//drawing all country cards:

fetch('https://world-country.herokuapp.com/api/countries')
  .then(response => response.json())
  .then(json => {
    for (let i = 0; i < json.length; i++) {



      let content = `
      <div class="card mb-4 shadow-sm">
              <img class="bd-placeholder-img card-img-top" width="100%" height="225"
                src="Cflag" alt="Flag">
              </img>
              <div class="card-body">
                <p class="card-text">
                  <h2>Cname</h2>
                  
                <div><h5>Capital: CapName<h5></div>
                <div><h5>Region: RegName<h5></div>
                <div><h5>Population : PopName<h5></div>
                <div><h5>Native Name: NatName<h5></div>

                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <a href="https://www.wikipedia.com/wiki/CountryName" target="_blank"><button type="button"
                        class="btn btn-sm btn-outline-secondary">View Wiki</button></a>
                    <a href="FlagFlag" target="_blank"><button type="button" 
                        class="btn btn-sm btn-outline-secondary">View Flag</button>
                  </div>
                  <small class="text-muted">9 mins</small>
                </div>
              </div>
              </div>
          
`


      let x = document.createElement("div")
      x.className = "col-md-4"
      let y = content.replace("Cflag", json[i].flag)
      y = y.replace("Cname", json[i].name)

      y = y.replace("CapName", json[i].capital)
      y = y.replace("RegName", json[i].region)
      y = y.replace("PopName", json[i].population)
      y = y.replace("NatName", json[i].nativeName)
      y = y.replace("CountryName", json[i].name)
      y = y.replace("FlagFlag", json[i].flag)

      x.innerHTML = y
      x.id = "newitems"

      document.getElementById("new").appendChild(x)
      counter++;


    }
  }
  )




// working flag and country name card function for button
function drawCard() {
  if (counter > 0) {
    for (let i = 0; i < counter; i++) {
      let b = document.getElementById("newitems")
      b.remove()
    }
    counter = 0;
  }


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
      <div class="card mb-4 shadow-sm">
              <img class="bd-placeholder-img card-img-top" width="100%" height="225"
                src="Cflag" alt="Flag">
              </img>
              <div class="card-body">
                <p class="card-text">
                  <h2>Cname</h2>
                  
                <div><h5>Capital: CapName<h5></div>
                <div><h5>Region: RegName<h5></div>
                <div><h5>Population : PopName<h5></div>
                <div><h5>Native Name: NatName<h5></div>

                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <a href="https://www.wikipedia.com/wiki/CountryName" target="_blank"><button type="button"
                        class="btn btn-sm btn-outline-secondary">View Wiki</button></a>
                    <a href="FlagFlag" target="_blank"><button type="button" 
                        class="btn btn-sm btn-outline-secondary">View Flag</button>
                  </div>
                  <small class="text-muted">9 mins</small>
                </div>
              </div>
              </div>
          
`


          let x = document.createElement("div")
          x.className = "col-md-4"
          let y = content.replace("Cflag", json[i].flag)
          y = y.replace("Cname", json[i].name)

          y = y.replace("CapName", json[i].capital)
          y = y.replace("RegName", json[i].region)
          y = y.replace("PopName", json[i].population)
          y = y.replace("NatName", json[i].nativeName)
          y = y.replace("CountryName", json[i].name)
          y = y.replace("FlagFlag", json[i].flag)

          x.innerHTML = y
          x.id = "newitems"

          document.getElementById("new").appendChild(x)
          counter++;




        }
      }

    })
  document.getElementById('name').value = ""
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

  fetch('https://world-country.herokuapp.com/api/countries')
    .then(response => response.json())
    .then(json => {
      for (let i = 0; i < json.length; i++) {



        let content = `
      <div class="card mb-4 shadow-sm">
              <img class="bd-placeholder-img card-img-top" width="100%" height="225"
                src="Cflag" alt="Flag">
              </img>
              <div class="card-body">
                <p class="card-text">
                  <h2>Cname</h2>
                  
                <div><h5>Capital: CapName<h5></div>
                <div><h5>Region: RegName<h5></div>
                <div><h5>Population : PopName<h5></div>
                <div><h5>Native Name: NatName<h5></div>

                </p>
                <div class="d-flex justify-content-between align-items-center">
                  <div class="btn-group">
                    <a href="https://www.wikipedia.com/wiki/CountryName" target="_blank"><button type="button"
                        class="btn btn-sm btn-outline-secondary">View Wiki</button></a>
                    <a href="FlagFlag" target="_blank"><button type="button" 
                        class="btn btn-sm btn-outline-secondary">View Flag</button>
                  </div>
                  <small class="text-muted">9 mins</small>
                </div>
              </div>
              </div>
          
`


        let x = document.createElement("div")
        x.className = "col-md-4"
        let y = content.replace("Cflag", json[i].flag)
        y = y.replace("Cname", json[i].name)

        y = y.replace("CapName", json[i].capital)
        y = y.replace("RegName", json[i].region)
        y = y.replace("PopName", json[i].population)
        y = y.replace("NatName", json[i].nativeName)
        y = y.replace("CountryName", json[i].name)
        y = y.replace("FlagFlag", json[i].flag)

        x.innerHTML = y
        x.id = "newitems"

        document.getElementById("new").appendChild(x)
        counter++;


      }
    }
    )


}




