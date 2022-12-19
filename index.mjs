import { products } from "./products.mjs"

const $products = document.querySelector("#products");
const $cart = document.querySelector("#cart");

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

const generateCartHTML = (cartItem) => {
    return `
   <div class="cart-item">
   <span> ${cartItem.title} - x${cartItem.qnt} - ${cartItem.price * cartItem.qnt} 
    </div>
    `
}
const renderCartItems = () => {
    const html = state.cart.map((cartItem) => {
        return generateCartHTML(cartItem);
    }).join("");
    $cart.innerHTML = html;
}

const init = () => {
    renderProducts();
    renderCartItems();
}


init();

