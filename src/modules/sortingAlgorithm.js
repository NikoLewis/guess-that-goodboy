//attempting fisher-Yates algorithm
// let testArray= ['a','b','c','d'];

function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]]
    
  }
//   console.log('shuffled array is now:', array);
  return array;
}

// shuffle(testArray)
// console.log(shuffle())



export default shuffle;
