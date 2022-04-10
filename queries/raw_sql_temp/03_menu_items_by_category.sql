SELECT items.name, price, c.name
  FROM menu_items AS items
  JOIN menu_categories AS c ON c.id = items.category
 WHERE c.id = 3;
