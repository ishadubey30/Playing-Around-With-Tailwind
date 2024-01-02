import './style.css'

document.addEventListener("DOMContentLoaded" , () => {
const movingButton = document.getElementById('gifts');

// Add an event listener for the click event
movingButton.addEventListener('click', () => {
  // Add additional actions or animations when the button is "clicked"
  alert('Ahhhh Fuck , need to improve my skills!');
});

// Add an event listener for the mousemove event
document.addEventListener('mousemove', (e) => {
    const { clientX, clientY } = e;
  
    const buttonRect = movingButton.getBoundingClientRect();
    const isWithinX = clientX >= buttonRect.left - 40 && clientX <= buttonRect.right + 40;
    const isWithinY = clientY >= buttonRect.top - 40 && clientY <= buttonRect.bottom + 40;
  
    if (isWithinX && isWithinY) {
      // Adjust the offset to your desired value
      const offsetX = getRandomInt(-150, 150);
      const offsetY = getRandomInt(-250, 150);
  
      const newTransformValue = `translate(${offsetX}px, ${offsetY}px)`;
      movingButton.style.transform = newTransformValue;
    }
  
    function getRandomInt(min, max) {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  });

  const YouWishButton =  document.getElementById("uwish")
  YouWishButton.addEventListener("click" , ()=>{
    window.location.href = 'Youwish/wish.html'
  })
})