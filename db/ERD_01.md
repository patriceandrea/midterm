# ERD for midterm project

# Users
Table name: `users`

Columns:
- PK `id` — `SERIAL PRIMARY KEY NOT NULL`
- `name` — `VARCHAR(255)`
- `email` — `VARCHAR(255)`
- `phone` — `VARCHAR(22)`
- `password` — `VARCHAR(255)`
- `admin` — `BOOLEAN`
- `created_at` — `TIMESTAMPZ`

# Menu Categories
Table name: `menu_categories`

Columns:
- PK `id` — `SERIAL PRIMARY KEY NOT NULL`
- `name` - `VARCHAR(255)`

# Menu Items
Table name: `menu_items`

Columns:
- PK `id` — `SERIAL PRIMARY KEY NOT NULL`
- `name` — `VARCHAR(255)`
- `description` — `VARCHAR(255)`
- `price` — `INTEGER DEFAULT 0`
- `modifiers` — `TEXT`
    - e.g. `add_lettuce`, `no_buns`, `fries_for_poutine`
    - each modifier should have its own price and it can be negative
- `photo` — `VARCHAR(255)`
- FK `category` — `SMALLINT REFERENCES menu_categories(id) ON DELETE CASCADE`
- `type` — `TEXT`
    - e.g. vegetarian, gluten-free, spicy
- `active`- `BOOLEAN NOT NULL`

# Orders
Table name: `orders`

Columns:
- PK `id` — `SERIAL PRIMARY KEY NOT NULL`
- FK `user_id` — `INTEGER REFERENCES users(id) ON DELETE CASCADE`
- `comments` — `VARCHAR(255)`
- `created_at` — `TIMESTAMPZ`
- `ready_at` — `TIMESTAMPZ`
- `status` — `VARCHAR(255)`
- `subtotal` — `INTEGER`
- `taxes` — `INTEGER`
- `total_price` — `INTEGER`
- `rating` — `SMALLINT`

# Order Items
Table name: `order_items`

Columns:
- PK `id` — `SERIAL PRIMARY KEY NOT NULL`
- FK `order_id` — `INTEGER REFERENCES orders(id) ON DELETE CASCADE`
- `item` — `TEXT` (JSON object stringified)

---

## Template for JSON object representing a menu item

```jsx
{
	name: 'Burger',
	price: '1299',
	modifiers: {
		add_lettuce: 0.25,
		no_buns: -0.50,
		swap_fries_poutine: 2.75
	}
	options: {
		vegetarian: false,
		gluten-free: false,
		spicy: true
	}
}
```
