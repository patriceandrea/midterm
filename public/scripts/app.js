$(document).ready(function() {
  console.log("ready!");

  const loadMenuItems = () => {
    $.ajax('/menu/', { method: 'GET' })
      .then((data) => {
        console.log(data);
      });
  };

  loadMenuItems();

//   const renderMenuItems = function (items) {
//     const $menuContainer = $('.menu-category');
//     $menuContainer.empty();
//     for (let i = 0; i < 2; i++) {
//       let $item = createMenuElement(items[i]);
//       $menuContainer.prepend($item);
//     }

//   };

//   const createMenuElement = function (items) {

//     const MenuCardHTML = `
// <img src="https://via.placeholder.com/250x180.png?text=Food" class="card-img-top" alt="Food pic">
// <div class="card-body">
//   <h5 class="card-title">${items.name}</h5>
//   <p class="card-text">${items.description} </p>
//   <div class="icon-row">
//     <i class="fa-regular fa-salad"></i>
//     <i class="fa-regular fa-pepper-hot"></i>
//   </div>
//   <div class="d-grid gap-2">
//     <button type="button" class="btn btn-outline-dark btn-sm">Add to Cart</button>
//   </div>
// </div>
//     `;

//     return MenuCardHTML;
//   };
});
