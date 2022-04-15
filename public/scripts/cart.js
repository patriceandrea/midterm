$().ready(() => {
  const cart = [];

  $().on('click', '.add-to-cart', (event) => {
    cart.push(event.target.id);
    alert(`You selected menu item ${event.target.id}!
    Items in cart: ${cart}`);
  });
});

