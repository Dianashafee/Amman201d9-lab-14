// /* global Product, Cart */


'use strict';
var quantity; 
// Set up an empty cart for use on this page.
var cart = new Cart([]);
// On screen load, we call this method to put all of the busmall options
// (the things in the Product.allProducts array) into the drop down list.
function populateForm() {
  //TODO: Add an <option> tag inside the form's select for each product
  var selectElement = document.getElementById('items');
  for (var i=0; i< Product.allProducts.length; i++) {
    var options = document.createElement('option');
    options.textContent = Product.allProducts[i].name;
    selectElement.appendChild(options);
  }
}

function handleSubmit(event) {
  // TODO: Prevent the page from reloading
  // Do all the things ...
  addSelectedItemToCart();
  cart.saveToLocalStorage();
  updateCounter();
  updateCartPreview();
}
// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
  // TODO: get the quantity
  // TODO: using those, add one item to the Cart
  quantity = document.getElementById('quantity').value;
  var item = document.getElementById('items').value;
  cart.addItem(item, quantity);
}
// TODO: Update the cart count in the header nav with the number of items in the Cart
function updateCounter() {
  document.getElementById('itemCount').textContent = cart.items.length;
}
// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // TODO: Add a new element to the cartContents div with that information
// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
var catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);
}
// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();





