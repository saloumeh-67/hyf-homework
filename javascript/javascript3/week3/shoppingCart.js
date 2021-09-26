class Product {
    constructor(name, price) {
      this.name = name;
      this.price = price;
    }
    convertToCurrency(currency){
      const newPrice = 0
      console.log(this.price);
      if (currency == 'dollars') {
        let newPrice = this.price / 6.27
      // convertedPrice.innerText = this.name +' =' + newPrice.toFixed(1) +' $'
        return console.log(newPrice);
      } else if (currency == 'euro') {
        let newPrice = this.price / 7.44
        //convertedPrice.innerText = this.name + '= '+newPrice.toFixed(1) +' Euro'
        return console.log(newPrice);
      }    
    }
  }
 class ShoppingCart {
    constructor() {
      this.products = [];
    }
  
    addProduct(product) {
      this.products.push(product)
    }
  
    removeProduct(product) {
      // Implement functionality here
      const removedProduct = this.products.splice(item => item.name != product)
      this.products = removedProduct
    }
  
    searchProduct(productName) {
      // Implement functionality here
      const findingProducts = this.products.find(item => {return item.name.toLowerCase() == productName.toLowerCase() })
      this.products = searchedProduct;
    }
  
    getTotal() {
      // getting all 
      const totalAmount = this.products.map(item => item.price).reduce((sum, value) => sum + value);
    }
  
    renderProducts() {
    let b = document.getElementById("btn1");
    b.addEventListener("click");
      
    }
  
    getUser() {
      const user = shoppingCart.getUser()
      .then(user => shoppingCart.renderUser(user));
  }
};
  
  const shoppingCart = new ShoppingCart();
  const flatscreen = new Product("flat-screen", 5000);
  shoppingCart.addProduct(flatscreen);
  //making new products
  const pc = new Product("imac",8000);
  const catfood = new Product("hils",500);
  const cellphone = new Product("iphone",4000);
  const keyboard = new Product ("keyboard",3000);
  // add product to it 
  const total = shoppingCart.getTotal();
  shoppingCart.addProduct(pc);
  shoppingCart.addProduct(cellphone);
  shoppingCart.addProduct(catfood);

  shoppingCart.removeProduct("imac");

  shoppingCart.getUser();
  console.log(shoppingCart);
  shoppingCart.renderProducts();
