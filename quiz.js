// Function to check the user's answer
function checkAnswer() {
    // The correct answer
    const correctAnswer = "4";

    // Get the user's selected answer
    const userAnswer = document.querySelector('input[name="quiz"]:checked')?.value;

    // Get the feedback element
    const feedback = document.getElementById("feedback");

    // Check if an answer was selected
    if (!userAnswer) {
        feedback.textContent = "Please select an answer before submitting!";
        feedback.style.color = "orange"; // Optional: Change feedback color
        return;
    }

    // Compare the user's answer with the correct answer
    if (userAnswer === correctAnswer) {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "green"; // Optional: Change feedback color
    } else {
        feedback.textContent = "That's incorrect. Try again!";
        feedback.style.color = "red"; // Optional: Change feedback color
    }
}

// Add an event listener to the Submit Answer button
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
