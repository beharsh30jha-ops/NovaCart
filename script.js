// NovaCart Shopping Cart

let cart = [];

const buttons = document.querySelectorAll(".product button");

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        const product =
            button.parentElement.querySelector("h3").innerText;

        cart.push(product);

        alert(
            `✅ ${product} added to cart!\n\nItems in cart: ${cart.length}`
        );

        console.log(cart);
    });
});