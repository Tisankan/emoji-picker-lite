document.addEventListener('DOMContentLoaded', function () {
    const emojiInput = document.getElementById('emoji-input');
    const emojiPicker = document.querySelector('.emoji-picker');

    // Smileys & Emotion
    const smileysAndEmotions = [
        '😀', '😃', '😄', '😁', '😆', '😅', '😂', '🤣', '😊', '😇',
        '😍', '🤩', '😘', '😗', '😚', '😋', '😜', '😝', '😎', '😏'
    ];

    // People & Body
    const peopleAndBody = [
        '👶', '👧', '🧒', '👦', '👩', '🧑', '👨', '👵', '🧓', '👴',
        '👲', '👳', '🧕', '👮', '👷', '💂', '🕵️', '👩‍⚕️', '👨‍⚕️', '👩‍🌾'
    ];

    // Animals & Nature
    const animalsAndNature = [
        '🐶', '🐱', '🐭', '🐹', '🐰', '🦊', '🦝', '🐻', '🐼', '🦄',
        '🐴', '🐎', '🦌', '🐮', '🐷', '🐗', '🐯', '🐨', '🐘', '🦏'
    ];

    // Food & Drink
    const foodAndDrink = [
        '🍇', '🍈', '🍉', '🍊', '🍋', '🍌', '🍍', '🍎', '🍏', '🍐',
        '🍑', '🍒', '🍓', '🥝', '🍅', '🍆', '🥑', '🥒', '🌶️', '🌽'
    ];

    // Activities
    const activities = [
        '🎪', '🎭', '🎨', '🎰', '🚣', '🏇', '🚴', '🎯', '🎲', '🎳',
        '🎮', '🎰', '🚁', '✈️', '🛳️', '🚀', '🛸', '🛰️', '🚂', '🚆'
    ];

    // Function to display the emoji picker
    function showEmojiPicker() {
        emojiPicker.style.display = 'block';
    }

    // Function to hide the emoji picker
    function hideEmojiPicker() {
        emojiPicker.style.display = 'none';
    }

    // Function to insert selected emoji into the input
    function insertEmoji(emoji) {
        emojiInput.value += emoji;
        hideEmojiPicker();
    }

    // Dynamically create emoji buttons for each category
    function createEmojiButtons(category, emojis) {
        const categoryHeader = document.createElement('div');
        categoryHeader.innerText = category;
        categoryHeader.classList.add('category-header');
        emojiPicker.appendChild(categoryHeader);

        emojis.forEach(emoji => {
            const emojiButton = document.createElement('button');
            emojiButton.innerHTML = emoji;
            emojiButton.addEventListener('click', () => insertEmoji(emoji));
            emojiPicker.appendChild(emojiButton);
        });
    }

    // Create buttons for each category
    createEmojiButtons('Smileys & Emotion', smileysAndEmotions);
    createEmojiButtons('People & Body', peopleAndBody);
    createEmojiButtons('Animals & Nature', animalsAndNature);
    createEmojiButtons('Food & Drink', foodAndDrink);
    createEmojiButtons('Activities', activities);

    // Show/hide emoji picker on input focus/blur
    emojiInput.addEventListener('focus', showEmojiPicker);
    emojiInput.addEventListener('blur', hideEmojiPicker);
});
