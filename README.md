# Data Modeling in MongoDB

## Challenge 2: Solution

Below is one possible solution for modeling the data required for the 3 pages for the e-commerce application

### customers.json

- Linking out to the items in the cart. Because the price and quantity on hand change frequently, it's safer to make this a reference.
- We can still use the summary information in this object to draw the cart icon
- Wishlist is mainly unchanged, but it does carry a reference to the product so we can let the user dig in for more information
- Notice the new `last_5_orders` property
  - We use this, with some knowingly duplicated data, as a way to service the primary use case, and allow for fetching the full set of orders on demand

```json
{
  "name": "Jane Smith",
  "email": "jane@example.com",
  "phone": "333-555-1212",
  "cart": {
    "items_in_cart": 3,
    "runningTotal": 325.00,
    "items": [
      {
        "quantity": 2,
        "product": ObjectId(111)
      },
      {
        "quantity": 1,
        "product": ObjectId(222)
      }
    ]
  },
  "wishlist": [
    {
      "product_id": ObjectId(12),
      "name": "Toaster",
      "description": "makes toast",
      "price": 200.00
    },
    {},
    {}
  ],
  "last_5_orders": [
    {
      "order_id": 1,
      "date": "2021-10-31",
      "items": [
        {
          "product_id": ObjectId(222),
          "quantity": 1,
          "product": {
            "name": "Toaster",
            "description": "makes toast",
            "price": 200.00
          },
          {},
          {}
        ]
      }
    ]
  }
```

### products.json

New collection: `products`

```json
{
  "product_id": ObjectId(12),
  "name": "Toaster",
  "description": "makes toast",
  "price": 200.00,
  "shipping_cost": 10.00,
  "in_stock": 100000,
  "options": [
    {
      "colors": [
        "Silver",
        "Black"
      ]
    }
  ]
}
```

### orders.json

New collection: `orders`

- Note that although we link to the product, we also store the data from the product
- Duplication ... yes.
  - We know that the product price may change, BUT, at the time of the order, this was the price, so it's ok to store all information here
  - It's a faster lookup for non-volatile data. No need to re-fetch

```json
{
  "order_id": 12,
  "customer_id": ObjectId(123),
  "date": 2021-10-31,
  "items": [
    {
      "product_id": ObjectId(111),
      "quantity": 1,
      "product": {
        "name": "Toaster",
        "description": "makes toast",
        "price": 200.00
      }
    },
    {},
    {}
  ]
}
```

## Raw Documents

[customers.json](customers.json)

[products.json](products.json)

[orders.json](orders.json)
