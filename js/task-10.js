function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
 const input = document.querySelector('input');
    const createBtn = document.querySelector('[data-create]');
    const destroyBtn = document.querySelector('[data-destroy]');
    const boxes = document.querySelector('#boxes');

    createBtn.addEventListener('click', createBoxes);
    destroyBtn.addEventListener('click', destroyBoxes);

    function createBoxes() {
      const amount = +input.value;
      const elements = [];

      for (let i = 0; i < amount; i += 1) {
        const size = 30 + i * 10;
        const element = `
          <div
            class="box"
            style="
              width: ${size}px;
              height: ${size}px;
              background-color: ${getRandomHexColor()};
            "
          ></div>
        `;
        elements.push(element);
      }

      boxes.insertAdjacentHTML('beforeend', elements.join(''));
    }

    function destroyBoxes() {
      boxes.innerHTML = '';
    }

   