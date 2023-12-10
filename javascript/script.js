let shoppingCard = document.querySelector('.shopping-card');
let cart = document.querySelector('.cart');

//Products in the shopping cart
shoppingCard.addEventListener('click', () => {
    cart.classList.toggle('toggelCard');
});
