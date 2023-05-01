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
    <div class="keyboard__key"></div>
    <div class="keyboard__key"></div>
    <div class="keyboard__key"></div>
    <div class="keyboard__key"></div>
    <div class="keyboard__key"></div>
    <div class="keyboard__key"></div>
    <div class="keyboard__key"></div>
    <div class="keyboard__key"></div>
    <div class="keyboard__key"></div>
    <div class="keyboard__key"></div>
    <div class="keyboard__key"></div>
    <div class="keyboard__key"></div>
    <div class="keyboard__key"></div>
    <div class="keyboard__key keyboard__key_backspace"></div>
  </div>
  <div class="keyboard__row">
    <div class="keyboard__key keyboard__key_tab"></div>
    <div class="keyboard__key"></div>
    <div class="keyboard__key"></div>
    <div class="keyboard__key"></div>
    <div class="keyboard__key"></div>
    <div class="keyboard__key"></div>
    <div class="keyboard__key"></div>
    <div class="keyboard__key"></div>
    <div class="keyboard__key"></div>
    <div class="keyboard__key"></div>
    <div class="keyboard__key"></div>
    <div class="keyboard__key"></div>
    <div class="keyboard__key"></div>
    <div class="keyboard__key keyboard__key_slash"></div>
  </div>
  <div class="keyboard__row">
    <div class="keyboard__key keyboard__key_caps"></div>
    <div class="keyboard__key"></div>
    <div class="keyboard__key"></div>
    <div class="keyboard__key"></div>
    <div class="keyboard__key"></div>
    <div class="keyboard__key"></div>
    <div class="keyboard__key"></div>
    <div class="keyboard__key"></div>
    <div class="keyboard__key"></div>
    <div class="keyboard__key"></div>
    <div class="keyboard__key"></div>
    <div class="keyboard__key"></div>
    <div class="keyboard__key keyboard__key_enter"></div>
  </div>
  <div class="keyboard__row">
    <div class="keyboard__key keyboard__key_left-shift"></div>
    <div class="keyboard__key"></div>
    <div class="keyboard__key"></div>
    <div class="keyboard__key"></div>
    <div class="keyboard__key"></div>
    <div class="keyboard__key"></div>
    <div class="keyboard__key"></div>
    <div class="keyboard__key"></div>
    <div class="keyboard__key"></div>
    <div class="keyboard__key"></div>
    <div class="keyboard__key"></div>
    <div class="keyboard__key"></div>
    <div class="keyboard__key keyboard__key_right-shift"></div>
  </div>
  <div class="keyboard__row">
    <div class="keyboard__key keyboard__key_left-ctrl"></div>
    <div class="keyboard__key keyboard__key_left-win"></div>
    <div class="keyboard__key keyboard__key_left-alt"></div>
    <div class="keyboard__key keyboard__key_space"></div>
    <div class="keyboard__key keyboard__key_delete"></div>
    <div class="keyboard__key keyboard__key_right-alt"></div>
    <div class="keyboard__key"></div>
    <div class="keyboard__key"></div>
    <div class="keyboard__key"></div>
    <div class="keyboard__key keyboard__key_right-ctrl"></div>
  </div>
  <div class="keyboard__description">Смена раскладки — Ctrl + Shift или клик по Ctrl</div>
  <div class="keyboard__description">Клавиатура создана в системе Windows</div>
