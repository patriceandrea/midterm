$(document).ready(() => {

  const loadMenu = () => {
    $.ajax('/menu', { method: 'GET' })
      .then((menuItems) => renderMenu(menuItems))
      .catch((err) => console.error('query error', err.stack));
  };
  loadMenu();

  const createMenuElement = (menuItem) => {
    // FOR DEVELOPMENT
    // KEYS OF menuItem: id, name, description, price, modifiers, photo, category, type, active, category_name

    // TODO -- consider if there is a more appropriate solution to the URL issue than slicing it

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
      </div>`);
    return $menuItem;
  };

  const createCategoryElement = (category, menuItems) => {
    let $menuItems = [];

    for (let menuItem of menuItems) {
      $menuItems.push(createMenuElement(menuItem));
    }

    console.log('$menuItems');
    $menuItems.forEach(x => {
      // TODO GONZO
      console.log('0:', x[0]);
      console.log('1:', x[2]);
    });

    // $menuItems = $menuItems.map((x) => x.html());
    // TODO GONZO
    const $menuCategory = $(`
    <div class="menu-category">
    <h2>${category}</h2>

    <div class="category-cards">
    </div>
    `);
    return $menuCategory;
  };

  const renderMenu = (menuItems) => {
    // FOR DEVELOPMENT
    // KEYS OF menuItem: id, name, description, price, modifiers, photo, category, type, active, category_name

    const categories = menuItems.map(x => [ parseInt(x.category), x.category_name ]);
    const categoryList = [...new Set(categories.map(x => x[1]))];

    const menuItemsByCategory = {};

    for (let category of categoryList) {
      menuItemsByCategory[category] = menuItems.filter((x) => x.category_name === category);
    }

    for (let category in menuItemsByCategory) {
      $('#menu').append(createCategoryElement(category, menuItemsByCategory[category]));
    }


    // menuItems
    //   .map(menuItemData => createMenuElement(menuItemData))
    //   .forEach(menuElement => $('#menu').prepend(menuElement));
  };
});
