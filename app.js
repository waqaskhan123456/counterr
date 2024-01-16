let counter = 0; // Initialize counter variable

// Function to update the counter and display it
function updateCounter() {
    document.getElementById("counter").innerText = counter;
}

// Event listener to trigger the incrementCounter function on increment button click
document.getElementById("incrementButton").addEventListener("click", function() {
    counter++;
    updateCounter();
});

// Event listener to trigger the resetCounter function on reset button click
document.getElementById("resetButton").addEventListener("click", function() {
    counter = 0;
    updateCounter();
});

// Event listener to trigger the decrementCounter function on decrement button click
document.getElementById