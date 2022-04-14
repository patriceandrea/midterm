$(document).ready(function () {

  const loadMenu = () => {
    $.ajax('/menu', { method: 'GET' })
      .then((menuItems) => renderMenu(menuItems))
      .catch(err => console.error('query error', err.stack));
  };
  loadMenu();

  const createMenuElement = (menuItem) => {
    // FOR DEVELOPMENT: LIST OF THE KEYS OF menuItem
    // id,name,description,price,modifiers,photo,category,type,active

    // TODO -- consider if there is a more appropriate solution to the URL issue than slicing it
    //

    const $menuItem = $(`
      <img src="${menuItem.photo.slice(4)}" class="card-img-top" alt="Food pic" style="width:250px">
      <div class="card-body">
        <h5 class="card-title">${menuItem.name}</h5>
        <p class="card-text">${menuItem.description} </p>
        <div class="icon-row">
          <i class="fa-regular fa-salad"></i>
          <i class="fa-regular fa-pepper-hot"></i>
        </div>
        <div class="d-grid gap-2">
          <button type="button" class="btn btn-outline-dark btn-sm">Add to Cart</button>
        </div>
      </div>
        `);

    return $menuItem;
  };

  const renderMenu = (menuItems) => {
    menuItems
      .map(menuItemData => createMenuElement(menuItemData))
      .forEach(menuElement => $('#menu').prepend(menuElement));
  };




});
//   const createMenuCategoryElement = (categoryItem) => {
//     const $categoryItem = $(`
// <p>${Object.keys(categoryItem)}</p>
//       `);
//     return $categoryItem;
//   };
