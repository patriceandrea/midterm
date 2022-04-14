$(document).ready(() => {

  // Load all pending orders from database
  const loadPendingOrders = () => {
    $.ajax('/admin/orders', { method: 'GET' })
      .then((orders) => renderOrders(orders))
      .catch((err) => console.error('query error', err.stack));
  };
  loadPendingOrders();

  // Takes order data and returns HTML to be rendered to the admin page
  const createOrderElement = (order) => $(`
    <div class="d-flex order">
      <div class="col-1 order-id">
        <div>${order.id}</div>
      </div>
      <div class="col-2 order-userID">
        <div>${order.user_id}</div>
      </div>
      <div class="col-2 order-createdAt">
        <div>${order.created_at}</div>
      </div>
      <div class="col-5 order-comments">
        <div>${order.comments}</div>
      </div>
      <div class="col-3 order-total">
        <div>${order.total_price}</div>
      </div>
    </div>`
  );

  const renderOrders = (orders) => {
    orders
      .map((order) => createOrderElement(order))
      .forEach((orderElement) => $('#main-content').append(orderElement));
  };

});
