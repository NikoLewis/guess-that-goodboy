//api responds with a json object with the keys "message" and "status".
//message is an array and within it the images can be found
const rawJSON = {
  message: [
    'https:\/\/images.dog.ceo\/breeds\/corgi-cardigan\/n02113186_741.jpg',
    'https:\/\/images.dog.ceo\/breeds\/terrier-irish\/n02093991_281.jpg',
    'https:\/\/images.dog.ceo\/breeds\/sheepdog-indian\/Himalayan_Sheepdog.jpg',
    'https:\/\/images.dog.ceo\/breeds\/affenpinscher\/n02110627_11875.jpg',
    'https:\/\/images.dog.ceo\/breeds\/stbernard\/n02109525_9345.jpg',
    'https:\/\/images.dog.ceo\/breeds\/collie-border\/n02106166_678.jpg',
    'https:\/\/images.dog.ceo\/breeds\/puggle\/IMG_095543.jpg',
    'https:\/\/images.dog.ceo\/breeds\/boxer\/n02108089_2917.jpg',
    'https:\/\/images.dog.ceo\/breeds\/sheepdog-indian\/Himalayan_Sheepdog.jpg',
    'https:\/\/images.dog.ceo\/breeds\/havanese\/00100trPORTRAIT_00100_BURST20191112123933390_COVER.jpg',
    'https:\/\/images.dog.ceo\/breeds\/greyhound-italian\/n02091032_212.jpg',
    'https:\/\/images.dog.ceo\/breeds\/mix\/Galaxy.jpg',
    'https:\/\/images.dog.ceo\/breeds\/setter-english\/n02100735_2684.jpg',
    'https:\/\/images.dog.ceo\/breeds\/frise-bichon\/jh-ezio-1.jpg',
    'https:\/\/images.dog.ceo\/breeds\/dachshund\/tina.jpg',
    'https:\/\/images.dog.ceo\/breeds\/hound-walker\/n02089867_1452.jpg',
    'https:\/\/images.dog.ceo\/breeds\/hound-ibizan\/n02091244_169.jpg',
    'https:\/\/images.dog.ceo\/breeds\/kuvasz\/n02104029_4463.jpg',
    'https:\/\/images.dog.ceo\/breeds\/terrier-fox\/n02095314_2864.jpg',
    'https:\/\/images.dog.ceo\/breeds\/spitz-indian\/Indian_Spitz.jpg',
    'https:\/\/images.dog.ceo\/breeds\/mastiff-bull\/n02108422_4978.jpg',
    'https:\/\/images.dog.ceo\/breeds\/labrador\/n02099712_5769.jpg',
    'https:\/\/images.dog.ceo\/breeds\/terrier-dandie\/n02096437_2291.jpg',
    'https:\/\/images.dog.ceo\/breeds\/komondor\/n02105505_1024.jpg',
    'https:\/\/images.dog.ceo\/breeds\/mastiff-english\/4.jpg',
    'https:\/\/images.dog.ceo\/breeds\/terrier-american\/n02093428_18993.jpg',
    'https:\/\/images.dog.ceo\/breeds\/keeshond\/n02112350_8251.jpg',
    'https:\/\/images.dog.ceo\/breeds\/malinois\/n02105162_4426.jpg',
    'https:\/\/images.dog.ceo\/breeds\/terrier-wheaten\/n02098105_719.jpg',
    'https:\/\/images.dog.ceo\/breeds\/hound-basset\/n02088238_9922.jpg',
  ],
  status: 'success',
};

const samplePupData = rawJSON.message;
// console.log(samplePupData);
export default samplePupData;
