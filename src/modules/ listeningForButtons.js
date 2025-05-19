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
         let titleArea = document.getElementById("title");
        //  let selectedImage = document.getElementById(`${thisButton.src}`)
        //  console.log('am I grabbing the image?', selectedImage)
        if(compareAttributes === 'true' && usingDataAttrb === 'true'){
            titleArea.className = 'pass'
            console.log('Correct! Great Job.')
            titleArea.innerHTML = 'Correct! Great Job.'
           
            document.getElementById('1').disabled = true
            document.getElementById('2').disabled = true
             document.getElementById('3').disabled = true
             document.getElementById('4').disabled = true

        }else{
            console.log('Incorrect! Better luck next time.')
            titleArea.innerHTML = 'Incorrect! Better luck next time.'
            titleArea.className = 'fail'
             document.getElementById('1').disabled = true
            document.getElementById('2').disabled = true
             document.getElementById('3').disabled = true
             document.getElementById('4').disabled = true
        }
        })
        
    }       
 }




 export default listeningForButtons;