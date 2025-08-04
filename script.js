function toggleMenu() {
  const menu = document.getElementById("navMenu");
  menu.classList.toggle("show");
}

// Existing To-Do
function addTodo() {
  const input = document.getElementById('todoInput');
  const list = document.getElementById('todoList');
  if (input.value.trim() !== '') {
    const li = document.createElement('li');
    li.textContent = input.value;
    list.appendChild(li);
    input.value = '';
  }
}

// Existing Event Planner
function addEvent() {
  const input = document.getElementById('eventInput');
  const date = document.getElementById('eventDate');
  const list = document.getElementById('eventList');
  if (input.value.trim() && date.value) {
    const li = document.createElement('li');
    li.textContent = `${date.value}: ${input.value}`;
    list.appendChild(li);
    input.value = '';
    date.value = '';
  }
}

// Existing Secret Letter
function saveSecret() {
  const message = document.getElementById('secretMessage').value;
  document.getElementById('savedSecret').textContent = "Secret Saved 💖: " + message;
}

// Love Game Message
function playGame() {
  const messages = [
    "You're my favorite hello and hardest goodbye 💕",
    "You're the reason I smile every day 😊",
    "Being with you feels like a dream come true 🥰",
    "I love you more than chocolate 🍫❤️"
  ];
  const random = messages[Math.floor(Math.random() * messages.length)];
  document.getElementById('gameMessage').textContent = random;
}
