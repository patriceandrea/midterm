$(document).ready(() => {

  // Load all pending orders from database
  const loadPendingOrders = () => {
    $.ajax('/admin/orders', { method: 'GET' })
      .then((orders) => renderOrders(orders))
      .catch((err) => console.error('query error', err.stack));
  };
  loadPendingOrders();

  // Takes order data and returns HTML to be rendered to the admin page
  const createOrderElement = (order) => $(`<p>${Object.keys(order)}</p>`);

  const renderOrders = (orders) => {
    orders
      .map((order) => createOrderElement(order))
      .forEach((orderElement) => $('#main-content').prepend(orderElement));
  };

});
