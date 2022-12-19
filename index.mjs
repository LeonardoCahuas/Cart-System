import { products } from "./products.mjs"

const $products = document.querySelector("#products");

const state = {
    cart: []
}

const generateProductHTML = (product) => {
    return ` 
        <div class="product">
           <span>${product.title} - ${product.price}€</span>
           <button data-id="${product.id}" class="add-to-cart">Add to Cart</button>
        </div>
    `
}

const renderProducts = () => {
    const html = products.map((product) => {
        return generateProductHTML(product);
    }).join("");
    $products.innerHTML = html;
}

const init = () => {
    renderProducts();
}

init();