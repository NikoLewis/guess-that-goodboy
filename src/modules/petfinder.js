// let petfinder = require("@petfinder/petfinder-js");
import petfinder from "@petfinder/petfinder-js"
let client = new petfinder.Client({apiKey: "0xZgFt5qitE5FciULtKydiY9cd4I7V9efNuWb91lZ3pqfWexmm", secret: "VuA2rNyZhGqWzfpQGMIuh4cO4kGE0bb9HrEOVwo6"});

let searchFunction = () => {
    client.animal.search()
    .then(function (response) {
        // Do something with `response.data.animals`
        console.log(response.data.animals)
    })
    .catch(function (error) {
        // Handle the error
        console.log(error)
    });
}



    export default searchFunction;

    //the below code was taken from the inital main.js attempts
    // import searchFunction from "./petfinder.js"

if (typeof window !== 'undefined') {
  console.log('window has loaded')
  window.addEventListener('load', () => {
    // Code that uses the window object
    window.addEventListener('DOMContentLoaded', () => {
      console.log('DOM has loaded')
  document.querySelector('#search').innerHTML = `
  <div>
    ${searchFunction()}
  </div>
`
})
  });
}



// export default request;
// setupCounter(document.querySelector('#counter'))
