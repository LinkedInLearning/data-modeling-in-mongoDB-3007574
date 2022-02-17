# Data Modeling in MongoDB

## Challenge 1

You will be creating the data model for an e-commerce website. Specifically, we'll be modeling the user, and the data required by the application to service the following 3 pages:

### Wish List

A wish list where the users can add products that they’re “keeping an eye on” but aren’t in their cart (yet)

<img src="wireframe-wish-list.png" width="600" />

## Shopping Cart

Contains the items the user intends to purchase, with a running total price.

<img src="wireframe-wish-list.png" width="600" />

### Orders History

Users can browse and view view their previous orders, with the most recent ones showing first.

<img src="wireframe-history.png" width="600" />

## Tasks

- Create 1 Customer Collection Model to service all 3 pages
- Provide your solution in JSON format
- Your model should include sample data, as shown below

> Example

```json
Car
{
  year: 1986,
  make: “Toyota”,
  model: “Celica”,
  trim: “GT”
  transmission: “Manual”,
  color: “Black”,
  options: [ “Louvers”, “Fuzzy Dice”, “Shag Carpet” ]
}
```
