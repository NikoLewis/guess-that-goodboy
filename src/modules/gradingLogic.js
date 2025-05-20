//not sure which function and file this should go in

let dogGroup = document.getElementsByClassName("gridImage")
                if(buttons[i].getAttribute('data-dogName') == dogName){
                    console.log(`${buttons[i].getAttribute('id')} is the correct answer`)
                    buttons[i].setAttribute('data-CorrectAnswer', "true")
                    correctAnswers.push(whichBreed)
                    console.log('has the attribute been changed', buttons[i].getAttribute('data-CorrectAnswer'))
                    console.log('this is from the correct answers array', correctAnswers)
                    
                    let markedPup = dogGroup.filter((dog)=> dog.src === whichBreed)
                    markedPup.className = 'pass'
                }else{
                    console.log(`${buttons[i].getAttribute('id')} is the WRONG answer`)  
                    falseAnswers.push(whichBreed)  
                    console.log('this is from the false answers array', falseAnswers)
                    let markedPup = dogGroup.filter((dog)=> dog.src === whichBreed)
                    markedPup.className = 'fail'
                }