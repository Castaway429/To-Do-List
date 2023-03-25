const Addbtn = document.getElementById("btn");
const input = document.getElementById("task");
const ul = document.getElementById("mylist");
let tasks = [];


if (localStorage.getItem('tasks')) {
  tasks = JSON.parse(localStorage.getItem('tasks'));
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = task;
    ul.appendChild(li);
  li.addEventListener('click', () => {
    li.remove();
    tasks.splice(tasks.indexOf(task), 1);
    localStorage.setItem('tasks', JSON.stringify(tasks));
});
});
}

Addbtn.addEventListener('click', () => {
  if (input.value === "") {
  alert('Enter a valid task please!');
} else {
  const li = document.createElement('li');
  li.textContent = input.value;
  ul.appendChild(li);
  li.addEventListener('click', () => {
  li.remove();
  tasks.splice(tasks.indexOf(input.value), 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
});
  tasks.push(input.value);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  input.value = "";
}
});