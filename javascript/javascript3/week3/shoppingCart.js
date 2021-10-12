class Product {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }

  convertToCurrency(currency) {
    const exchangeCurrency = currency.toUpperCase();
    fetch(
      `https://free.currconv.com/api/v7/convert?q=DKK_${exchangeCurrency}&compact=ultra&apiKey=887a84c9cd061cfbd5fa`
    )
      .then((response) => response.json())
      .then((data) => {
        const exchangeRate = Object.values(data)[0];
        const exchangeValue = (this.price * exchangeRate).toFixed(2) + currency;
        console.log(exchangeValue);
      })
      .catch((error) => {
        throw error;
      });
  }
}
class ShoppingCart {
  constructor() {
    this.products = [];
  }

  addProduct(product) {
    //should add a product to the products array
    this.products.push(product);
  }

  removeProduct(product) {
    //should remove a product from the products array
    const index = this.products.indexOf(product);
    if (index > -1) {
      this.products.splice(index, 1);
    }
  }
  //should return an array of product that match the productName parameter
  searchProduct(productName) {
    const index = this.products.indexOf(productName);
    let searchedProducts = [];
    if (index > -1) {
      searchedProducts.push(this.products[index]);
    }
    return (this.searchedProducts = searchedProducts);
  }

  //should get the total price of the products in the shoppingcart
  getTotal() {
    let totalAmount = 0;
    this.products.forEach((product) => (totalAmount += product.price));
    this.totalAmount = totalAmount;
  }

  renderProducts() {
    let b = document.getElementById("btn1");
    b.addEventListener("click");
  }

  getUser() {
    const user = shoppingCart
      .getUser()
      .then((user) => shoppingCart.renderUser(user));
  }
}

const shoppingCart = new ShoppingCart();
const flatScreen = new Product("flat-screen", 5000);
shoppingCart.addProduct(flatScreen);
//making new products
const pc = new Product("imac", 8000);
const catfood = new Product("hils", 500);
const cellphone = new Product("iphone", 4000);
const keyboard = new Product("keyboard", 3000);
// add product to it
const total = shoppingCart.getTotal();
shoppingCart.addProduct(pc);
shoppingCart.addProduct(cellphone);
shoppingCart.addProduct(catfood);

shoppingCart.removeProduct("imac");

shoppingCart.getUser();
console.log(shoppingCart);
shoppingCart.renderProducts();
