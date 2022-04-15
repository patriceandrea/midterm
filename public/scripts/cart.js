/////////////////
// IN DEVELOPMENT
// Cart keeps an array of the menu items that have been added to cart

$(document).ready(() => {
  const cart = [];

  $(document).on('click', '.add-to-cart', (event) => {
    cart.push(event.target.id);
    alert(`You selected menu item ${event.target.id}! The cart now has the following items in it: ${cart}`);

  });
});

