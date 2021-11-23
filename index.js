const divbooks = document.querySelector(".books");
const inputTitle = document.querySelector("#title");
const inputAuthor = document.querySelector("#author");
const addBtn = document.querySelector("#add");

class Book {
  constructor(savedData = []) {
    this.arr = savedData;
  }

  saveData(data) {
    let existing = JSON.parse(localStorage.getItem("book"));
    existing = existing || [];
    this.arr = existing;
    this.arr.push(data);
    localStorage.setItem("book", JSON.stringify(this.arr));
  }

  removeBook = (index) => {
    if (index !== null && index !== undefined) {
      this.arr.splice(index, 1);
      localStorage.setItem("book", JSON.stringify(this.arr));
      this.getData();
    }
  };

  getData() {
    divbooks.innerHTML = "";
    this.arr.forEach((value, index) => {
      divbooks.innerHTML += `
              <div class="books">
              <div class="list-btn">
              <ul class="list">
                  <li class="title">${value.name}</li>
                  <p class="by">by</p>
                  <li class="author">${value.author}</li>
              </ul>
              <button id="remove" onclick="remove(${index});">remove</button>
              </div>
              <hr>
              </div>`;
    });
  }
}
