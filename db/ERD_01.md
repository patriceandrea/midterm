# ERD for midterm project

# Users

- PK `id` — `SERIAL PRIMARY KEY NOT NULL`
- `name` — `VARCHAR(255)`
- `email` — `VARCHAR(255)`
- `phone` — `VARCHAR(22)`
- `password` — `VARCHAR(255)`
- `admin` — `BOOLEAN`
- `created_at` — `TIMESTAMPZ`

# Menu Items

- PK `id` — `SERIAL PRIMARY KEY NOT NULL`
- `name` — `VARCHAR(255)`
- `description` — `VARCHAR(255)`
- `price` — `INTEGER`
- `modifiers` — `TEXT`
    - e.g. `add_lettuce`, `no_buns`, `fries_for_poutine`
    - each modifier should have its own price and it can be negative
- `photo` — `VARCHAR(255)`
- `category` — `SMALLINT`
- `status` — `TEXT`
    - e.g. vegetarian, gluten-free, spicy

# Orders

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
