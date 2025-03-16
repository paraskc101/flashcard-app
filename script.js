const flashcardsContainer = document.getElementById("flashcards-container");
const addCardButton = document.getElementById("addCard");
const questionInput = document.getElementById("question");
const answerInput = document.getElementById("answer");

// Load flashcards from local storage
let flashcards = JSON.parse(localStorage.getItem("flashcards")) || [];

function renderFlashcards() {
    flashcardsContainer.innerHTML = "";
    flashcards.forEach((card, index) => {
        const flashcard = document.createElement("div");
        flashcard.classList.add("card");
        flashcard.innerHTML = `<p>${card.question}</p>`;
        flashcard.addEventListener("click", () => {
            flashcard.innerHTML = flashcard.innerHTML === `<p>${card.question}</p>` 
                ? `<p>${card.answer}</p>` 
                : `<p>${card.question}</p>`;
        });
        flashcardsContainer.appendChild(flashcard);
    });
}

// Add a new flashcard
addCardButton.addEventListener("click", () => {
    const question = questionInput.value.trim();
    const answer = answerInput.value.trim();
    
    if (question && answer) {
        flashcards.push({ question, answer });
        localStorage.setItem("flashcards", JSON.stringify(flashcards));
        renderFlashcards();
        questionInput.value = "";
        answerInput.value = "";
    }
});

// Initial rendering of flashcards
renderFlashcards();
