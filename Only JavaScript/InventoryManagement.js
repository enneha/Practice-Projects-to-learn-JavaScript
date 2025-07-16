let inventory = [];
function findProductIndex(productName) {
  let lowerProductName = productName.toLowerCase();
  return inventory.indexOf(lowerProductName);
}

function addProduct(productObject) {
  let productName = productObject.name.toLowerCase();
  if (findProductIndex(productName) != -1) {
    productObject.quantity + 1;
    return productName + " quantity updated.";
  } else {
    inventory.push(productObject);
    return productName + " added to inventory.";
  }
}

function removeProduct(productName, productQuantity) {
  let productNameLower = productName.toLowerCase();
  if (findProductIndex(productNameLower) != -1) {
    productQuantity - 1;
    return `Remaining ${productName} pieces: ${productQuantity}`;
  } else {
    return "No products";
  }
}
console.log(findProductIndex("Jug"));
console.log(addProduct({ name: "Jam", quantity: 5 }));
console.log(removeProduct("FLOUR", 5));
