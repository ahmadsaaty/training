fetch('https://restcountries.eu/rest/v2/all')
  .then(response => response.json())
  .then(json => {
    for (let i = 0; i < json.length; i++) {

      let x = document.createElement("option")
      x.innerHTML = json[i].name
      document.getElementById("countryNames").appendChild(x)

    }
  })


//working flag and country name card function without covid info
function drawCard() {

  let search = document.getElementById('name');
  search = search.value;
  search = search.toLowerCase();

  fetch('https://restcountries.eu/rest/v2/all')
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
        }
      }
    })
  document.getElementById('name').value = "";
}


//trying 2 api's to draw a Card to get country name + flag + covid info:
function drawCard2() {

  let search = document.getElementById('name');
  search = search.value;
  search = search.toLowerCase();
  let content = `
          <div class="card bg-transparent mb-3" style="max-width: 540px;">
  <div class="row no-gutters bg-transparent">
    <div  class="col-md-4 bg-transparent">
      <img style="height:100%" src="Cflag" class="card-img" alt="...">
    </div>
    <div class="col-md-8 bg-transparent">
      <div class="card-body bg-transparent">
        <h2 class="card-title  text-primary">CardTitle</h2>
        <h4 class="card-text text-warning"><small>Cases:         text1</small></h4>
        <h4 class="card-text text-success"><small>Recovered :    text2</small></h4>
        <h4 class="card-text text-danger"><small>Deaths :       text3</small></h4>
        <h4 class="card-text text-secondary"><small>Last updated : text4</small></h4>

      </div>
    </div>
  </div>
</div>`

  fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(json => {
      for (let i = 0; i < json.length; i++) {

        let lowercase = json[i].name
        lowercase = lowercase.toLowerCase();
        if (search == lowercase) {


          let x = document.createElement("div")

          let y = content.replace("Cflag", json[i].flag)
          y = y.replace("CardTitle", json[i].name)
          x.innerHTML = y
          x.id = "newitems"
          // document.getElementById("new").appendChild(x)
        }
      }
    })

  fetch('https://api.apify.com/v2/key-value-stores/tVaYRsPHLjNdNBu7S/records/LATEST?disableRedirect=true')
    .then(response => response.json())
    .then(json => {
      for (let i = 0; i < json.length; i++) {

        let lowercase = json[i].country
        lowercase = lowercase.toLowerCase();
        if (search == lowercase) {


          let x = document.createElement("div")

          let y = content.replace("text1", json[i].infected)
          y = y.replace("text2", json[i].recovered)
          y = y.replace("text3", json[i].deceased)
          y = y.replace("text4", json[i].lastUpdatedApify)







          x.innerHTML = y
          x.id = "newitems"
          document.getElementById("new").appendChild(x)
        }
      }
    })



  document.getElementById('name').value = "";
}


// fetch('https://covid19-api.org/api/status')
//   .then(response => response.json())
//   .then(json => {
//     for (let i = 0; i < 10; i++) {




//       let x = document.createElement("td")

//       let y = document.createElement("tr")
//       y.className = "table-dark text-body";
//       document.getElementById('new').appendChild(y);
//       let c = document.createElement("td")
//       c.innerHTML = json[i].country;
//       y.appendChild(c);

//       let z = document.createElement("td")
//       z.innerHTML = json[i].cases;
//       y.appendChild(z);
//       let a = document.createElement("td")
//       a.innerHTML = json[i].recovered;
//       y.appendChild(a);
//       let b = document.createElement("td")
//       b.innerHTML = json[i].deaths;
//       y.appendChild(b);
//     }
//   })



//working table function
function showinformation() {


  let search = document.getElementById('name');
  search = search.value;
  search = search.toUpperCase();

  fetch('https://covid19-api.org/api/status')
    .then(response => response.json())
    .then(json => {
      for (let i = 0; i < json.length; i++) {

        if (search == json[i].country) {



          let y = document.createElement("tr")
          y.className = "table-dark text-body row-sm-3";
          y.id = "newitems"
          document.getElementById('new').appendChild(y);
          let c = document.createElement("td")
          c.className = "col-sm-3"
          c.innerHTML = json[i].country;
          y.appendChild(c);

          let z = document.createElement("td")
          z.className = "col-sm-3"
          z.innerHTML = json[i].cases;
          y.appendChild(z);
          let a = document.createElement("td")
          a.className = "col-sm-3"
          a.innerHTML = json[i].recovered;
          y.appendChild(a);
          let b = document.createElement("td")
          b.className = "col-sm-3"
          b.innerHTML = json[i].deaths;
          y.appendChild(b);
          document.getElementById("newtable").appendChild(y)
        }

      }

    }

    )
  document.getElementById('name').value = "";
}



function reset() {
  let search = document.getElementById('name');
  search.value = "";
  fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(json => {

      for (let i = 0; i < json.length; i++) {

        let b = document.getElementById("newitems")
        b.remove()

      }
    })
}



//   //   // let l = document.getElementById('new');
//   //   // let r = document.createElement('tr');

//   //   // fetch('https://restcountries.eu/rest/v2/all')

//   //   fetch('https://covid19-api.org/api/status')
//   //     .then(response => response.json())
//   //     .then(json => {
//   for (let i = 0; i < json.length; i++) {
//     if search == json[i].country {

//       let y = document.createElement("tr")
//       y.className = "table-dark text-body";
//       document.getElementById('new').appendChild(y);
//       let c = document.createElement("td")
//       c.innerHTML = json[i].country;
//       y.appendChild(c);

//       let z = document.createElement("td")
//       z.innerHTML = json[i].cases;
//       y.appendChild(z);
//       let a = document.createElement("td")
//       a.innerHTML = json[i].recovered;
//       y.appendChild(a);
//       let b = document.createElement("td")
//       b.innerHTML = json[i].deaths;
//       y.appendChild(b);
//     }

//   }

// }
// console.log(json))
// fetch('https://api.covid19api.com/summary')
//   .then(response => response.json())
//   .then(json => {
//     for (let i = 0; i < json.length; i++) {
//       console.log(json[i]);
//     }
//   })

  // for (let i = 0; i < json.Countries.length; i++) {
  //   // console.log(json.Countries[i].Country)

  //   if (name == json.Countries[i].Country) {
  //     l.appendChild(r);
  //     let x = document.createElement('td');
  //     x.innerHTML = json.Countries[i].Country;
  //     r.appendChild(x);
  //     let x = document.createElement('td');
  //     x.innerHTML = json.Countries[i].NewConfirmed;
  //     r.appendChild(x);
  //     let x = document.createElement('td');
  //     x.innerHTML = json.Countries[i].NewRecovered;
  //     rl.appendChild(x);
  //     let x = document.createElement('td');
  //     x.innerHTML = json.Countries[i].NewDeaths;
  //     r.appendChild(x);
  //   }


// }