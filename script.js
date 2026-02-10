
const menu = document.getElementById('menu');
const menuButton = document.getElementById('menuButton');

menuButton.addEventListener('click', () => {
  menu.classList.toggle('show');
});



const addParagraphButton = document.getElementById('addParagraphButton');
const paragraphContainer = document.getElementById('paragraphContainer');

addParagraphButton.addEventListener('click', () => {
  const p = document.createElement('p');
  p.textContent = 'Congratulations on learning JavaScript! 🎉';
  paragraphContainer.appendChild(p);
});

const clearParagraphButton = document.getElementById('clearParagraphButton');

clearParagraphButton.addEventListener('click', () => {
  if (paragraphContainer.children.length === 0) {
    alert('No paragraphs to clear.');
    return;
  }

  if (confirm('Remove all paragraphs?')) {
    paragraphContainer.innerHTML = '';
  }
});



const counterDisplay = document.getElementById('counter');
const incrementButton = document.getElementById('incrementButton');
const decrementButton = document.getElementById('decrementButton');
const clearButton = document.getElementById('clearButton');

let counter = 0;
decrementButton.disabled = true;

function updateCounter() {
  counterDisplay.textContent = counter;
  decrementButton.disabled = counter === 0;
}

incrementButton.addEventListener('click', () => {
  counter++;
  updateCounter();
});

decrementButton.addEventListener('click', () => {
  if (counter > 0) counter--;
  updateCounter();
});

clearButton.addEventListener('click', () => {
  if (confirm('Reset counter?')) {
    counter = 0;
    updateCounter();
  }
});



const usernameInput = document.getElementById('username');
const greetButton = document.getElementById('greetButton');
const greetingMessage = document.getElementById('greetingMessage');

function validateName(name) {
  if (!name) return 'Please enter your name.';
  if (!/^[a-zA-Z\s]+$/.test(name)) return 'Letters only please.';
  if (name.length < 2) return 'Name is too short.';
  return '';
}

function showMessage(message, type) {
  greetingMessage.textContent = message;
  greetingMessage.className = type;
}

function greetUser() {
  const name = usernameInput.value.trim();
  const error = validateName(name);

  if (error) {
    showMessage(error, 'error');
  } else {
    showMessage(`Hello, ${name}! 👋`, 'success');
  }
}

greetButton.addEventListener('click', greetUser);

usernameInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') greetUser();
});

usernameInput.addEventListener('input', () => {
  const error = validateName(usernameInput.value.trim());
  if (error) showMessage(error, 'error');
  else greetingMessage.textContent = '';
});
