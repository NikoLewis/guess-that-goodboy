let dialog = document.getElementById("chosenPupDialog");
// let dialogButton = document.getElementById("closeButton");
// let dogGroup = document.getElementsByClassName("gridImage")

function closeDialog() {
    dialog.close();
}

function listeningForButtons (array){

        let gameDogImg = document.querySelector('[data-name]')
        let winningDog = gameDogImg.getAttribute('data-name')
        // reference ^ const element = document.querySelector('[data-example="someValue"]');
    for (let i = 0 ; i < array.length; i++) {
        let thisButton = array[i]
        //whereever this is be4ing set is where things are going wrong
       
        let buttonDog = thisButton.getAttribute('data-dogname')
        console.log('does app know what imgs WINNINGDOG is?', winningDog )
        console.log('does app know what buttons BUTTONDOG means?', buttonDog)


        // if(winningDog === buttonDog){
        //     thisButton.setAttribute('data-correctAnswer', 'true') 
        //     console.log('is correct answer marked true?', thisButton)
        // }
        // console.log('is correct answer marked true?', thisButton.getAttribute('data-correctAnswer'))
        //  let usingDataAttrb = thisButton.getAttribute('data-correctAnswer')

        thisButton.addEventListener('click' , function (){
        //      if(winningDog === buttonDog){
        //     thisButton.setAttribute('data-correctAnswer', 'true') 
        //     console.log('is correct answer marked true?', thisButton)
        // }
            // console.log('is correct answer marked true?', thisButton.getAttribute('data-correctAnswer'))
        //  let usingDataAttrb = thisButton.getAttribute('data-correctAnswer')

        //     thisButton.setAttribute("data-choiceSelected", "true")
        //     let compareAttributes = thisButton.getAttribute('data-choiceSelected')
            let title = document.getElementById("title");     
            // let titleArea = document.getElementById('titleArea')
        //   && usingDataAttrb === 'true'
// compareAttributes === 'true' && usingDataAttrb === 'true' 
            if(winningDog === buttonDog){
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
                // console.log('Incorrect! Better luck next time.');
                title.innerHTML = 'Incorrect! Better luck next time.';
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