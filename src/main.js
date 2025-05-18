
let inGameBreeds;

document.addEventListener("DOMContentLoaded", function(){
  console.log('gameBoard is', gameBoard)
  
     fetch(`https://dog.ceo/api/breeds/image/random/9`)
    .then( (resp) => resp.json())
    .then( data => {
      console.log('data is:', data);
      let pupData = data.message;
      const imageElements =pupData.map( (pup) => {
        let gameBoard =  document.getElementById("gameBoard")
        return `<section class="gridSection"><img class="gridImage" src="${pup}" alt="Cute dog photo"></section>`;
      })
      gameBoard.innerHTML = imageElements.join('');
      inGameBreeds = document.querySelectorAll('.gridImage');
      console.log("pups included in game are:", inGameBreeds)

      // For each inGameBreed, adds an event listener that listens for a click event.
      inGameBreeds.forEach( inGameBreed => {
        inGameBreed.addEventListener('click', () => {
          const whichBreed = inGameBreed.src
          console.log(whichBreed);

          const dialog = document.getElementById("chosenPupDialog");
          console.log(whichBreed.indexOf("breeds/"))// always at 23
          let start = whichBreed.indexOf("breeds/")
          let thisBreed = whichBreed.substring(30, whichBreed.length + 1)
          console.log('this breed is:',thisBreed)
          let cutOff = thisBreed.indexOf('/')
          // let index = input.LastIndexOf("/");
          
             let dogName = thisBreed.substring(0,cutOff ).replace("-", " "); // or index + 1 to keep slash
          
             //replace this console.log with a show modal function call
            console.log('dog name clicked is', dogName)

          // dialog.innerHTML = 
        });
      });



    })
    .catch(e => {
      console.log(e);
    })

    //another fetch for to populate reference array  of dog breeds

})



//functionality: game interactions click event listener open a modal with larger dog image and 4 breed  multiple choice



// async/ await for win condition  announce win, invite to play again or link to adoption options
