
const questions = [
  "What is your biggest fear?",
  "If you could have one superpower, what would it be?",
  "What is your happiest memory?",
  "If you could live anywhere in the world, where would it be?",
  "What's your dream job?",
  "If you could meet any historical figure, who would it be?",
  "What's a secret talent you have?",
  "If you could time travel, where would you go?",
  "What's your favorite movie of all time?",
  "What's one thing you can't live without?",
  "If you won a million dollars, what would you do first?",
  "What's a goal you want to achieve this year?"
];

function revealQuestion(clickedBox) {
  // Reset all boxes to black
  document.querySelectorAll(".box").forEach(box => {
      box.classList.remove("clicked");
      box.innerText = "";
  });

  // Set clicked box to white and reveal a random question
  const randomIndex = Math.floor(Math.random() * questions.length);
  clickedBox.innerText = questions[randomIndex];
  clickedBox.classList.add("clicked");
}

