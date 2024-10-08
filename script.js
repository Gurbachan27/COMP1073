const words = {
    noun: ['The turkey', 'The monkey', 'My teacher', 'The dog'],
    verb: ['sat on', 'danced with', 'saw', 'ate'],
    adjective: ['a funny', 'a scary', 'a slimy', 'a goofy'],
    object: ['fish', 'bug', 'chair', 'ball'],
    place: ['in the park', 'at school', 'on the chair', 'in the soup']
};

let selectedWords = {
    noun: '',
    verb: '',
    adjective: '',
    object: '',
    place: ''
};

const storyDisplay = document.getElementById('stroy-display');
const wordButtons = document.querySelectorAll('.wordbutton');

wordButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.getAttribute('data-categories');
        if (category) {
            const randomWord = words[category][Math.floor(Math.random() * words[category].length)];
            selectedWords[category] = randomWord;

            speakNow(randomWord);
            updateStory();
        }
    });
});

document.getElementById('generate-randm-story').addEventListener('click', generateRandomStory);
