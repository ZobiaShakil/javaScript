
document.addEventListener('DOMContentLoaded', () => {
    // Get references to the elements
    const valueElement = document.getElementById('value');
    const decreaseButton = document.getElementById('decrease');
    const resetButton = document.getElementById('reset');
    const increaseButton = document.getElementById('increase');

    
    let counterValue = 0;

 
    function updateDisplay() {
        valueElement.textContent = counterValue;
      
        if (counterValue < 0) {
            valueElement.classList.add('negative');
        } else {
            valueElement.classList.remove('negative');
        }
    }

   
    decreaseButton.addEventListener('click', () => {
        counterValue--;
        updateDisplay();
    });

  
    resetButton.addEventListener('click', () => {
        counterValue = 0;
        updateDisplay();
    });

    
    increaseButton.addEventListener('click', () => {
        counterValue++;
        updateDisplay();
    });


    updateDisplay();
});
