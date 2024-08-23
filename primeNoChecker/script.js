document.getElementById('checkButton').addEventListener('click', function() {
    // Get the value from the input field
    const number = parseInt(document.getElementById('numberInput').value, 10);
    
    // Validate input
    if (isNaN(number) || number < 2) {
        document.getElementById('resultMessage').textContent = 'Please enter a number greater than 1.';
        return;
    }


    function isPrime(num) {
        if (num <= 1) return false;
        if (num === 2) return true;
        if (num % 2 === 0) return false;

        for (let i = 3; i * i <= num; i += 2) {
            if (num % i === 0) return false;
        }
        return true;
    }

    // Check if the number is prime and update the result message
    if (isPrime(number)) {
        document.getElementById('resultMessage').textContent = `${number} is a prime number.`;
    } else {
        document.getElementById('resultMessage').textContent = `${number} is not a prime number.`;
    }
});
