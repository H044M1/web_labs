document.addEventListener("DOMContentLoaded", function () {
    const submitCommentButton = document.getElementById('submit-comment');
    const commentList = document.getElementById('comment-list');

    // Счетчик для уникальных идентификаторов комментариев
    let commentIdCounter = 0;

    submitCommentButton.addEventListener('click', function () {
        const nameInput = document.getElementById('name');
        const commentInput = document.getElementById('comment');

        const name = nameInput.value.trim();
        const comment = commentInput.value.trim();

        if (name && comment) {
            const commentId = `comment-${commentIdCounter++}`; // Генерация уникального ID для комментария
            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');
            commentDiv.setAttribute('data-id', commentId); // Установка атрибута data-id

            commentDiv.innerHTML = `
                <strong>${name}</strong>
                <p>${comment}</p>
                <button class="delete-comment" data-id="${commentId}">Удалить</button>
            `;

            commentList.appendChild(commentDiv);

            // Очистить поля ввода
            nameInput.value = '';
            commentInput.value = '';

            // Добавляем обработчик события для кнопки удаления
            const deleteButton = commentDiv.querySelector('.delete-comment');
            deleteButton.addEventListener('click', function () {
                commentList.removeChild(commentDiv);
            });
        } else {
            alert('Пожалуйста, заполните все поля.');
        }
    });
});
