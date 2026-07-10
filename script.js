// NovaCart Shopping Cart

let cart = [];
const cartCount = document.getElementById("cart-count");
const buttons = document.querySelectorAll(".product button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const product = button.parentElement.querySelector("h3").innerText;

        cart.push(product);

        alert(`✅ ${product} added to cart!

Items in cart: ${cart.length}`);

        console.log(cart);
    });
});