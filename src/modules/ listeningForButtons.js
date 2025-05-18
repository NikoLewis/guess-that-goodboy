function listeningForButtons (array){

    // console.log(array)
    
    for (let i = 0 ; i < array.length; i++) {
        let thisButton = array[i]
        let usingDataAttrb = thisButton.getAttribute('data-correctAnswer')
        
        thisButton.addEventListener('click' , function (){
        // console.log('the button clicked', array[i])
        console.log('a button was clicked', thisButton.innerText, 'is it the right answer?', usingDataAttrb )
        thisButton.setAttribute("data-choiceSelected", "true")
         let compareAttributes = thisButton.getAttribute('data-choiceSelected')
         let titleArea = document.getElementById("title")
        if(compareAttributes === 'true' && usingDataAttrb === 'true'){
            thisButton.className = 'pass'
            console.log('Correct! Great Job.')
            titleArea.innerHTML = 'Correct! Great Job.'
        

        }else{
            console.log('Incorrect! Better luck next time.')
            titleArea.innerHTML = 'Incorrect! Better luck next time.'
            thisButton.className = 'fail'
        }
        })
        
    }       
 }




 export default listeningForButtons;