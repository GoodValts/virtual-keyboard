// Add keyboard

// Add blocks

const body = document.querySelector('body');

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

// Add values

const keysArr = [
  { id: 'Backquote', valueEn: '`', valueRu: 'ё' },
  { id: 'Digit1', valueEn: '1', valueRu: '1' },
  { id: 'Digit2', valueEn: '2', valueRu: '2' },
  { id: 'Digit3', valueEn: '3', valueRu: '3' },
  { id: 'Digit4', valueEn: '4', valueRu: '4' },
  { id: 'Digit5', valueEn: '5', valueRu: '5' },
  { id: 'Digit6', valueEn: '6', valueRu: '6' },
  { id: 'Digit7', valueEn: '7', valueRu: '7' },
  { id: 'Digit8', valueEn: '8', valueRu: '8' },
  { id: 'Digit9', valueEn: '9', valueRu: '9' },
  { id: 'Digit0', valueEn: '0', valueRu: '0' },
  { id: 'Minus', valueEn: '-', valueRu: '-' },
  { id: 'Equal', valueEn: '=', valueRu: '=' },
  { id: 'Backspace', valueEn: 'BackSpace', valueRu: 'BackSpace' },
  { id: 'Tab', valueEn: 'Tab', valueRu: 'Tab' },
  { id: 'KeyQ', valueEn: 'q', valueRu: 'й' },
  { id: 'KeyW', valueEn: 'w', valueRu: 'ц' },
  { id: 'KeyE', valueEn: 'e', valueRu: 'у' },
  { id: 'KeyR', valueEn: 'r', valueRu: 'к' },
  { id: 'KeyT', valueEn: 't', valueRu: 'е' },
  { id: 'KeyY', valueEn: 'y', valueRu: 'н' },
  { id: 'KeyU', valueEn: 'u', valueRu: 'г' },
  { id: 'KeyI', valueEn: 'i', valueRu: 'ш' },
  { id: 'KeyO', valueEn: 'o', valueRu: 'щ' },
  { id: 'KeyP', valueEn: 'p', valueRu: 'з' },
  { id: 'BracketLeft', valueEn: '[', valueRu: 'х' },
  { id: 'BracketRight', valueEn: ']', valueRu: 'ъ' },
  { id: 'Backslash', valueEn: '\\', valueRu: '\\' },
  { id: 'CapsLock', valueEn: 'Caps', valueRu: 'Caps' },
  { id: 'KeyA', valueEn: 'a', valueRu: 'ф' },
  { id: 'KeyS', valueEn: 's', valueRu: 'ы' },
  { id: 'KeyD', valueEn: 'd', valueRu: 'в' },
  { id: 'KeyF', valueEn: 'f', valueRu: 'а' },
  { id: 'KeyG', valueEn: 'g', valueRu: 'п' },
  { id: 'KeyH', valueEn: 'h', valueRu: 'р' },
  { id: 'KeyJ', valueEn: 'j', valueRu: 'о' },
  { id: 'KeyK', valueEn: 'k', valueRu: 'л' },
  { id: 'KeyL', valueEn: 'l', valueRu: 'д' },
  { id: 'Semicolon', valueEn: ';', valueRu: 'ж' },
  { id: 'Quote', valueEn: '\'', valueRu: 'э' },
  { id: 'Enter', valueEn: 'Enter', valueRu: 'Enter' },
  { id: 'ShiftLeft', valueEn: 'Shift', valueRu: 'Shift' },
  { id: 'KeyZ', valueEn: 'z', valueRu: 'я' },
  { id: 'KeyX', valueEn: 'x', valueRu: 'ч' },
  { id: 'KeyC', valueEn: 'c', valueRu: 'с' },
  { id: 'KeyV', valueEn: 'v', valueRu: 'м' },
  { id: 'KeyB', valueEn: 'b', valueRu: 'и' },
  { id: 'KeyN', valueEn: 'n', valueRu: 'т' },
  { id: 'KeyM', valueEn: 'm', valueRu: 'ь' },
  { id: 'Comma', valueEn: ',', valueRu: 'б' },
  { id: 'Period', valueEn: '.', valueRu: 'ю' },
  { id: 'Slash', valueEn: '/', valueRu: '.' },
  { id: 'ArrowUp', valueEn: '▲', valueRu: '▲' },
  { id: 'ShiftRight', valueEn: 'Shift', valueRu: 'Shift' },
  { id: 'ControlLeft', valueEn: 'Ctrl', valueRu: 'Ctrl' },
  { id: 'MetaLeft', valueEn: '⊞', valueRu: '⊞' },
  { id: 'AltLeft', valueEn: 'Alt', valueRu: 'Alt' },
  { id: 'Space', valueEn: 'RSS Virtual Keyboard', valueRu: 'Виртуальная клавиатура' },
  { id: 'Delete', valueEn: 'Del', valueRu: 'Del' },
  { id: 'AltRight', valueEn: 'Alt', valueRu: 'Alt' },
  { id: 'ArrowLeft', valueEn: '◄', valueRu: '◄' },
  { id: 'ArrowDown', valueEn: '▼', valueRu: '▼' },
  { id: 'Arrowup', valueEn: '►', valueRu: '►' },
  { id: 'ControlRight', valueEn: 'Ctrl', valueRu: 'Ctrl' },
];

let lang = 'En';
// const str = '';
const key = document.querySelectorAll('.keyboard__key');
// const input = document.querySelector('.text__textarea');

function setKeys(language) {
  if (language === 'En') {
    for (let i = 0; i < key.length; i += 1) {
      key[i].innerHTML = keysArr[i].valueEn;
      key[i].id = keysArr[i].id;
    }
  } else if (language === 'Ru') {
    for (let i = 0; i < key.length; i += 1) {
      key[i].innerHTML = keysArr[i].valueRu;
      key[i].id = keysArr[i].id;
    }
  }
}

setKeys(lang);

function changeLanguage(language) {
  if (language === 'Ru') {
    lang = 'En';
    setKeys(language);
  } else {
    lang = 'Ru';
    setKeys(language);
  }
}

// Temp for checking

const cnglng = document.querySelector('.header');
cnglng.addEventListener('click', () => {
  changeLanguage(lang);
});