</section>
</main>`);

const keysArr = [
  {
    id: 'Backquote', valueEn: '`', valueRu: 'ё', classEn: 'punctuation', classRu: 'letter', shiftValueEn: '~', shiftValueRu: '',
  },
  {
    id: 'Digit1', valueEn: '1', valueRu: '1', classEn: 'digit', classRu: 'digit', shiftValueEn: '!', shiftValueRu: '!',
  },
  {
    id: 'Digit2', valueEn: '2', valueRu: '2', classEn: 'digit', classRu: 'digit', shiftValueEn: '@', shiftValueRu: '"',
  },
  {
    id: 'Digit3', valueEn: '3', valueRu: '3', classEn: 'digit', classRu: 'digit', shiftValueEn: '#', shiftValueRu: '№',
  },
  {
    id: 'Digit4', valueEn: '4', valueRu: '4', classEn: 'digit', classRu: 'digit', shiftValueEn: '$', shiftValueRu: ';',
  },
  {
    id: 'Digit5', valueEn: '5', valueRu: '5', classEn: 'digit', classRu: 'digit', shiftValueEn: '%', shiftValueRu: '%',
  },
  {
    id: 'Digit6', valueEn: '6', valueRu: '6', classEn: 'digit', classRu: 'digit', shiftValueEn: '^', shiftValueRu: ':',
  },
  {
    id: 'Digit7', valueEn: '7', valueRu: '7', classEn: 'digit', classRu: 'digit', shiftValueEn: '&', shiftValueRu: '?',
  },
  {
    id: 'Digit8', valueEn: '8', valueRu: '8', classEn: 'digit', classRu: 'digit', shiftValueEn: '*', shiftValueRu: '*',
  },
  {
    id: 'Digit9', valueEn: '9', valueRu: '9', classEn: 'digit', classRu: 'digit', shiftValueEn: '(', shiftValueRu: '(',
  },
  {
    id: 'Digit0', valueEn: '0', valueRu: '0', classEn: 'digit', classRu: 'digit', shiftValueEn: ')', shiftValueRu: ')',
  },
  {
    id: 'Minus', valueEn: '-', valueRu: '-', classEn: 'digit', classRu: 'digit', shiftValueEn: '_', shiftValueRu: '_',
  },
  {
    id: 'Equal', valueEn: '=', valueRu: '=', classEn: 'digit', classRu: 'digit', shiftValueEn: '+', shiftValueRu: '+',
  },
  {
    id: 'Backspace', valueEn: 'BackSpace', valueRu: 'BackSpace', classEn: 'func', classRu: 'func', shiftValueEn: '', shiftValueRu: '',
  },
  {
    id: 'Tab', valueEn: 'Tab', valueRu: 'Tab', classEn: 'func', classRu: 'func', shiftValueEn: '', shiftValueRu: '',
  },
  {
    id: 'KeyQ', valueEn: 'q', valueRu: 'й', classEn: 'letter', classRu: 'letter', shiftValueEn: '', shiftValueRu: '',
  },
  {
    id: 'KeyW', valueEn: 'w', valueRu: 'ц', classEn: 'letter', classRu: 'letter', shiftValueEn: '', shiftValueRu: '',
  },
  {
    id: 'KeyE', valueEn: 'e', valueRu: 'у', classEn: 'letter', classRu: 'letter', shiftValueEn: '', shiftValueRu: '',
  },
  {
    id: 'KeyR', valueEn: 'r', valueRu: 'к', classEn: 'letter', classRu: 'letter', shiftValueEn: '', shiftValueRu: '',
  },
  {
    id: 'KeyT', valueEn: 't', valueRu: 'е', classEn: 'letter', classRu: 'letter', shiftValueEn: '', shiftValueRu: '',
  },
  {
    id: 'KeyY', valueEn: 'y', valueRu: 'н', classEn: 'letter', classRu: 'letter', shiftValueEn: '', shiftValueRu: '',
  },
  {
    id: 'KeyU', valueEn: 'u', valueRu: 'г', classEn: 'letter', classRu: 'letter', shiftValueEn: '', shiftValueRu: '',
  },
  {
    id: 'KeyI', valueEn: 'i', valueRu: 'ш', classEn: 'letter', classRu: 'letter', shiftValueEn: '', shiftValueRu: '',
  },
  {
    id: 'KeyO', valueEn: 'o', valueRu: 'щ', classEn: 'letter', classRu: 'letter', shiftValueEn: '', shiftValueRu: '',
  },
  {
    id: 'KeyP', valueEn: 'p', valueRu: 'з', classEn: 'letter', classRu: 'letter', shiftValueEn: '', shiftValueRu: '',
  },
  {
    id: 'BracketLeft', valueEn: '[', valueRu: 'х', classEn: 'punctuation', classRu: 'letter', shiftValueEn: '{', shiftValueRu: '',
  },
  {
    id: 'BracketRight', valueEn: ']', valueRu: 'ъ', classEn: 'punctuation', classRu: 'letter', shiftValueEn: '}', shiftValueRu: '',
  },
  {
    id: 'Backslash', valueEn: '\\', valueRu: '\\', classEn: 'punctuation', classRu: 'punctuation', shiftValueEn: '|', shiftValueRu: '/',
  },
  {
    id: 'CapsLock', valueEn: 'Caps', valueRu: 'Caps', classEn: 'func', classRu: 'func', shiftValueEn: '', shiftValueRu: '',
  },
  {
    id: 'KeyA', valueEn: 'a', valueRu: 'ф', classEn: 'letter', classRu: 'letter', shiftValueEn: '', shiftValueRu: '',
  },
  {
    id: 'KeyS', valueEn: 's', valueRu: 'ы', classEn: 'letter', classRu: 'letter', shiftValueEn: '', shiftValueRu: '',
  },
  {
    id: 'KeyD', valueEn: 'd', valueRu: 'в', classEn: 'letter', classRu: 'letter', shiftValueEn: '', shiftValueRu: '',
  },
  {
    id: 'KeyF', valueEn: 'f', valueRu: 'а', classEn: 'letter', classRu: 'letter', shiftValueEn: '', shiftValueRu: '',
  },
  {
    id: 'KeyG', valueEn: 'g', valueRu: 'п', classEn: 'letter', classRu: 'letter', shiftValueEn: '', shiftValueRu: '',
  },
  {
    id: 'KeyH', valueEn: 'h', valueRu: 'р', classEn: 'letter', classRu: 'letter', shiftValueEn: '', shiftValueRu: '',
  },
  {
    id: 'KeyJ', valueEn: 'j', valueRu: 'о', classEn: 'letter', classRu: 'letter', shiftValueEn: '', shiftValueRu: '',
  },
  {
    id: 'KeyK', valueEn: 'k', valueRu: 'л', classEn: 'letter', classRu: 'letter', shiftValueEn: '', shiftValueRu: '',
  },
  {
    id: 'KeyL', valueEn: 'l', valueRu: 'д', classEn: 'letter', classRu: 'letter', shiftValueEn: '', shiftValueRu: '',
  },
  {
    id: 'Semicolon', valueEn: ';', valueRu: 'ж', classEn: 'punctuation', classRu: 'letter', shiftValueEn: ':', shiftValueRu: '',
  },
  {
    id: 'Quote', valueEn: '\'', valueRu: 'э', classEn: 'punctuation', classRu: 'letter', shiftValueEn: '"', shiftValueRu: '',
  },
  {
    id: 'Enter', valueEn: 'Enter', valueRu: 'Enter', classEn: 'func', classRu: 'func', shiftValueEn: '', shiftValueRu: '',
  },
  {
    id: 'ShiftLeft', valueEn: 'Shift', valueRu: 'Shift', classEn: 'func', classRu: 'func', shiftValueEn: '', shiftValueRu: '',
  },
  {
    id: 'KeyZ', valueEn: 'z', valueRu: 'я', classEn: 'letter', classRu: 'letter', shiftValueEn: '', shiftValueRu: '',
  },
  {
    id: 'KeyX', valueEn: 'x', valueRu: 'ч', classEn: 'letter', classRu: 'letter', shiftValueEn: '', shiftValueRu: '',
  },
  {
    id: 'KeyC', valueEn: 'c', valueRu: 'с', classEn: 'letter', classRu: 'letter', shiftValueEn: '', shiftValueRu: '',
  },
  {
    id: 'KeyV', valueEn: 'v', valueRu: 'м', classEn: 'letter', classRu: 'letter', shiftValueEn: '', shiftValueRu: '',
  },
  {
    id: 'KeyB', valueEn: 'b', valueRu: 'и', classEn: 'letter', classRu: 'letter', shiftValueEn: '', shiftValueRu: '',
  },
  {
    id: 'KeyN', valueEn: 'n', valueRu: 'т', classEn: 'letter', classRu: 'letter', shiftValueEn: '', shiftValueRu: '',
  },
  {
    id: 'KeyM', valueEn: 'm', valueRu: 'ь', classEn: 'letter', classRu: 'letter', shiftValueEn: '', shiftValueRu: '',
  },
  {
    id: 'Comma', valueEn: ',', valueRu: 'б', classEn: 'punctuation', classRu: 'letter', shiftValueEn: '<', shiftValueRu: '',
  },
  {
    id: 'Period', valueEn: '.', valueRu: 'ю', classEn: 'punctuation', classRu: 'letter', shiftValueEn: '>', shiftValueRu: '',
  },
  {
    id: 'Slash', valueEn: '/', valueRu: '.', classEn: 'punctuation', classRu: 'punctuation', shiftValueEn: '?', shiftValueRu: ',',
  },
  {
    id: 'ArrowUp', valueEn: '▲', valueRu: '▲', classEn: 'digit', classRu: 'digit', shiftValueEn: '▲', shiftValueRu: '▲',
  },
  {
    id: 'ShiftRight', valueEn: 'Shift', valueRu: 'Shift', classEn: 'func', classRu: 'func', shiftValueEn: '', shiftValueRu: '',
  },
  {
    id: 'ControlLeft', valueEn: 'Ctrl', valueRu: 'Ctrl', classEn: 'func', classRu: 'func', shiftValueEn: '', shiftValueRu: '',
  },
  {
    id: 'MetaLeft', valueEn: '⊞', valueRu: '⊞', classEn: 'func', classRu: 'func', shiftValueEn: '', shiftValueRu: '',
  },
  {
    id: 'AltLeft', valueEn: 'Alt', valueRu: 'Alt', classEn: 'func', classRu: 'func', shiftValueEn: '', shiftValueRu: '',
  },
  {
    id: 'Space', valueEn: 'RSS Virtual Keyboard', valueRu: 'Виртуальная клавиатура', classEn: 'digit', classRu: 'digit', shiftValueEn: 'RSS Virtual Keyboard', shiftValueRu: 'Виртуальная клавиатура',
  },
  {
    id: 'Delete', valueEn: 'Del', valueRu: 'Del', classEn: 'func', classRu: 'func', shiftValueEn: '', shiftValueRu: '',
  },
  {
    id: 'AltRight', valueEn: 'Alt', valueRu: 'Alt', classEn: 'func', classRu: 'func', shiftValueEn: '', shiftValueRu: '',
  },
  {
    id: 'ArrowLeft', valueEn: '◄', valueRu: '◄', classEn: 'digit', classRu: 'digit', shiftValueEn: '◄', shiftValueRu: '◄',
  },
  {
    id: 'ArrowDown', valueEn: '▼', valueRu: '▼', classEn: 'digit', classRu: 'digit', shiftValueEn: '▼', shiftValueRu: '▼',
  },
  {
    id: 'ArrowRight', valueEn: '►', valueRu: '►', classEn: 'digit', classRu: 'digit', shiftValueEn: '►', shiftValueRu: '►',
  },
  {
    id: 'ControlRight', valueEn: 'Ctrl', valueRu: 'Ctrl', classEn: 'func', classRu: 'func', shiftValueEn: '', shiftValueRu: '',
  },
];

