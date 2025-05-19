let inGameBreeds;
import dogBreedList from "./modules/breedTestFile";
import shuffle from "./modules/sortingAlgorithm";
import listeningForButtons from "./modules/ listeningForButtons";
// import samplePupData from "./modules/samplePupData";


//edit to use samplePupData to populate initial game board without api call. Create start game and try again buttons to invoke api call

document.addEventListener('DOMContentLoaded', function () {
  // console.log('gameBoard is', gameBoard);

  fetch(`https://dog.ceo/api/breeds/image/random/9`)
    .then((resp) => resp.json())
    .then((data) => {
      // console.log('data is:', data);
      let pupData = data.message;
      const imageElements = pupData.map((pup) => {
        let gameBoard = document.getElementById('gameBoard');
        return `<section class="gridSection"><img class="gridImage" id="${pup}" src="${pup}" alt="Cute dog photo"></section>`;
      });
      gameBoard.innerHTML = imageElements.join('');
      inGameBreeds = document.querySelectorAll('.gridImage');
      // console.log('pups included in game are:', inGameBreeds);

      // For each inGameBreed, adds an event listener that listens for a click event.
      inGameBreeds.forEach((inGameBreed) => {
        inGameBreed.addEventListener('click', () => {
          const whichBreed = inGameBreed.src;
          // console.log(whichBreed);

          const dialog = document.getElementById('chosenPupDialog');
          console.log(whichBreed.indexOf('breeds/')); // always at 23
          let start = whichBreed.indexOf('breeds/');
          let thisBreed = whichBreed.substring(30, whichBreed.length + 1);

          thisBreed;
          // console.log('this breed is:', thisBreed);
          let cutOff = thisBreed.indexOf('/');
          // let index = input.LastIndexOf("/");

          let dogName = thisBreed.substring(0, cutOff).replace('-', ' '); // or index + 1 to keep slash

          //replace this console.log with a show modal function call
          console.log('dog name clicked is', dogName);
          
          let multipleChoiceOptions = [dogName]
          // console.log('multipleChoiceOptions is', dogName)
          const randomElement = dogBreedList[Math.floor(Math.random() * dogBreedList.length)];
          // console.log('random element currently is', randomElement)
          // console.log('testing my random dog selecter', randomElement)
          for(let i = 0; i < 3; i++){
            multipleChoiceOptions.push(dogBreedList[Math.floor(Math.random() * dogBreedList.length)])
            // console.log(multipleChoiceOptions)
          }

          
          shuffle(multipleChoiceOptions);
          
          dialog.innerHTML = 
          `<div id="buttonContainer">
            <h2 id="title">Guess that Pup!</h2>
            <img src="${whichBreed}" alt="Cute dog picture" />
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
           let correctAnswers = []
           let incorrectAnswers = []

           for (let i = 0; i < buttons.length; i++) {
            // console.log('we are within the new for loop')
            let ourButtons = buttons[i]
            ourButtons.disabled = false;
            if(buttons[i].getAttribute('data-dogName') == dogName){
                console.log(`${buttons[i].getAttribute('id')} is the correct answer`)
                buttons[i].setAttribute('data-CorrectAnswer', "true")
                correctAnswers.push(buttons[i])
                console.log('has the attribute been changed', buttons[i].getAttribute('data-CorrectAnswer'))
                console.log('this is from the correct answers array', correctAnswers)
            }
            // console.log("buttons[i]'s data-dogName is", buttons[i].getAttribute('id'))
           }
           
          console.log('I know what buttons means within the img click listener',buttons)
          
         
              
      

          // console.log('correct button is', correctButton)
          // can I invke a function that creats a new listener

          listeningForButtons(buttons) 

          
          
        //  console.log(thisButton)
          // if (x === dogName){
          //   console.log('CORRECT!')
          // }else{
          //   console.log('INCORRECT. But goodluck on the next one!')
          // }
        })//starts line 27 inGameBreed click listener
        
        
      });//starts on line 26 inGameBreed.forEach
    })// 2nd .then starting on line 14
    .catch((e) => {
      console.log(e);
    });//opens on line 71
});//opens on line 9

// console.log(dogBreedList);
//functionality: game interactions click event listener open a modal with larger dog image and 4 breed  multiple choice

// async/ await for win condition  announce win, invite to play again or link to adoption options
//  console.log('this is the global variable samplePupData', samplePupData);

 //grabbing all elements that match the class btn
       