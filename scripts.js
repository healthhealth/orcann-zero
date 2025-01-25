// Curriculum modal handling
const curriculoModal = document.getElementById('curriculoModal');
const curriculoButton = document.getElementById('curriculoButton');

curriculoButton.addEventListener('click', () => {
    curriculoModal.classList.add('show');
    document.body.style.overflow = 'hidden';
});

// World modal handling
const mundoModal = document.getElementById('mundoModal');
const mundoButton = document.getElementById('mundoButton');

mundoButton.addEventListener('click', () => {
    mundoModal.classList.add('show');
    document.body.style.overflow = 'hidden';
});

// References modal handling
function openReferences(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeReferences(modalId) {
    const modal = document.getElementById(modalId);
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Close references modal when clicking outside
document.querySelectorAll('.modal-backdrop').forEach(modal => {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    });
});

// Card expansion
const cardHeaders = document.querySelectorAll('.card-header');

cardHeaders.forEach(header => {
    header.addEventListener('click', () => {
        const card = header.parentElement;
        card.classList.toggle('expanded');
    });
});

// Modal handling - Legislação
const legislacaoModal = document.getElementById('legislacaoModal');
const legislacaoButton = document.getElementById('legislacaoButton');
const closeLegislacaoModal = document.getElementById('closeLegislacaoModal');

legislacaoButton.addEventListener('click', () => {
    legislacaoModal.classList.add('show');
    document.body.style.overflow = 'hidden';
});

closeLegislacaoModal.addEventListener('click', () => {
    legislacaoModal.classList.remove('show');
    document.body.style.overflow = 'auto';
});

legislacaoModal.addEventListener('click', (e) => {
    if (e.target === legislacaoModal) {
        legislacaoModal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
});

// Modal handling - Agendamento
const modal = document.getElementById('modalBackdrop');
const agendarButton = document.getElementById('agendarButton');
const closeModal = document.getElementById('closeModal');

agendarButton.addEventListener('click', () => {
    modal.classList.add('show');
    document.body.style.overflow = 'hidden';
});

closeModal.addEventListener('click', () => {
    modal.classList.remove('show');
    document.body.style.overflow = 'auto';
});

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
});

// Close modal with Escape key
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        if (modal.classList.contains('show')) {
            modal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
        if (legislacaoModal.classList.contains('show')) {
            legislacaoModal.classList.remove('show');
            document.body.style.overflow = 'auto';
        }
    }
});
