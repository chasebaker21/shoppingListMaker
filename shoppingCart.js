let shoppingCart = [];
class Items {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

function addItem() {
  // Adds a new object to the shoppingCart array.
  let consumerAdd = prompt("Would you like to add a Product?");
  if (consumerAdd === "yes") {
    const name = prompt("Product name:");
    const price = prompt("Price:");

    product = {
      name,
      price
    };

    shoppingCart.push(product);
    addItem();
  }
}

function removeItem() {
  // Removes an object from the shoppingCart array. This method
  // uses Array.findIndex().
  let consumerRemove = prompt("Would you like to remove a Product?");
  if (consumerRemove === "yes") {
    let chooseItem = prompt("Which Item?");
    let answer = shoppingCart.findIndex(item => {
      return item.name == chooseItem;
    });

    shoppingCart.splice(answer, 1);
  }
}

function editItem() {
  // Edits an object in the shoppingCart array.
  /**
   * @todo need to make this cleaner (prompts and wording)
   */
  let consumerEdit = prompt("Would you like to adjust something?");
  if (consumerEdit === "yes") {
    let chooseItem = prompt("Which Item?");
    let answer = shoppingCart.findIndex(item => {
      item.name == chooseItem;
      newItem = prompt("Enter new name");
    });

    shoppingCart.splice(answer, 1, newItem);
  }
}

let print;
function printTotal() {
  // Prints the total of all items from the shoppingCart array. This
  // includes the a 6% tax. Do not use a for loop. Use a for..of
  // loop.
  for (print of shoppingCart) {
    let tax = print.price * (1 + .06)
    console.log(`Product: ${print.name} Price: ${tax}`);
  }
}

addItem();
removeItem();
editItem();
printTotal();
