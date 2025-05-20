let dialog = document.getElementById("chosenPupDialog");
let dialogButton = document.getElementById("closeButton");
let dogGroup = document.getElementsByClassName("gridImage")

function closeDialog() {
    dialog.close();
}

function listeningForButtons (array){
    for (let i = 0 ; i < array.length; i++) {
        let thisButton = array[i]
        let usingDataAttrb = thisButton.getAttribute('data-correctAnswer')
        
        thisButton.addEventListener('click' , function (){
            thisButton.setAttribute("data-choiceSelected", "true")
            let compareAttributes = thisButton.getAttribute('data-choiceSelected')
            let title = document.getElementById("title");     
            // let titleArea = document.getElementById('titleArea')

            if(compareAttributes === 'true' && usingDataAttrb === 'true'){
                title.className = 'pass'
                console.log('Correct! Great Job.')
                title.innerHTML = 'Correct! Great Job.'
        //    let markedPup = dogGroup.filter((dog) => dog.src === whichBreed)
        //             markedPup[0].className = 'right'
                document.getElementById('1').disabled = true;
                document.getElementById('2').disabled = true;
                document.getElementById('3').disabled = true;
                document.getElementById('4').disabled = true;
                     
                setTimeout(closeDialog, 2500)
            }else{
                console.log('Incorrect! Better luck next time.');
                title.textContent = 'Incorrect! Better luck next time.';
                title.className = 'fail';
                // let markedPup = dogGroup.filter((dog) => dog.src === whichBreed)
                //     markedPup[0].className = 'wrong'
                document.getElementById('1').disabled = true;
                document.getElementById('2').disabled = true;
                document.getElementById('3').disabled = true;
                document.getElementById('4').disabled = true;
                setTimeout(closeDialog, 2500)
            }
        })  
    }       
 }

 export default listeningForButtons;

 
                // if(buttons[i].getAttribute('data-dogName') == dogName){
                //     console.log(`${buttons[i].getAttribute('id')} is the correct answer`)
                //     buttons[i].setAttribute('data-CorrectAnswer', "true")
                //     correctAnswers.push(whichBreed)
                //     console.log('has the attribute been changed', buttons[i].getAttribute('data-CorrectAnswer'))
                //     console.log('this is from the correct answers array', correctAnswers)
                    
                    
                // }else{
                //     console.log(`${buttons[i].getAttribute('id')} is the WRONG answer`)  
                //     falseAnswers.push(whichBreed)  
                //     console.log('this is from the false answers array', falseAnswers)
                    
                // }