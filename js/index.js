/* Load Product Data from server */

const searchBtn = document.getElementById('search_btn');
searchBtn.addEventListener('click', (async () => {
    const searchBar = document.getElementById('search_bar');
    const searchValue = searchBar.value;
    const url = `https://fakestoreapi.com/products/category/${searchValue}`;
    const res = await fetch(url);
    const data = await res.json();
    searchResult(data);
    searchBar.value = '';
}));

const searchResult = (products) => {
    const searchDisplay = document.getElementById('search_display');
    searchDisplay.textContent = '';
    for(let product of products) {
        let col = document.createElement('div');
        col.classList.add('col');
        let products = document.createElement('div');
        products.classList.add('products');
        products.innerHTML = `
            <div class="product_img">
            <img src="${product.image}" alt="">
            </div>
            <div class="product_description">
            <p>${product.title}</p>
            <h5>$${product.price}</h5>
            </div>
        `;
        col.appendChild(products);
        searchDisplay.appendChild(col);
    }
}

/* Button */

const categoryData = () => {
    let buttonValue = event.target.innerText;
    let url = `https://fakestoreapi.com/products/category/${buttonValue}`;
    fetch(url)
    .then(res => res.json())
    .then(data => displayProducts(data));
}

const displayProducts = (products) => {
    const productDisplay = document.getElementById('products_display');
    productDisplay.textContent = '';
    for(let product of products) {
        let col = document.createElement('div');
        col.classList.add('col');
        let products = document.createElement('div');
        products.classList.add('products');
        products.innerHTML = `
            <div class="product_img">
            <img src="${product.image}" alt="">
            </div>
            <div class="product_description">
            <p>${product.title}</p>
            <h5>$${product.price}</h5>
            </div>
        `;
        col.appendChild(products);
        productDisplay.appendChild(col);
    }
}