// --- Countdown Timer Functionality ---

// Set the date we're counting down to (Dec 14, 2024 at 1:00 PM)
const countdownDate = new Date("Dec 14, 2024 13:00:00").getTime();

// Update the count down every 1 second
const x = setInterval(function() {

    // Get today's date and time
    const now = new Date().getTime();

    // Find the distance between now and the count down date
    const distance = countdownDate - now;

    // Time calculations for days, hours, minutes and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Display the result in the element with id="countdown"
    document.getElementById("countdown").innerHTML = 
        days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

    // If the count down is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").innerHTML = "PARTY TIME!";
    }
}, 1000);

// --- Gift Suggestion Toggle Functionality ---

const giftButton = document.getElementById('gift-info');
const suggestionText = document.getElementById('suggestion-text');

// Set the text content for the suggestion
suggestionText.textContent = "Your presence is the only gift we need! If you insist, a book for Zavier's growing library would be wonderful.";

// Add an event listener to the button
giftButton.addEventListener('click', function() {
    // Toggle the 'hidden' class on the suggestion text element
    suggestionText.classList.toggle('hidden');
    
    // Optional: Change the button text based on state
    if (suggestionText.classList.contains('hidden')) {
        giftButton.textContent = "Gift Suggestions?";
    } else {
        giftButton.textContent = "Hide Suggestions";
    }
});