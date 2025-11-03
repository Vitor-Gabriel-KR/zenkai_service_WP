const navToggle = document.querySelector('.nav__toggle');
const navMenu = document.querySelector('.nav__menu');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

document.querySelectorAll('.nav__link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
    });
});

window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
    this.reset();
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

emailjs.init('service_38lfzb8'); 

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    emailjs.sendForm('service_38lfzb8', 'template_0f85smk', this)
        .then(function() {
            alert('Mensagem enviada com sucesso! Entrarei em contato em breve.');
            document.getElementById('contactForm').reset();
        }, function(error) {
            alert('Falha ao enviar mensagem. Tente novamente ou entre em contato diretamente por email.');
            console.log('FAILED...', error);
        });
});

document.getElementById('message').addEventListener('input', function() {
    const charCount = this.value.length;
    document.querySelector('.char-count').textContent = `${charCount}/500`;
});