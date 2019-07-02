//require inquirer, chalk and connection.js file
var inquirer = require("inquirer");
var chalk = require("chalk");
var connection = require("./connection.js");

// make sure it's connected to my local database by a console.log
// display items
connection.connect(function(err) {
    if (err) throw err;
    // console.log("connected as id " + connection.threadId);
    readProducts(displayProducts);
  });

//  write a function that returns the items in the database for the customer to another function
function readProducts(callback) {
    connection.query("SELECT item_id, product_name, price FROM products", function (err, res) {
        if (err) throw err;
        callback(res);
    });
}

// write a function that lists the products to the console
function displayProducts(productList) {
    productList.map(function (item) {
        let option = chalk.red(item.item_id + " | ") + chalk.yellow(item.product_name) + chalk.blue(" | $" + item.price);
        console.log(option);
        return option;
    });
    promptPurchase();
}

// prompt user of the id of the product that they want to buy
function promptPurchase() {
    inquirer.prompt([{
        type: "input",
        message: "What is the product's id that you would like to purchase?",
        name: "productId",
        validate: function(value) {
            if(isNaN(value) === false) {
              return true;
            }
            return false;
          }
    },
    {
        type: "input",
        message: "How many would you like to purchase?",
        name: "howMany",
        validate: function(value) {
            if(isNaN(value) === false) {
              return true;
            }
            return false;
          }
    }
    ]).then(function (response) {
        connection.query("SELECT item_id, product_name, price, stock_quantity FROM products WHERE ?", {item_id : response.productId}, function (err, res) {
            if (err) throw err;
            let chosenName = res[0].product_name;
            let chosenItem = res.filter(function (item) {
                if (item.item_id == response.productId) {
                    return true;
                }
                return false;
            })[0].item_id;
            let chosenAmount = response.howMany;
            let existingAmount = res.filter(function (item) {
                if (item.item_id == response.productId) {
                    return true;
                }
                return false;
            })[0].stock_quantity;
            if (chosenAmount > existingAmount) {
                console.log(chalk.magenta("Insufficient quantity!"));
                promptPurchase();
            } else if (chosenAmount <= existingAmount){
                let totalPrice = chosenAmount * Number(res[0].price);
                console.log(chalk.red("You have purchased " + chosenAmount + " " + chosenName + "\n"));
                // console.log the total price
                console.log(chalk.yellow("The total price is $" + totalPrice + "\n"));
                let leftAmount = existingAmount - chosenAmount;
                // write a function that updates the database after purchase
                connection.query("UPDATE products SET ? WHERE ?", [{
                    stock_quantity: leftAmount
                },
                {
                    item_id : response.productId
                }
            ], function (err, res) {
                if (err) throw err;
            });
            exit();
            }
        });
    });
}

// exit function
function exit(){
    connection.end();
}