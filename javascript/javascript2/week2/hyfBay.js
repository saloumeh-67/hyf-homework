  
console.log('Script loaded');

const products = getAvailableProducts();
const productsUl = document.querySelector('#list');
console.log(productsUl);

function renderProducts(products) {
    products.forEach(product => {
        const li = document.createElement('li');

        let shipsToHTML = '';
        product.shipsTo.forEach(country => shipsToHTML += `<li>${country}</li>`);

        li.innerHTML = `
            <ul>
                <li>${product.name}</li>
                <li>${product.price}</li>
                <li>${product.rating}</li>
                <ul class="ships-to">${shipsToHTML}</ul>
            </ul>
        `;
        productsUl.appendChild(li);
    });
}


const searchBar = document.getElementById('searchBar');

searchBar.addEventListener('keydown', function () {
    const arr = products.filter(elm => {
        const arrNames = elm.name.toLowerCase();
        return arrNames.includes.toLowerCase(searchBar.value);
    });
    let printResult = document.getElementById('filterList').innerText = ' ';
    renderProducts(arr);
    return printResult;
});
const maxPrice = document.getElementById('maxPrice');

maxPrice.addEventListener('keyup', function () {
    const maximumPrice = products.filter(item => {
        return item.price <= maxPrice.value;
    });
    printResult = document.getElementById('filterList').innerText = ' ';
    renderProducts(maximumPrice);
    return maximumPrice;
});

//make another function for low price
const minPrice = document.getElementById('minPrice');

minPrice.addEventListener('keyup', function () {
    const minimumPrice = products.filter(item => {
        return item.price >= minPrice.value;
    });
    printResult = document.getElementById('filterList').innerText = ' ';
    renderProducts(minimumPrice);
    return minimumPrice;
});
