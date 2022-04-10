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

# DISPLAY REQUIREMENTS

- [ ] Nav bar fixed to the top of the page
- [ ] Nav bar has:
    - [ ] Logo
    - [ ] Login button
    - [ ] Register button
    - [ ] Cart icon
- [ ] Implement distinct colour palettes for the restaurant front-end and the admin console
- [ ] Design logos for the restaurant and the business we are emulating

`/`

- [ ] Menu items are grouped by category
- [ ] Above the menu items, there are navigation links that will scroll the user to the section the clicked on

# BEHAVIOUR

`NAVBAR`

- [ ] Cart icon clearly indicates when there is one or more item in the cart
- [ ] Cart icon indicates how many items are in the cart
- If user is logged in:
    - [ ] Displays a greeting message to the user in place of the login & register buttons
- If user is not logged in:
    - [ ] Displays the login & register buttons

`GET /`

- [ ] Render the restaurant’s homepage with all menu items listed and grouped by category
- [ ] A menu with one button per category allows the user to auto-scroll to that category

`GET /cart`

- [ ] Render the cart view to show
    - [ ] all items currently in the cart
    - [ ] price card with subtotal, taxes, and total
- [ ] Allows customer to add a comment to their order

`POST /cart`

- [ ] Add order to database
- [ ] Redirect to page which
    - [ ] confirms customer’s order
    - [ ] shows a summary of their order
    - [ ] sets the expectation that they will receive updates about their order by SMS

`GET /login`

- [ ] If user is logged in:
    - [ ] Redirects to `/`
- [ ] If user is not logged in:
    - [ ] Renders customer login page

`POST /login`

- [ ] If login info is good:
    - [ ] Sets cookie indicating logged in state
    - [ ] Redirects to `/`

`GET /admin`

- [ ] If user is logged in as admin:
    - [ ] Renders a view that displays the restaurant’s open orders
    - [ ] Has a toggle to display completed orders
- [ ] If user is not logged in:
    - [ ] Redirects to `/admin/login`

`GET /admin/login`

- [ ] Renders admin login page

`POST /admin/login`

- [ ] If login credentials are good:
    - [ ] Sets cookie indicated logged in state
    - [ ] Redirects to `GET /admin`
- [ ] If login credentials are not good:
    - [ ] Displays an error message without redirecting

# STRETCH

- [ ] Adding an item to the cart creates a small pop-up element confirming the addition
- [ ] Clicking on the cart icon pulls a side drawer element into the page which shows the cart while still showing the menu behind it
- [ ] Allow customer to rate their last order out of 5 stars on next login
