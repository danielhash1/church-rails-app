document.addEventListener('DOMContentLoaded', function () {
    // Модальные окна
    const modals = document.querySelectorAll('.modal');
    const closeButtons = document.querySelectorAll('.modal-close');
    const ministryCards = document.querySelectorAll('[data-modal]');

    // Функция для открытия модального окна
    function openModal(id) {
        document.getElementById(id).style.display = 'flex';
    }

    // Функция для закрытия модального окна
    function closeModal() {
        modals.forEach(modal => modal.style.display = 'none');
    }

    // Обработчик кликов по карточкам ministry
    ministryCards.forEach(card => {
        card.addEventListener('click', function () {
            const modalId = this.getAttribute('data-modal');
            openModal(modalId);
        });
    });

    // Обработчик кликов по кнопкам закрытия
    closeButtons.forEach(button => {
        button.addEventListener('click', closeModal);
    });

    // Закрытие модального окна при клике вне его содержимого
    window.addEventListener('click', function (e) {
        if (e.target.classList.contains('modal')) {
            closeModal();
        }
    });
});