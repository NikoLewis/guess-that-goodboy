# pupparazzi

## MVP

A card layout dog-instagram

- single page (infinite scroll? )
- navbar
- card layout with flexbox
- api request for max random limit is 50

## Stretch Goals

- Responsive design for phones
- Adoption feature
  - this would require setting up an env file as promises and asyn/await

### Plan of attack:

- identify 2 APIs for app

  - petfinder.com - requires hourly tokens and id + secrets
  - https://dog.ceo/dog-api/ - seems to require none of the above
  - https://www.thedogapi.com/ - has a free tier

- setup github remote + netlify deployment for API applications
- after struggling with getting/keeping the adoption API working. I've decided to make the adoption API use/feature a stretch goal; and will be proceeding with the straight forward dog API
- recieved sample data from https://dog.ceo/dog-api/ to play with ( try to get request through postman failed)
  > dog.ceo/api/breeds/image/random/30

> {"message":["https:\/\/images.dog.ceo\/breeds\/corgi-cardigan\/n02113186_741.jpg","https:\/\/images.dog.ceo\/breeds\/terrier-irish\/n02093991_281.jpg","https:\/\/images.dog.ceo\/breeds\/sheepdog-indian\/Himalayan_Sheepdog.jpg","https:\/\/images.dog.ceo\/breeds\/affenpinscher\/n02110627_11875.jpg","https:\/\/images.dog.ceo\/breeds\/stbernard\/n02109525_9345.jpg","https:\/\/images.dog.ceo\/breeds\/collie-border\/n02106166_678.jpg","https:\/\/images.dog.ceo\/breeds\/puggle\/IMG_095543.jpg","https:\/\/images.dog.ceo\/breeds\/boxer\/n02108089_2917.jpg","https:\/\/images.dog.ceo\/breeds\/sheepdog-indian\/Himalayan_Sheepdog.jpg","https:\/\/images.dog.ceo\/breeds\/havanese\/00100trPORTRAIT_00100_BURST20191112123933390_COVER.jpg","https:\/\/images.dog.ceo\/breeds\/greyhound-italian\/n02091032_212.jpg","https:\/\/images.dog.ceo\/breeds\/mix\/Galaxy.jpg","https:\/\/images.dog.ceo\/breeds\/setter-english\/n02100735_2684.jpg","https:\/\/images.dog.ceo\/breeds\/frise-bichon\/jh-ezio-1.jpg","https:\/\/images.dog.ceo\/breeds\/dachshund\/tina.jpg","https:\/\/images.dog.ceo\/breeds\/hound-walker\/n02089867_1452.jpg","https:\/\/images.dog.ceo\/breeds\/hound-ibizan\/n02091244_169.jpg","https:\/\/images.dog.ceo\/breeds\/kuvasz\/n02104029_4463.jpg","https:\/\/images.dog.ceo\/breeds\/terrier-fox\/n02095314_2864.jpg","https:\/\/images.dog.ceo\/breeds\/spitz-indian\/Indian_Spitz.jpg","https:\/\/images.dog.ceo\/breeds\/mastiff-bull\/n02108422_4978.jpg","https:\/\/images.dog.ceo\/breeds\/labrador\/n02099712_5769.jpg","https:\/\/images.dog.ceo\/breeds\/terrier-dandie\/n02096437_2291.jpg","https:\/\/images.dog.ceo\/breeds\/komondor\/n02105505_1024.jpg","https:\/\/images.dog.ceo\/breeds\/mastiff-english\/4.jpg","https:\/\/images.dog.ceo\/breeds\/terrier-american\/n02093428_18993.jpg","https:\/\/images.dog.ceo\/breeds\/keeshond\/n02112350_8251.jpg","https:\/\/images.dog.ceo\/breeds\/malinois\/n02105162_4426.jpg","https:\/\/images.dog.ceo\/breeds\/terrier-wheaten\/n02098105_719.jpg","https:\/\/images.dog.ceo\/breeds\/hound-basset\/n02088238_9922.jpg"],"status":"success"}

- added /modules folder to /src to organize file structure
- looped images from api to screen
- added some basic flex styling for uniformity
- decide what size each img should be?
  - should they be within a 'post' containier so there can be text ?
- _add eventlisteners to all imgs that pops up modal_
- modal with show selected dog image and 4 button choices with dog breeds
- when 1 of 4 buttons is selected:
  -disable all buttons (they will need to be reset to on above) 
  - some graphic to show correct or incorrect 
  - close modal*
  - then leave the gameboard image marked approriately
  - tracked towards win-case
  - border shadowed in red or green and disabled


Requirements
Project Setup
Use Vite to set up the project.
Organize your code into multiple modules for better maintainability.
Set up a clear, concise folder structure for your project, including folders for HTML, CSS, and JavaScript files
Ensure that the folder structure abides by Vite’s folder structure and allows for functionality at the same time
Create a separate JavaScript module dedicated to making the API call.
Use either Fetch or Axios to make the API call to retrieve data from the selected API. Ensure that you use the Async/Await or .then/.catch syntax to handle asynchronous operations.
Data Presentation
Once you fetch data from the API, format it appropriately. Ensure that the data is received in JSON format.
Create a separate JavaScript module for handling the data and rendering it on the webpage.
Use HTML to structure the data in a user-friendly and visually appealing way. You can use tables, lists, cards, or any other suitable layout.
Apply CSS styles to make the data visually appealing. You can use external CSS files or a CSS framework like TailwindCSS.
Functionality
Include user interactions, such as buttons or input fields, to trigger and control the API requests.
Implement error handling to display a user-friendly message in case the API request fails.
Documentation
Provide clear and concise comments in your code to explain its functionality.
Write a README.md file that includes instructions on how to run the project, a brief description of the chosen API and how you used it, and a screenshot of the final application.
Optional API’s
https://dog.ceo/dog-api/
