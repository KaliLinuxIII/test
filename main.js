function createButton() {
  let button = document.createElement('button');

  button.innerHTML = 'Click Me';
  button.onclick = createButton;
  button.classList = 'jsButton';

  document.body.appendChild(button);
};
