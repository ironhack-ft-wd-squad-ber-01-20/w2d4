var $cart = document.querySelector("#cart tbody");
var $calc = document.getElementById("calc");

function updateSubtot($product) {
  // Iteration 1.1
  const unitPrice = $product.querySelector(".pu span").innerText;

  const quantity = $product.querySelector(".qty input").value;

  const subTot = unitPrice * quantity;

  $product.querySelector(".subtot span").innerText = subTot.toFixed(2); // subTot.toFixed(2) is a string

  return subTot; // subTot is a number
}

function calcAll() {
  // Iteration 1.2
  // target all the products
  // for each product, update sub total
  // accumulate the sum of sub totals

  let total = 0;
  // document.getElementsByClassName('product')
  document.querySelectorAll(".product").forEach(function(productNode) {
    total += updateSubtot(productNode);
  });

  console.log(total);
  // update the HTML
  document.querySelector("h2 span").innerText = total;
}
$calc.onclick = calcAll;

// Select all the "Delete" buttons
document.querySelectorAll(".btn-delete").forEach(function(button) {
  button.onclick = deleteProduct;
});

function deleteProduct(event) {
  const tr = event.currentTarget.parentNode.parentNode;
  const tbody = document.getElementsByTagName("tbody")[0];
  tbody.removeChild(tr);
}

const productClone = document.querySelector(".product").cloneNode(true);

function cloneNode(name, price) {
  const clone = productClone.cloneNode(true);

  clone.querySelector(".name span").innerText = name;
  clone.querySelector(".pu span").innerText = price.toFixed(2);

  clone.querySelector("button").onclick = deleteProduct;

  document.querySelector("tbody").appendChild(clone);
}

function createProductNode(name, price) {
  const markup = `
  <td class="name">
    <span>${name}</span>
  </td>

  <td class="pu">$<span>${price.toFixed(2)}</span></td>

  <td class="qty">
    <label>
      <input type="number" value="0" min="0" />
    </label>
  </td>

  <td class="subtot">$<span>0</span></td>

  <td class="rm">
    <button class="btn btn-delete">Delete</button>
  </td>`;

  const productNode = document.createElement("tr");
  productNode.innerHTML = markup;

  productNode.classList.add("product");

  productNode.querySelector("button").onclick = deleteProduct;

  document.querySelector("tbody").appendChild(productNode);
}

document.getElementById("create").onclick = function() {
  // function that creates a product

  const inputs = document.querySelectorAll(".new input");
  // target the product name input
  const productName = inputs[0].value;
  // target the product unit price
  const productPrice = Number(inputs[1].value);

  // create an element with the correct name and price
  // add it to the tbody
  // createProductNode(productName, productPrice);
  cloneNode(productName, productPrice);

  // assign deleteProduct to the delete button of that product

  // clear the inputs
  inputs[0].value = "";
  inputs[1].value = 0;
};
