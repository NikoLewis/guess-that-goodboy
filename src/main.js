// import samplePupData from "./modules/samplePupData";
// verifying samplePupData is an array of img urls
// console.log('sample pup data is', samplePupData);

 // Get the container element
const container =  document.getElementById("photoDisplay")

// looping through data array to display dog images on screen using sample data


// samplePupData.forEach(url => {
//   const img = document.createElement("img"); // Create an image element
//   img.src = url; // Set the image source
//   img.alt = "Cute dog photo"; // Set alternative text (accessibility)
//   img.className = "puppies"
//   container.appendChild(img); // Add the image to the container
// });

// //when document loads fetch from api
//  document.addEventListener("DOMContentLoaded", function () {
//   fetch('https://dog.ceo/api/breeds/image/random/50').then(resp => resp.json()).then(data => {
//  console.log(data)
// }).catch(e => {
//  console.log(e);
// })

//  })
document.addEventListener("DOMContentLoaded", function(){
  console.log('container is', container)
  fetch(`https://dog.ceo/api/breeds/image/random/50`)
    .then( (resp) => resp.json())
    .then( data => {
      console.log('data is:', data);
      let pupData = data.message;
      console.log(pupData)
      pupData.forEach( (pup) => {
      //possibly add if statement to filter on breeds like hyena etc
      // setting up image elements for each photo
      let img = document.createElement("img"); // Create an image element
      img.src = pup; // Set the image source
      img.alt = "Cute dog photo"; // Set alternative text (accessibility)
      img.className = "puppies"
      console.log('img is', img)
      container.appendChild(img); //`<li>${character.name}</li>`
      })
})
      .catch(e => {
console.log(e);
  })
})

