/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */

$(document).ready(function () {

  loadMenuItems();


  const renderTweets = function (items) {
    const $menuContainer = $('.menu-container');
    $menuContainer.empty();
    for (const item of items) {
      const $item = createMenuElement(item);
      $menuContainer.prepend($item);
    }

  };


  const createMenuElement = function (items) {

    const MenuCardHTML = `
    <div class="card">
      <img src="https://via.placeholder.com/250x180.png?text=Food" class="card-img-top" alt="Food pic">
      <div class="card-body">
        <h5 class="card-title">Card title longer on two lines</h5>
        <p class="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. </p>
        <div class="icon-row">
          <!-- TODO - animation: hover icons &  display descp. w/ BS tooltips-->
          <i class="fa-regular fa-salad"></i>
          <i class="fa-regular fa-pepper-hot"></i>
        </div>
        <div class="d-grid gap-2">
          <button type="button" class="btn btn-outline-dark btn-sm">Add to Cart</button>
        </div>
      </div>
    `;

    return MenuCardHTML;
  };


  function loadMenuItems() {
    $.ajax('/', { method: 'GET' })
      .then(function (data) {
        console.log('Success: ', data);
        $('#tweet-text').val('');
        loadMenuItems(data);
      });
  };



});