let lang = localStorage.getItem('lang');

if (lang !== 'En') {
  if (lang !== 'Ru') {
    lang = 'En';
  }
}

function setLocalStorage() {
  localStorage.setItem('lang', lang);
}

window.addEventListener('beforeunload', setLocalStorage);

let key = document.querySelectorAll('.keyboard__key');

function setKeys(language) {
  if (language === 'Ru') {
    for (let i = 0; i < key.length; i += 1) {
      key[i].innerHTML = keysArr[i].valueRu;
      key[i].id = keysArr[i].id;
      key[i].classList.remove(`${keysArr[i].classEn}`);
      key[i].classList.add(`${keysArr[i].classRu}`);
      key = document.querySelectorAll('.keyboard__key');
    }
  } else {
    lang = 'En';
    for (let i = 0; i < key.length; i += 1) {
      key[i].innerHTML = keysArr[i].valueEn;
      key[i].id = keysArr[i].id;
      key[i].classList.remove(`${keysArr[i].classRu}`);
      key[i].classList.add(`${keysArr[i].classEn}`);
      key = document.querySelectorAll('.keyboard__key');
    }
  }
}

setKeys(lang);

function changeLanguage(language) {
  if (language === 'Ru') {
    lang = 'En';
    setKeys(lang);
  } else {
    lang = 'Ru';
    setKeys(lang);
  }
}

