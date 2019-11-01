/* If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers.
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="./assets/carousel/mountains.jpeg" />
    <img src="./assets/carousel/computer.jpeg" />
    <img src="./assets/carousel/trees.jpeg" />
    <img src="./assets/carousel/turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/
const imageArray = ["./assets/carousel/mountains.jpeg", "./assets/carousel/computer.jpeg", "./assets/carousel/trees.jpeg", "./assets/carousel/turntable.jpeg"]
const carouselContainer = document.querySelector('.carousel-container')
carouselContainer.appendChild(createCarousel(imageArray))

function createCarousel(arr){
  const divCarousel = document.createElement('div');
  const divLeftBtn = document.createElement('div');
  const divRightBtn = document.createElement('div');
  const img1 = document.createElement('img');
  const img2 = document.createElement('img');
  const img3 = document.createElement('img');
  const img4 = document.createElement('img');

  divCarousel.classList.add('carousel');
  divLeftBtn.classList.add('left-button');
  divRightBtn.classList.add('right-button');

  divCarousel.appendChild(divLeftBtn);
  divCarousel.appendChild(divRightBtn);
  divCarousel.appendChild(img1);
  divCarousel.appendChild(img2);
  divCarousel.appendChild(img3);
  divCarousel.appendChild(img4);

  divLeftBtn.textContent = '<';
  divRightBtn.textContent = '>';
  img1.src = arr[0];
  img2.src = arr[1];
  img3.src = arr[2];
  img4.src = arr[3];

  // divLeftBtn.addEventListener('click', () => {

  // })
  // divRightBtn.addEventListener('click', () => {

  // })
  return divCarousel
}