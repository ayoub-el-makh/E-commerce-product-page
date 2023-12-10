let shoppingCard = document.querySelector('.shopping-card');
let cart = document.querySelector('.cart');

//Products in the shopping cart Section
shoppingCard.addEventListener('click', () => {
    cart.classList.toggle('toggelCard');
});

//Changing Product Image Section

let childrenSlideImg = document.querySelector('.slide-img').children;
let mainImg = document.getElementById('main-img');

function removeActiveImg() {
    for (let el of childrenSlideImg) {
        el.classList.remove('active-img');
    };
}
for (let el of childrenSlideImg) {
    el.addEventListener('click', function () {
        removeActiveImg();
        mainImg.src = this.getAttribute('src').split('.')[0] + '-big.jpg';
        this.classList.add('active-img');
    })
};