let isCaps = false;
let isShift = false;
let isCtrl = false;

function toUpperCase() {
  key.forEach((el) => {
    if (el.className.includes('letter') === true) {
      el.classList.add('toUpperCase');
    }
  });
}

function toLowerCase() {
  key.forEach((el) => {
    if (el.className.includes('letter') === true) {
      el.classList.remove('toUpperCase');
    }
  });
}

function addShiftValues() {
  for (let i = 0; i < key.length; i += 1) {
    if (lang === 'En') {
      if (key[i].className.includes('punctuation') === true) {
        key[i].innerHTML = keysArr[i].shiftValueEn;
      }
      if (key[i].className.includes('digit') === true) {
        key[i].innerHTML = keysArr[i].shiftValueEn;
      }
    } else if (lang === 'Ru') {
      if (key[i].className.includes('punctuation' || 'digit') === true) {
        key[i].innerHTML = keysArr[i].shiftValueRu;
      }
      if (key[i].className.includes('digit') === true) {
        key[i].innerHTML = keysArr[i].shiftValueRu;
      }
    }
  }
  if (isCaps === false) {
    toUpperCase();
  } else {
    toLowerCase();
  }
  isShift = true;
}

function removeShiftValues() {
  for (let i = 0; i < key.length; i += 1) {
    if (lang === 'En') {
      if (key[i].className.includes('punctuation') === true) {
        key[i].innerHTML = keysArr[i].valueEn;
      }
      if (key[i].className.includes('digit') === true) {
        key[i].innerHTML = keysArr[i].valueEn;
      }
    } else if (lang === 'Ru') {
      if (key[i].className.includes('punctuation' || 'digit') === true) {
        key[i].innerHTML = keysArr[i].valueRu;
      }
      if (key[i].className.includes('digit') === true) {
        key[i].innerHTML = keysArr[i].valueRu;
      }
    }
  }
  if (isCaps === false) {
    toLowerCase();
  } else {
    toUpperCase();
  }
  isShift = false;
}

