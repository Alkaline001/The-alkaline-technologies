document.addEventListener('DOMContentLoaded', () => {
    const contactNumbers = document.querySelectorAll('.contact-info span, .footer-contact span');
    contactNumbers.forEach(number => {
        number.addEventListener('click', () => {
            window.location.href = `tel:${number.textContent}`;
        });
    });
});