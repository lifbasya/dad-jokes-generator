const jokeElement = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

async function getJoke() {
    try {
        const response = await fetch("https://icanhazdadjoke.com/", {
            headers: {
                Accept: "application/json"
            }
        });
        const data = await response.json();
        jokeElement.textContent = data.joke;
    } catch (error) {
        jokeElement.textContent = "Oops! Something went wrong. Try again.";
    }
}

jokeBtn.addEventListener("click", getJoke);

// Load first joke when the page loads
getJoke();