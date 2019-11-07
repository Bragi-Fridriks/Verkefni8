const ENTER_KEYCODE = 13;

document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.form');
  const items = document.querySelector('.items');

  text.init(form, items);
});

const text = (() => {
  let items;

  function init(_form, _items) {
    items = _items;
    _form.addEventListener('submit', formHandler);

    inputArea = _form.querySelector('.form__input');

    const hlutir = items.getElementsByTagName("li");

    for (let i = 0; i < hlutir.length; i++) {
      const li = hlutir[i].children[2].parentNode;
      hlutir[i].children[0].addEventListener('click', () => finish(hlutir[i]));
      hlutir[i].children[1].addEventListener('click', () => edit(hlutir[i].children[1]));
      hlutir[i].children[2].addEventListener('click', () => deleteItem(li));
    }
  }

  function formHandler(e) {
    e.preventDefault();
    add(inputArea.value);
  }

  // event handler fyrir það að klára færslu
  function finish(e) {
    e.classList.toggle('item--done');
  }

  // event handler fyrir það að breyta færslu
  function edit(e) {
    const parent = e.parentNode;
    const data = e.innerText;
    const buttonElement = parent.querySelector('button');
    parent.removeChild(e);
    const inputElement = document.createElement('input');
    inputElement.classList.add('item__edit');
    inputElement.value = data;
    inputElement.addEventListener('keydown', (e) => {
      if (e.keyCode === ENTER_KEYCODE) commit(inputElement);
    });
    parent.insertBefore(inputElement, buttonElement);
    inputElement.focus();
  }

  // event handler fyrir það að klára að breyta færslu
  function commit(e) {
    const parent = e.parentNode;
    const data = e.value;
    parent.removeChild(e);
    const spanElement = el('span', 'item__text', () => {
      edit(spanElement);
    });
    parent.firstChild.addEventListener('click', () => {
      finish(spanElement);
    });
    spanElement.appendChild(document.createTextNode(data));
    const buttonElement = parent.querySelector('button');
    parent.insertBefore(spanElement, buttonElement);
  }

  // fall sem sér um að bæta við nýju item
  function add(value) {
    if (value.length > 0) {
      items.appendChild(createLi(value));
      inputArea.value = '';
    }
  }

  // event handler til að eyða færslu
  function deleteItem(e) {
    e.remove();
  }

  // hjálparfall til að útbúa element
  function el(type, className, clickHandler) {
    const element = document.createElement(type);
    element.classList.add(className);
    element.addEventListener('click', clickHandler);
    return element;
  }

  // fall til að útbúa li
  function createLi(input) {
    const liElement = el('li', 'item', null);
    const checkboxElement = el('input', 'item__checkbox', () => {
      finish(liElement);
    });
    checkboxElement.setAttribute('type', 'checkbox')
    checkboxElement.appendChild(document.createTextNode(''));
    const spanElement = el('span', 'item__text', () => {
      edit(spanElement)
    });
    spanElement.appendChild(document.createTextNode(input));
    const buttonElement = el('button', 'item__button', () => {
      deleteItem(liElement);
    });
    buttonElement.appendChild(document.createTextNode('Eyða'));
    liElement.appendChild(checkboxElement);
    liElement.appendChild(spanElement);
    liElement.appendChild(buttonElement);
    return liElement;
  }

  return {
    init: init
  }
})();