let str = '';
const input = document.querySelector('.text__textarea');

function pressKey(event) {
  const strStart = str.slice(0, input.selectionStart);
  const keyPressed = document.getElementById(event.code).innerHTML;
  const strEnd = str.slice(input.selectionEnd, str.length);
  if (document.getElementById(event.code).id === 'Space') {
    const space = ' ';
    str = strStart + space + strEnd;
  } else if (document.getElementById(event.code).id === 'Enter') {
    const paragraph = '\n';
    str = strStart + paragraph + strEnd;
  } else if (document.getElementById(event.code).id === 'Tab') {
    const tab = '  ';
    str = strStart + tab + strEnd;
  } else if (document.getElementById(event.code).innerHTML === '&amp;') {
    str = strStart + keysArr[7].shiftValueEn + strEnd;
  } else if (document.getElementById(event.code).innerHTML === '&lt;') {
    str = strStart + keysArr[49].shiftValueEn + strEnd;
  } else if (document.getElementById(event.code).innerHTML === '&gt;') {
    str = strStart + keysArr[50].shiftValueEn + strEnd;
  } else if (document.getElementById(event.code).innerHTML === 'ArrowUp') {
    str = strStart + keysArr[52].shiftValueEn + strEnd;
  } else if (document.getElementById(event.code).innerHTML === 'ArrowDown') {
    str = strStart + keysArr[60].shiftValueEn + strEnd;
  } else if (document.getElementById(event.code).innerHTML === 'ArrowLeft') {
    str = strStart + keysArr[61].shiftValueEn + strEnd;
  } else if (document.getElementById(event.code).innerHTML === 'ArrowRight') {
    str = strStart + keysArr[62].shiftValueEn + strEnd;
  } else {
    if (isCaps === false && isShift === false) {
      str = strStart + keyPressed + str.slice(input.selectionEnd, str.length);
    }
    if (isCaps === true && isShift === false) {
      str = strStart + keyPressed.toUpperCase() + strEnd;
    }
    if (isCaps === false && isShift === true) {
      str = strStart + keyPressed.toUpperCase() + strEnd;
    }
    if (isCaps === true && isShift === true) {
      str = strStart + keyPressed + strEnd;
    }
  }
}

