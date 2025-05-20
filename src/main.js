let inGameBreeds;
import dogBreedList from "./modules/breedTestFile";
import shuffle from "./modules/sortingAlgorithm";
import listeningForButtons from "./modules/ listeningForButtons";

 let dialog = document.getElementById('chosenPupDialog');
 
import samplePupData from "./modules/samplePupData";
import { playButton, getData } from "./modules/fetchData";
import { buildGameBoard as buildGameBoard} from "./modules/pupGame";
 

//edit to use samplePupData to populate initial game board without api call. Create start game and try again buttons to invoke api call

document.addEventListener('DOMContentLoaded', function () {
  getData();  

  
});