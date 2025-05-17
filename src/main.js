

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
    })
    .catch(e => {
      console.log(e);
    })

    //another fetch for to populate reference array  of dog breeds
    
})



//functionality: game interactions click event listener open a modal with larger dog image and 4 breed  multiple choice
// async/ await for win condition  announce win, invite to play again or link to adoption options
