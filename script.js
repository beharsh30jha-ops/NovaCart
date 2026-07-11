let cart = JSON.parse(localStorage.getItem("cart")) || [];

updateCartCount();

const buttons = document.querySelectorAll(".product button");

buttons.forEach(button => {
    button.addEventListener("click", () => {

        const product = button.parentElement.querySelector("h3").innerText;
        const price = button.parentElement.querySelector("p").innerText;

        cart.push({
            name: product,
            price: price
        });

        localStorage.setItem("cart", JSON.stringify(cart));

        updateCartCount();

        alert("✅ Added to Cart!");
    });
});

function updateCartCount(){
    const count = document.getElementById("cart-count");

    if(count){
        count.innerText = cart.length;
    }
}
// Product Search

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", () => {

    const value = searchInput.value.toLowerCase();

    const products = document.querySelectorAll(".product");

    products.forEach(product => {

        const name = product.dataset.name;

        if(name.includes(value)){
            product.style.display = "block";
        }else{
            product.style.display = "none";
        }

    });

});