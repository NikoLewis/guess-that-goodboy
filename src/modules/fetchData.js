//fetch data for game from API and return in an exported function that returns the data results

let playButton = document.getElementById('playButton');
import { buildGameBoard } from "./pupGame";
let inGameBreeds;


const getData = function (){
    playButton.addEventListener('click', function (){
        fetch(`https://dog.ceo/api/breeds/image/random/9`)
        .then((resp) => resp.json())
        .then((data)=>{
            let pupData = data.message;
            const imageElements = pupData.map((pup) => {
        let gameBoard = document.getElementById('gameBoard');
        return `<section class="gridSection"><img class="gridImage" id="${pup}" src="${pup}" alt="Cute dog photo"></section>`;
      });
      gameBoard.innerHTML = imageElements.join('');
      inGameBreeds = document.querySelectorAll('.gridImage');
      buildGameBoard();
        })
        .catch((e) => {
            console.log(e);
        });
    })
    
}



export {playButton, getData, inGameBreeds};