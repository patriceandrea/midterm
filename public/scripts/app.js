$().ready(() => {
  const loadMenu = () => {
    $.ajax('/menu', { method: 'GET' })
      .then((menuItems) => renderMenu(menuItems))
      .catch((err) => console.error('query error', err.stack));
  };
  loadMenu();

  const createMenuElement = (menuItem) => {
    const $menuItem = $(`
    <div class="card">
      <img src="${menuItem.photo.slice(4)}" class="card-img-top" alt="Food pic" style="width:10rem;height:156px">
      <div class="card-body">
        <div class="card-title">
          <h5>${menuItem.name}</h5>
        </div>
        <div class="card-text">
          ${menuItem.description}
        </div>
        <div class="icon-row">
          <i class="fa-regular fa-salad"></i>
          <i class="fa-regular fa-pepper-hot"></i>
        </div>
        <div class="d-grid gap-2">
          <button type="button" id="${menuItem.id}" class="add-to-cart btn btn-outline-dark btn-sm">Add to Cart</button>
        </div>
      </div>
    </div>`);
    return $menuItem;
  };

  const createCategoryElement = (category, menuItems) => {
    let $menuItems = [];

    for (let menuItem of menuItems) {
      $menuItems.push(createMenuElement(menuItem));
    }

    $menuItems = $menuItems.map((x) => x[0].outerHTML);

    const $menuCategory = $(`
    <div class="menu-category">
      <h2>${category}</h2>
      <div class="category-cards">
        ${$menuItems.join('')}
      </div>
    </div>
    `);
    return $menuCategory;
  };

  const renderMenu = (menuItems) => {
    const categories = menuItems.map(x => [ parseInt(x.category), x.category_name ]);
    const categoryList = [...new Set(categories.map(x => x[1]))];

    const menuItemsByCategory = {};

    for (let category of categoryList) {
      menuItemsByCategory[category] = menuItems.filter((x) => x.category_name === category);
    }

    for (let category in menuItemsByCategory) {
      $('#menu').append(createCategoryElement(category, menuItemsByCategory[category]));
    }
  };
});
