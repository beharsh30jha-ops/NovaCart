let cart = JSON.parse(localStorage.getItem("cart")) || [];

const cartItems = document.getElementById("cartItems");
const total = document.getElementById("total");

function loadCart() {

    cartItems.innerHTML = "";

    let sum = 0;

    cart.forEach((item, index) => {

        sum += parseInt(item.price.replace("$",""));

        cartItems.innerHTML += `
        <div class="cart-item">
            <div>
                <h3>${item.name}</h3>
                <p>${item.price}</p>
            </div>

            <button onclick="removeItem(${index})">
                Remove
            </button>
        </div>
        `;

    });

    total.innerText = "Total: $" + sum;
}

function removeItem(index){

    cart.splice(index,1);

    localStorage.setItem("cart",JSON.stringify(cart));

    loadCart();
}

loadCart();