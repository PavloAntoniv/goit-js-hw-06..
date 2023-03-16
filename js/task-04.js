const counter = document.querySelector('#counter');
const counterValue = document.querySelector('#value');
let currentValue = 0;

const increment = () => {
currentValue += 1;
counterValue.textContent = currentValue;
}

const decrement = () => {
currentValue -= 1;
counterValue.textContent = currentValue;
}

counter.addEventListener('click', (event) => {
const action = event.target.dataset.action;
if (action === 'increment') {
increment();
} else if (action === 'decrement') {
decrement();
}
});