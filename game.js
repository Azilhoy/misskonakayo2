document.addEventListener("DOMContentLoaded", function() {
    var randomNumber = Math.floor(Math.random() * 5) + 1; // Generate a random number between 1 and 5
    var submitButton = document.getElementById("submit");
    var guessInput = document.getElementById("guess");
    var messageDiv = document.getElementById("message");
    var messageText = document.getElementById("message-text");

    submitButton.addEventListener("click", function() {
        var userGuess = parseInt(guessInput.value);

        if (userGuess === randomNumber) {
            messageText.innerHTML = "Hi guys!, I'm so proud of y’all sorry if i'm not there sa graduation nyo since I have errands to do. From the endless jokes in our gc to the late-night talks with our life, you've all been a huge part of my life. Whether it was cheering each other on at their things or just hanging out after, those moments are what made my life awesome. I won’t really ask for much. I just want you all to know that I love you guys and will always love y’all hoping to meet you guys soon. Again congratulations to you guys! Will always be main!!";
            messageDiv.style.display = "block";
            messageDiv.style.backgroundColor = "#4CAF50"; // Green color
        } else {
            messageText.innerHTML = "Sorry, that's not correct. Please try again!";
            messageDiv.style.display = "block";
            messageDiv.style.backgroundColor = "#f44336"; // Red color
        }
    });
});
