# Data Modeling in MongoDB

## Challenge 1: Solution

Below is one possible solution for modeling the data required for the 3 pages for the e-commerce application

Of note:

- The `wishlist` is an array of product objects
- The `cart` is also an array of product objects
  - Additional property: `quantity`
- Orders is an array of Order Objects
  - Within each order, is an `items` array, each element of which is a product object

The "product objects" all look relatively similar, although each is slightly tailored to it's specific use case in the application.

```json
{
  "name": "Jane Customer",
  "email": "jane@example.com",
  "phone": "333-555-1212",
  "wishlist": [
    {
      "product_id": 12,
      "name": "Car",
      "description": "Motorized, drives me to work",
      "price": 200.00
    }
  ],
  "cart": [
    {
      "product_id": 12,
      "quantity": 7,
      "name": "Bread",
      "description": "Turns into toast",
      "price": 2.00
    }
  ],
  "orders": [
    {
      "order_id": 1,
      "date": "2021-10-31",
      "items": [
        {
          "name": "Shirt",
          "quantity": 2,
          "description": "Keeps me warm!",
          "price": 20.00
        },
        {},
        {}
      ]
    }
  ]
}
```

## Raw Document

[customers.json](customers.json)
