# LHL MIDTERM REQUIREMENTS

*NOTE: Anything in the Functional Requirements, Display Requirements, and Behaviour sections is considered ‘Core’.*

# FUNCTIONAL REQUIREMENTS

- A web app that:
    - [ ] allows a client to place an order on a restaurant’s website and be notified by SMS when their order is ready to be picked up
    - [ ] gives the restaurant owner an admin view which:
        - [ ] lets them see any currently open orders
        - [ ] lets them trigger an SMS with an updated time
        - [ ] lets them trigger an SMS when the order is ready for pickup
- [ ] Single-page app (SPA) behaviour for customer experience on website

## PROJECT MUST USE

- [ ] ES6 for server-side Node.js code
- [ ] NodeJS
- [ ] Express
  - [ ] RESTful routes
- [ ] One or more CSS or UI frameworks
- [ ] jQuery
- [ ] A CSS preprocessor such as SASS, Stylus, or PostCSS for styling -- or CSS Custom properties and no CSS preprocessor
- [ ] PostgreSQL and `pg` (with promises) for DBMS
- [ ] `git` for version control

# DISPLAY REQUIREMENTS

- [X] Nav bar fixed to the top of the page
- [X] Nav bar has:
    - [X] Logo
    - [X] Login button
    - [X] Register button
    - [X] Cart icon
- [x] Implement distinct colour palettes for the restaurant front-end and the admin console
- [ ] Design logos for the restaurant and the business we are emulating

`/`

- [X] Menu items are grouped by category
- [ ] Above the menu items, there are navigation links that will scroll the user to the section the clicked on

# BEHAVIOUR

- [ ] When customer adds item to cart, a notification is generated using a Bootstrap Toast (https://getbootstrap.com/docs/5.1/components/toasts/)
- [ ] Menu items have 1-2 icons indicating their type (meat, vegetarian, alcohol, etc.), and on hover, they each display a self-descriptive tooltip using Bootstrap Tooltips (https://getbootstrap.com/docs/5.1/components/tooltips/)

`NAVBAR`

- [ ] Cart icon clearly indicates when there is one or more item in the cart
- [ ] Cart icon indicates how many items are in the cart
- If user is logged in:
    - [ ] Displays a greeting message to the user in place of the login & register buttons
- If user is not logged in:
    - [ ] Displays the login & register buttons
- [ ] STRETCH: On hover, use Bootstrap Tooltip to show the number of items in the cart and the cart total.

`GET /`

- [X] Render the restaurant’s homepage with all menu items listed and grouped by category
- [ ] A menu with one button per category allows the user to auto-scroll to that category

### User Login Routes

`GET /user`

- If user is logged in:
  - [ ] Display user's account info
- If user is not logged in:
  - [ ] Redirect to `/login` page with warning banner "You must be logged in to view that page."

`POST /user`

- [ ] If email or phone number is already in use
  - [ ] Responds with a `404 - Something went wrong` error
- [ ] If user ID is not already in use:
  - [ ] Create user using the provided request body

`GET /user/edit`
- [ ] If user is logged in:
  - [ ] Render form for user to edit their account details
- [ ] If user is not logged in:
  - [ ] Redirect to `/login`

`PUT /user/:id`

- [ ] Responds with `404 - Something went wrong` error if the user doesn't exist
- [ ] Updates specific user using the provided request body
  - *We'll start with just allowing the phone number to be updated, and we can expand this if time permits*
- [ ] Renders `/user` to show the updated account info

`GET /login`

- [ ] If user is logged in:
    - [ ] Redirects to homepage `/`
- [ ] If user is not logged in:
    - [ ] Renders customer login page
    - [ ] 'Submit' button triggers data validation and then `POST /login`

`POST /login`

- [ ] If login info is good:
    - [ ] Sets cookie indicating logged in state
    - [ ] Redirects to homepage `/`

`GET /user/new`

- [ ] If user is logged in:
  - [ ] Redirects to homepage `/`
- [ ] If user is not logged in:
  - [ ] Renders user registration page
  - [ ] Submit button triggers `POST /user` route

### Checkout Routes

`GET /menu-item/:id`

- [ ] Renders view page about the menu item
- [ ] Has a link back to homepage `/`

`GET /cart`

- [X] Render the cart view to show
    - [ ] all items currently in the cart
    - [ ] price card with subtotal, taxes, and total
- [ ] Allows customer to add a comment to their order

`POST /cart`

- [ ] Add order to database
- [ ] Redirect to page which
    - [ ] confirms customer’s order
    - [ ] shows a summary of their order
    - [ ] sets the expectation that they will receive updates about their order by SMS
- [ ] call to Twilio API to send order confirmation SMS

### Admin Routes

`GET /admin`

- [ ] If user is logged in as admin:
    - [X] Renders a view that displays the restaurant’s open orders
    - [ ] Has a toggle to display completed orders
- [ ] If user is not logged in:
    - [ ] Redirects to `/admin/login`

`GET /admin/login`

- [ ] If admin is logged in:
- [ ] If admin is not logged in:
  - [ ] Renders admin login page
  - [ ] 'Submit' button triggers data validation and then `POST /admin/login`

`POST /admin/login`

- [ ] If login credentials are good:
    - [ ] Sets cookie indicated logged in state
    - [ ] Redirects to `GET /admin`
- [ ] If login credentials are not good:
    - [ ] Displays an error message without redirecting

`GET /admin/menu-items/`

- [ ] Render the restaurant's menu items, sorted by date added from newest to oldest
- [ ] Each menu item has:
  - [ ] a "View" button which will trigger `GET /admin/menu-items/:id`
  - [ ] an "Edit" button which will trigger `PUT /admin/menu-items/:id`

`GET /admin/menu-items/new`

- [ ] Renders form for creating a new menu item
- [ ] 'Submit' button triggers `POST /admin/menu-items`

`POST /admin/menu-items/`

- [ ] Creates new menu item using the provided request body
- [ ] Renders the new menu item with `GET /admin/menu-items/:id`

`GET /admin/menu-items/:id/edit`

- [ ] Renders form for editing menu item details
- [ ] 'Submit' button triggers `PUT /admin/menu-items/:id`

`PUT /admin/menu-items/:id`

- [ ] Update menu item using the provided request body
- [ ] Renders the updated menu item with `GET /admin/menu-items/:id`

# STRETCH

- [ ] Adding an item to the cart creates a small pop-up element confirming the addition
- [ ] Clicking on the cart icon pulls a side drawer element into the page which shows the cart while still showing the menu behind it
- [ ] Allow customer to rate their last order out of 5 stars on next login
- [ ] Customers can place an order for a future date
- [ ] Hosting (e.g. `heroku`, `netlify`, GitHub Pages, AWS, or Azure)
- [ ] Allow admin to create other admin accounts
- [ ] Improve load times for menu item images
