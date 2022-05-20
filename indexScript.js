
let container = document.querySelector(".shoppinglist");

const shoppinglist = document.querySelector("h1");
shoppinglist.style.backgroundColor = "green";
const paragraph = document.createElement("p");
paragraph.textContent = " Click on item list for done item : ";
container.appendChild(paragraph);
const products = document.createElement("ul");
container.appendChild(products);

document.querySelector("#button").addEventListener("click", function () {
  let input = document.querySelector("#inputText");
  const item = document.createElement("li");
  item.style.listStyle = "none";

  item.innerHTML = ' <button onclick="this.parentNode.remove()"> X </button>';

  // create li node
  let itemText = document.createElement("p");

  itemText = document.createTextNode(input.value); // create text node

  if (input.value === "") {
    alert("Adauga un produs !");
  } else {
    products.appendChild(item);
  }

  item.appendChild(itemText); // append text node to li node
  // products.appendChild(item); // append li node to list

  input.value = ""; // clear input

  console.log(itemText);
});
document.querySelector("form").addEventListener("submit", function (event) {
  event.preventDefault();
});
products.addEventListener("click", function (event) {
  event.target.classList.toggle("done");
  console.log(event.target);
});
