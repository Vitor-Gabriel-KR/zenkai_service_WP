const navToggle = document.querySelector('.nav__toggle');
const navMenu = document.querySelector('.nav__menu');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });
}

document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
        if (navMenu) navMenu.classList.remove('active');
        if (navToggle) navToggle.classList.remove('active');
    });
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (header) {
        if (window.scrollY > 100) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

const profileCard = document.querySelector('.profile__card');
const modal = document.querySelector('.modal');
const modalClose = document.querySelector('.modal__close');

if (profileCard && modal) {
    profileCard.addEventListener('click', () => {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
}

if (modalClose && modal) {
    modalClose.addEventListener('click', (e) => {
        e.stopPropagation(); 
        modal.classList.remove('active');
        document.body.style.overflow = '';
    });
}

if (modal) {
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            modal.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
}

if (typeof emailjs !== 'undefined') {
    emailjs.init('service_38lfzb8'); 
}

const contactForm = document.getElementById('contactForm');
const messageInput = document.getElementById('message');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault();
        
        // Validação básica do EmailJS carregado de forma assíncrona
        if (typeof emailjs !== 'undefined') {
            emailjs.sendForm('service_38lfzb8', 'template_0f85smk', this)
                .then(function() {
                    alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
                    contactForm.reset();
                    // Reseta o contador de caracteres se ele existir
                    const charCount = document.querySelector('.char-count');
                    if (charCount) charCount.textContent = '0/500';
                }, function(error) {
                    alert('Falha ao enviar mensagem. Tente novamente ou entre em contato diretamente por email.');
                    console.error('FAILED...', error);
                });
        } else {
            alert('Erro no serviço de envio. Por favor, envie diretamente por e-mail.');
        }
    });
}

// Contador de caracteres do campo de mensagem
if (messageInput) {
    messageInput.addEventListener('input', function() {
        const charCount = this.value.length;
        const counterContainer = document.querySelector('.char-count');
        if (counterContainer) {
            counterContainer.textContent = `${charCount}/500`;
        }
    });
}