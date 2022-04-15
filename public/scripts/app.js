$().ready(() => {
  const loadMenu = () => {
    $.ajax('/menu', { method: 'GET' })
      .then((menuItems) => renderMenu(menuItems))
      .catch((err) => console.error('query error', err.stack));
  };
  loadMenu();

  const randInt = (n) => Math.floor(Math.random() * n);

  const randomIconsJoined = () => {
    const icons = [
      '<i class="fa-regular fa-leaf"></i>',
      '<i class="fa-regular fa-salad"></i>',
      '<i class="fa-regular fa-steak"></i>',
      '<i class="fa-regular fa-pepper-hot"></i>',
      '<i class="fa-regular fa-avocado"></i>',
      '<i class="fa-light fa-kiwi-fruit"></i>',
      '<i class="fa-regular fa-burger-cheese"></i>',
      '<i class="fa-regular fa-carrot"></i>',
      '<i class="fa-regular fa-croissant"></i>',
      '<i class="fa-regular fa-egg"></i>',
      '<i class="fa-regular fa-apple-whole"></i>',
      '<i class="fa-regular fa-bagel"></i>',
      '<i class="fa-regular fa-baguette"></i>',
      '<i class="fa-regular fa-bone"></i>',
      '<i class="fa-regular fa-cake-slice"></i>',
      '<i class="fa-regular fa-candy"></i>',
      '<i class="fa-regular fa-candy-cane"></i>',
      '<i class="fa-regular fa-cheese-swiss"></i>',
      '<i class="fa-regular fa-corn"></i>',
      '<i class="fa-regular fa-donut"></i>',
      '<i class="fa-regular fa-drumstick"></i>',
      '<i class="fa-regular fa-egg-fried"></i>',
      '<i class="fa-regular fa-hotdog"></i>',
      '<i class="fa-regular fa-meat"></i>',
      '<i class="fa-regular fa-pancakes"></i>',
      '<i class="fa-regular fa-pizza"></i>',
      '<i class="fa-regular fa-shrimp"></i>',
      '<i class="fa-regular fa-shish-kebab"></i>',
      '<i class="fa-regular fa-sushi-roll"></i>',
      '<i class="fa-regular fa-taco"></i>',
      '<i class="fa-regular fa-turkey"></i>',
      '<i class="fa-regular fa-waffle"></i>',
      '<i class="fa-regular fa-wine-bottle"></i>',
      '<i class="fa-regular fa-wine-glass"></i>',
      '<i class="fa-regular fa-whiskey-glass-ice"></i>'
    ];

    const maxIconsPerRow = 4;
    const iconNum = randInt(maxIconsPerRow);

    const iconResult = Array(iconNum).fill().map((x) => icons[randInt(icons.length)]);
    return iconResult.join('');
  };

  randomIconsJoined();

  const createMenuElement = (menuItem) => {
    const $menuItem = $(`
    <div class="card">
      <img src="${menuItem.photo.slice(4)}" class="card-img-top" alt="Food pic" style="width:9.1rem;height:156px">
      <div class="card-body">
        <div class="card-title">
          <h5>${menuItem.name}</h5>
        </div>
        <div class="card-text">
          ${menuItem.description}
        </div>
        <div class="icon-row">
          ${randomIconsJoined()}
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
    // FOR DEVELOPMENT
    // KEYS OF menuItem: id, name, description, price, modifiers, photo, category, type, active, category_name

    const categories = menuItems.map(x => [parseInt(x.category), x.category_name]);
    const categoryList = [...new Set(categories.map(x => x[1]))];

    const menuItemsByCategory = {};

    for (let category of categoryList) {
      menuItemsByCategory[category] = menuItems.filter((x) => x.category_name === category);
    }

    for (let category in menuItemsByCategory) {
      $('#menu').append(createCategoryElement(category, menuItemsByCategory[category]));
    }

    $(() => {
      $('[data-toggle="tooltip"]').tooltip();
    })


    // menuItems
    //   .map(menuItemData => createMenuElement(menuItemData))
    //   .forEach(menuElement => $('#menu').prepend(menuElement));
  };
});
