// Add keyboard

const body = document.querySelector('body');

console.log(body);

body.insertAdjacentHTML('afterbegin', `<header class="header">
<h1>Virtual keyboard</h1>
</header>
<main class="main">
<section class="text">
  <textarea class="text__textarea" rows="10"></textarea>
</section>
<section class="keyboard">
  <div class="keyboard__row">
    <div class="keyboard__key">\`</div>
    <div class="keyboard__key">1</div>
    <div class="keyboard__key">2</div>
    <div class="keyboard__key">3</div>
    <div class="keyboard__key">4</div>
    <div class="keyboard__key">5</div>
    <div class="keyboard__key">6</div>
    <div class="keyboard__key">7</div>
    <div class="keyboard__key">8</div>
    <div class="keyboard__key">9</div>
    <div class="keyboard__key">0</div>
    <div class="keyboard__key">-</div>
    <div class="keyboard__key">+</div>
    <div class="keyboard__key keyboard__key_backspace">Backspace</div>
  </div>
  <div class="keyboard__row">
    <div class="keyboard__key keyboard__key_tab">Tab</div>
    <div class="keyboard__key">й</div>
    <div class="keyboard__key">у</div>
    <div class="keyboard__key">3</div>
    <div class="keyboard__key">4</div>
    <div class="keyboard__key">5</div>
    <div class="keyboard__key">6</div>
    <div class="keyboard__key">7</div>
    <div class="keyboard__key">8</div>
    <div class="keyboard__key">9</div>
    <div class="keyboard__key">0</div>
    <div class="keyboard__key">-</div>
    <div class="keyboard__key">+</div>
    <div class="keyboard__key keyboard__key_slash">/</div>
  </div>
  <div class="keyboard__row">
    <div class="keyboard__key keyboard__key_caps">Caps</div>
    <div class="keyboard__key">й</div>
    <div class="keyboard__key">у</div>
    <div class="keyboard__key">3</div>
    <div class="keyboard__key">4</div>
    <div class="keyboard__key">5</div>
    <div class="keyboard__key">6</div>
    <div class="keyboard__key">7</div>
    <div class="keyboard__key">8</div>
    <div class="keyboard__key">9</div>
    <div class="keyboard__key">0</div>
    <div class="keyboard__key">-</div>
    <div class="keyboard__key keyboard__key_enter">Enter</div>
  </div>
  <div class="keyboard__row">
    <div class="keyboard__key keyboard__key_left-shift">Shift</div>
    <div class="keyboard__key">й</div>
    <div class="keyboard__key">у</div>
    <div class="keyboard__key">3</div>
    <div class="keyboard__key">4</div>
    <div class="keyboard__key">5</div>
    <div class="keyboard__key">6</div>
    <div class="keyboard__key">7</div>
    <div class="keyboard__key">8</div>
    <div class="keyboard__key">9</div>
    <div class="keyboard__key">0</div>
    <div class="keyboard__key">▲</div>
    <div class="keyboard__key keyboard__key_right-shift">Shift</div>
  </div>
  <div class="keyboard__row">
    <div class="keyboard__key keyboard__key_left-ctrl">Ctrl</div>
    <div class="keyboard__key keyboard__key_left-win">⊞</div>
    <div class="keyboard__key keyboard__key_left-alt">Alt</div>
    <div class="keyboard__key keyboard__key_space">RSS Virtual Keyboard</div>
    <div class="keyboard__key keyboard__key_delete">Del</div>
    <div class="keyboard__key keyboard__key_right-alt">Alt</div>
    <div class="keyboard__key">◄</div>
    <div class="keyboard__key">▼</div>
    <div class="keyboard__key">►</div>
    <div class="keyboard__key keyboard__key_right-ctrl">Ctrl</div>
  </div>
  <div class="keyboard__description">Клавиатура создана в системе Windows. Смена раскладки — Ctrl + Shift</div>
</section>
</main>`);
