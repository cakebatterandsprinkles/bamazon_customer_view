DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products(
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(100) NOT NULL UNIQUE,
  department_name VARCHAR(100) NOT NULL,
  price INT default 0,
  stock_quantity INT default 0,
  PRIMARY KEY (id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Wallet", "Accesories", 20, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("MacBook Pro", "Technology", 3000, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fridge", "Technology", 5000, 4);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ceramic Mug", "Kitchen Items", 5, 20);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Coffee", "Food", 6, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Toaster", "Technology", 40, 18);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Lamp", "Home Furniture", 50, 10);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Carrots", "Food", 3, 30);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Sherpa", "Home Furniture", 20, 12);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Knife Set", "Kitchen Items", 100, 10);