function pressBackspace() {
  if (input.selectionStart === input.selectionEnd) {
    str = str.slice(0, input.selectionStart - 1) + str.slice(input.selectionEnd, str.length);
  } else {
    str = str.slice(0, input.selectionStart) + str.slice(input.selectionEnd, str.length);
  }
}

function pressDelete() {
  if (input.selectionStart === input.selectionEnd) {
    str = str.slice(0, input.selectionStart) + str.slice(input.selectionEnd + 1, str.length);
  } else {
    pressBackspace();
  }
}

function pressCtrl() {
  if (isCaps === true || isShift === true) {
    isCaps = false;
    isShift = false;
    document.getElementById('ShiftLeft').classList.remove('pressed');
    document.getElementById('ShiftRight').classList.remove('pressed');
    document.getElementById('CapsLock').classList.remove('pressed');
  }
  toLowerCase();
  changeLanguage(lang);
}

key.forEach((el) => el.addEventListener('click', () => {
  const strStart = str.slice(0, input.selectionStart);
  const strEnd = str.slice(input.selectionEnd, str.length);
  if (el.className.includes('letter') === true) {
    if (isCaps === false && isShift === false) {
      str = strStart + el.innerHTML + strEnd;
    } else if (isCaps === true && isShift === false) {
      str = strStart + el.innerHTML.toUpperCase() + strEnd;
    } else if (isCaps === true && isShift === true) {
      str = strStart + el.innerHTML + strEnd;
    } else {
      str = strStart + el.innerHTML.toUpperCase() + strEnd;
    }
  } else if (el.className.includes('punctuation') === true) {
    if (el.innerHTML === '&lt;') {
      str = strStart + keysArr[49].shiftValueEn + strEnd;
    } else if (el.innerHTML === '&gt;') {
      str = strStart + keysArr[50].shiftValueEn + strEnd;
    } else {
      str = strStart + el.innerHTML + strEnd;
    }
  } else if (el.className.includes('digit') === true) {
    if (el.id === 'Space') {
      const space = ' ';
      str = strStart + space + strEnd;
    } else if (el.innerHTML === '&amp;') {
      str = strStart + keysArr[7].shiftValueEn + strEnd;
    } else {
      str = strStart + el.innerHTML + strEnd;
    }
  } else if (el.id === 'Backspace') {
    pressBackspace();
  } else if (el.id === 'Tab') {
    const tab = '  ';
    str += strStart + tab + strEnd;
  } else if (el.id === 'CapsLock') {
    if (isCaps === false && isShift === false) {
      toUpperCase();
      isCaps = true;
      document.getElementById('CapsLock').classList.add('pressed');
    } else if (isCaps === true && isShift === false) {
      toLowerCase();
      isCaps = false;
      document.getElementById('CapsLock').classList.remove('pressed');
    } else if (isCaps === false && isShift === true) {
      toLowerCase();
      isCaps = true;
      document.getElementById('CapsLock').classList.add('pressed');
    } else {
      toUpperCase();
      isCaps = false;
      document.getElementById('CapsLock').classList.remove('pressed');
    }
  } else if (el.id === 'Delete') {
    pressDelete();
  } else if (el.id === 'ShiftLeft' || el.id === 'ShiftRight') {
    if (isShift === false) {
      document.getElementById('ShiftLeft').classList.add('pressed');
      document.getElementById('ShiftRight').classList.add('pressed');
      addShiftValues();
      isShift = true;
    } else {
      document.getElementById('ShiftLeft').classList.remove('pressed');
      document.getElementById('ShiftRight').classList.remove('pressed');
      removeShiftValues();
      isShift = false;
    }
  } else if (el.id === 'ControlLeft' || el.id === 'ControlRight') {
    pressCtrl();
  }
  input.value = str;
}));

