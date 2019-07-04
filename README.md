### Bamazon: Customer View

:curly_loop: This node app uses a MySQL Database. Customers are shown all the available products first, then the app prompts users with two messages:

1. The first prompt asks them the ID of the product they would like to buy.
2. The second message asks how many units of the product they would like to buy.

:curly_loop: Once the customer has placed the order, the app checks if the store has enough of the product to meet the customer's request.

* If not, the app logs `Insufficient quantity!`, and then prevent the order from going through, and the user is taken back to the initial prompts of id and amount of the product they want to buy.

* If the store _does_ have enough of the product, the customer's order is fulfilled.
   * SQL database is updated to reflect the remaining quantity.
   * Once the update goes through, the app shows the customer the total cost of their purchase.

![Here is the demo](assets/customer_view.gif)

