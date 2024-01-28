// JavaScript
document.addEventListener('DOMContentLoaded', () => {
  const list = document.querySelector('.list');

  function updateLocalStorage(items) {
    localStorage.setItem('toDoItems', JSON.stringify(items));
  }

  function createToDoItem(itemText) {
    const listItem = document.createElement('li');
    listItem.textContent = itemText;

    const uncheckedImage = document.createElement('div');
    uncheckedImage.classList.add('unchecked-image');
    listItem.appendChild(uncheckedImage);

    const crossButton = document.createElement('button');
    crossButton.textContent = '✖';
    crossButton.classList.add('remove-btn');
    crossButton.addEventListener('click', () => {
      listItem.remove();
      const currentItems = JSON.parse(localStorage.getItem('toDoItems')) || [];
      updateLocalStorage(currentItems.filter(item => item !== itemText));
    });

    listItem.appendChild(crossButton);
    return listItem;
  }

  const storedItems = JSON.parse(localStorage.getItem('toDoItems')) || [];

  storedItems.forEach(itemText => list.appendChild(createToDoItem(itemText)));

  const btn = document.querySelector('.add');
  btn.addEventListener('click', () => {
    const inputText = document.querySelector('.input-text').value.trim();
    if (inputText) {
      const listItem = createToDoItem(inputText);
      list.appendChild(listItem);
      const currentItems = JSON.parse(localStorage.getItem('toDoItems')) || [];
      updateLocalStorage([...currentItems, inputText]);
      document.querySelector('.input-text').value = '';
    }
  });

  // Event listener for marking an item as checked
  list.addEventListener('click', (event) => {
    const listItem = event.target.closest('li');
    if (listItem) {
      listItem.classList.toggle('checked');
      const currentItems = JSON.parse(localStorage.getItem('toDoItems')) || [];
      updateLocalStorage(currentItems);
    }
  });
});
