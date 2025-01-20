// Cards Expansíveis
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
  card.addEventListener('click', () => {
    card.classList.toggle('expanded');
  });
});

// Modal do Currículo
const curriculumModal = document.getElementById("myModal");
const curriculumBtn = document.getElementById("openModal");
const curriculumSpan = document.getElementsByClassName("close")[0];

curriculumBtn.onclick = function() {
  curriculumModal.style.display = "block";
}

curriculumSpan.onclick = function() {
  curriculumModal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == curriculumModal) {
    curriculumModal.style.display = "none";
  }
}

// Funcionalidade do Chatbot (SearchBarAI)
// ... (implementação da SearchBarAI) ...