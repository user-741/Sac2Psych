// Select all the card elements
const cards = document.querySelectorAll('.card');

// Initialize current card index
let currentCardIndex = 0;

// Show the current card and hide the others
function showCurrentCard() {
  cards.forEach((card, index) => {
    if (index === currentCardIndex) {
      card.style.display = 'block';
    } else {
      card.style.display = 'none';
    }
  });
}

// Show the first card initially
showCurrentCard();

// Add event listeners to each card
cards.forEach(card => {
  // Select the question and answer elements
  const question = card.querySelector('.card-question');
  const answer = card.querySelector('.card-answer');
  
  // Add event listener to show answer button
  const showAnswerBtn = card.querySelector('.card-buttons button:nth-child(2)');
  showAnswerBtn.addEventListener('click', () => {
    card.classList.add('card-show-answer');
  });
  
  // Add event listener to skip button
  const skipBtn = card.querySelector('.card-buttons button:nth-child(1)');
  skipBtn.addEventListener('click', () => {
    currentCardIndex++;
    if (currentCardIndex < cards.length) {
      showCurrentCard();
    }
  });
  
  // Add event listener to reset card after animation finishes
  card.addEventListener('animationend', () => {
    if (card.classList.contains('card-show-answer')) {
      question.style.display = 'none';
      answer.style.display = 'block';
    } else if (card.classList.contains('card-skip')) {
      card.remove();
      cards.forEach((card, index) => {
        if (index >= currentCardIndex) {
          currentCardIndex = index;
          return;
        }
      });
      showCurrentCard();
    }
    card.classList.remove('card-show-answer');
    card.classList.remove('card-skip');
  });
  
  // Function to rate the card difficulty
  function rateCard(difficulty) {
    // TODO: Implement rating system
  }
  
  // Add event listeners to difficulty rating buttons
  const rateEasyBtn = card.querySelector('.card-buttons button:nth-child(3)');
  rateEasyBtn.addEventListener('click', () => {
    rateCard('easy');
    currentCardIndex++;
    if (currentCardIndex < cards.length) {
      showCurrentCard();
    }
  });
  
  const rateHardBtn = card.querySelector('.card-buttons button:nth-child(4)');
  rateHardBtn.addEventListener('click', () => {
    rateCard('hard');
    currentCardIndex++;
    if (currentCardIndex < cards.length) {
      showCurrentCard();
    }
  });
});