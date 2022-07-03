//task 1
let button = document.querySelector("#button");
button.addEventListener("click", function () {
  const vote = new XMLHttpRequest();
  vote.onload = function () {
    button.innerText = vote.responseText;
  };
  vote.open("GET", "http://127.0.0.1:5000/vote");
  vote.send();
});

//task 2
const authorsReq = new XMLHttpRequest();
authorsReq.onload = function () {
  let bookList = JSON.parse(authorsReq.responseText);
  let arr = bookList.books;
  console.log(arr);
  for (let i = 0; i < arr.length; i += 1) {
    console.log(arr[i].author);
    let li = document.createElement("li");
    li.innerHTML = arr[i].author;
    let body = document.querySelector("body");
    body.appendChild(li);
  }
};
authorsReq.open("GET", "http://127.0.0.1:5000/authors");
authorsReq.send();
