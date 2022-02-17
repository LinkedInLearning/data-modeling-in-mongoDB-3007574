# Data Modeling in MongoDB

## Challenge 3

We've modeled out the e-commerce site in JSON with some sample data. It's time to turn this into a real ERD, Schema, and write some code.

### Tasks

- Create a visual representation (an ERD) of your data models using a tool such as Moon Modeler or {H}ackolade
- Produce the JSON Schema for your models from the modeling tool.
- Optional: Create data models with proper reference links and subdocuments with Mongoose (JavaScript developers only)

If you'd like a kickstart, here are the JSON files that we created in our last challenge

- [customers.json](customers.json)
- [products.json](products.json)
- [orders.json](orders.json)

As a visual reminder, here are the pages from our application for you to reference:

### Wish List

A wish list where the users can add products that they’re “keeping an eye on” but aren’t in their cart (yet)

<img src="wireframe-wish-list.png" width="600" />

## Shopping Cart

Contains the items the user intends to purchase, with a running total price.

<img src="wireframe-wish-list.png" width="600" />

### Orders History

Users can browse and view view their previous orders, with the most recent ones showing first.

<img src="wireframe-history.png" width="600" />
