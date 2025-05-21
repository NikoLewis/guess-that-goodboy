
import { inGameBreeds  } from "./fetchData";
import dogBreedList from "./breedTestFile";
import shuffle from "./sortingAlgorithm";
import listeningForButtons from "./ listeningForButtons";
let dialog = document.getElementById('chosenPupDialog');
// let correctAnswers = []
// let falseAnswers = []

function closeDialog() {
    dialog.close(); 
}


const buildGameBoard = ()=>{
    // console.log('inside build game')
    let inGameBreeds = document.querySelectorAll('.gridImage')

          console.log('pups included in game are:', inGameBreeds);
    
          // For each inGameBreed, adds an event listener that listens for a click event.
          inGameBreeds.forEach((inGameBreed) => {
            const whichBreed = inGameBreed.src;
              console.log(whichBreed);
    
             
            //   console.log(whichBreed.indexOf('breeds/')); // always at 23
              let start = whichBreed.indexOf('breeds/');
              let thisBreed = whichBreed.substring(30, whichBreed.length + 1);
    
            //   thisBreed;
              // console.log('this breed is:', thisBreed);
              let cutOff = thisBreed.indexOf('/');
              // let index = input.LastIndexOf("/");
    
              let dogName = thisBreed.substring(0, cutOff).replace('-', ' '); // or index + 1 to keep slash
               inGameBreed.setAttribute('data-name', dogName)
               console.log('ingamebreed has attribute?', inGameBreed)
              //replace this console.log with a show modal function call
              console.log('dog name clicked is', dogName);
              
              let multipleChoiceOptions = [dogName]
              
            inGameBreed.addEventListener('click', () => {
                
                console.log('ingameBreed =', inGameBreed);
              
              // console.log('multipleChoiceOptions is', dogName)
              const randomElement = dogBreedList[Math.floor(Math.random() * dogBreedList.length)];
              // console.log('random element currently is', randomElement)
              // console.log('testing my random dog selecter', randomElement)
              for(let i = 0; i < 3; i++){
                multipleChoiceOptions.push(dogBreedList[Math.floor(Math.random() * dogBreedList.length)])
                // console.log(multipleChoiceOptions)
              }
    
              
              shuffle(multipleChoiceOptions);
              // let dialog = document.getElementById("chosenPupDialog");
            //  let dialog = document.getElementById('chosenPupDialog');
    
     let insideDialog = document.getElementById('dialogContainer')
     
     
              insideDialog.innerHTML = 
              `<div id="buttonContainer">
              <div id="titleArea">
                <h2 id="title">Guess that Pup!</h2> 
              </div>
              <div id="imgContainer">
                <img src="${whichBreed}" alt="Cute dog picture" />
              </div>
                <div class="buttons">
                <button type="button" id="1" class="btn" data-correctAnswer="false" data-dogName="${multipleChoiceOptions[0]}"  data-choiceSelected="" >${multipleChoiceOptions[0]}</button>
                <button type="button" id="2" class="btn" data-correctAnswer="false" data-dogName="${multipleChoiceOptions[1]}" data-choiceSelected="">${multipleChoiceOptions[1]}</button>
                <button type="button" id="3" class="btn" data-correctAnswer="false" " data-dogName="${multipleChoiceOptions[2]}" data-choiceSelected="">${multipleChoiceOptions[2]}</button>
                <button type="button" id="4" class="btn" data-correctAnswer="false" data-dogName="${multipleChoiceOptions[3]}" data-choiceSelected="">${multipleChoiceOptions[3]}</button>
                </div>
              </div>
                `;
    
    
              dialog.showModal();
               let buttons = document.getElementsByClassName('btn');
              
    
    
               for (let i = 0; i < buttons.length; i++) {
                // console.log('we are within the new for loop')
                let ourButtons = buttons[i]
                ourButtons.disabled = false;
                
               }          
              console.log('I know what buttons means within the img click listener',buttons)
              listeningForButtons(buttons) 
            })
            
            
          });
}

export {buildGameBoard}