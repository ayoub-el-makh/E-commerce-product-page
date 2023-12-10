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

//Quantity contour
function operation(num, op){
    switch(op){
        case "+": 
            return ++num;
        case "-":
            return --num;
    }
}
document.getElementById('plus').addEventListener('click',function(){
    console.log(operation(1, "+"));
    let quantityValue = document.getElementById('quantity-value');
    quantityValue.textContent = operation(+quantityValue.innerHTML, "+");
})

document.getElementById('minus').addEventListener('click',function(){
    let quantityValue = document.getElementById('quantity-value');
    if(+quantityValue.textContent === 1 ){
        return ;
    };
    quantityValue.textContent = operation(+quantityValue.innerHTML, "-");
})