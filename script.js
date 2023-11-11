document.getElementById('roll-button').addEventListener('click', function() {
    // Generate a random number between 1 and 6 to simulate a dice roll
    const diceResult = Math.floor(Math.random() * 6) + 1;

    // Display the result on the dice face
    document.getElementById('dice-result').textContent = diceResult;
});
