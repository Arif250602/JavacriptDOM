var list = document.querySelector('#book-list ul');

list.addEventListener('click', function (e) {
 if (e.target.className == 'delete') {
  const li = e.target.parentElement;
  list.removeChild(li);
 }
})

const addBook = document.forms['add-book'];

addBook.addEventListener('submit', function (e) {
 e.preventDefault();
 const value = addBook.querySelector('input[type="text"]').value;
 const li = document.createElement('li');
 const name = document.createElement('span');
 const deleteBtn = document.createElement('span');

 name.textContent = value;
 deleteBtn.textContent = 'delete';

 name.classList.add('name');
 deleteBtn.classList.add('delete');



 li.appendChild(name);
 li.appendChild(deleteBtn);
 list.appendChild(li);
})