document.addEventListener('keydown', (event) => {
  event.preventDefault();
  if (document.getElementById(event.code) != null) {
    document.getElementById(event.code).classList.add('pressed');
    if (document.getElementById(event.code).className.includes('func') === true) {
      if (document.getElementById(event.code).id === 'Tab' || document.getElementById(event.code).id === 'Enter') {
        event.preventDefault();
        pressKey(event);
      }
      if (document.getElementById(event.code).id === 'Backspace') {
        pressBackspace();
      } if (document.getElementById(event.code).id === 'CapsLock') {
        if (isCaps === false && isShift === false) {
          toUpperCase();
          isCaps = true;
        } else if (isCaps === true && isShift === false) {
          toLowerCase();
          isCaps = false;
        } else if (isCaps === false && isShift === true) {
          toLowerCase();
          isCaps = true;
        } else if (isCaps === true && isShift === true) {
          toUpperCase();
          isCaps = false;
        }
      } if (document.getElementById(event.code).id === 'Delete') {
        pressDelete();
      }
      if (document.getElementById(event.code).id === 'ShiftLeft' || document.getElementById(event.code).id === 'ShiftRight') {
        event.preventDefault();
        if (isCtrl === true) {
          pressCtrl();
        } else {
          document.getElementById('ShiftLeft').classList.add('pressed');
          document.getElementById('ShiftRight').classList.add('pressed');
          addShiftValues();
          isShift = true;
        }
      }
      if (document.getElementById(event.code).id === 'ControlLeft' || document.getElementById(event.code).id === 'ControlRight') {
        event.preventDefault();
        isCtrl = true;
      }
      if (document.getElementById(event.code).id === 'AltLeft' || document.getElementById(event.code).id === 'AltRight') {
        event.preventDefault();
      }
    } else {
      pressKey(event);
    }
    input.value = str;
  }
});

document.addEventListener('keyup', (event) => {
  event.preventDefault();
  if (document.getElementById(event.code) != null) {
    if (document.getElementById(event.code).id === 'CapsLock') {
      if (isCaps === false) {
        document.getElementById(event.code).classList.remove('pressed');
      }
    } else if (document.getElementById(event.code).id === 'ShiftLeft' || document.getElementById(event.code).id === 'ShiftRight') {
      document.getElementById('ShiftLeft').classList.remove('pressed');
      document.getElementById('ShiftRight').classList.remove('pressed');
      removeShiftValues();
      isShift = false;
    } else if (document.getElementById(event.code).id === 'ControlLeft' || document.getElementById(event.code).id === 'ControlRight') {
      isCtrl = false;
      document.getElementById(event.code).classList.remove('pressed');
    } else {
      document.getElementById(event.code).classList.remove('pressed');
    }
  }
});

function setStr() {
  input.value = str;
  setTimeout(setStr, 10);
}

setStr();
