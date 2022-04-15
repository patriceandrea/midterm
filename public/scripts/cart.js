$().ready(() => {
  const cart = [];

  $(document).on('click', '.add-to-cart', (event) => {
    cart.push(event.target.id);
    const orderNotif = new bootstrap.Toast($('#liveToast')[0]);
    orderNotif.show();
    alert(`You selected menu item ${event.target.id}!
    Items in cart: ${cart}`);
  });

  $('#cartIcon').on('click', (event) => {
    event.preventDefault();
    window.location = 'http://localhost:8080/cart?items=' + cart.join();
  });
});

