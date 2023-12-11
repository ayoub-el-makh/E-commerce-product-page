let shoppingCard = document.querySelector('.shopping-card');
let cart = document.querySelector('.cart');
let mainSection = document.querySelector('.main');
let navPhone = document.querySelector('.nav-phone');
let menu = document.querySelector('.menu');
//Products in the shopping cart Section
shoppingCard.addEventListener('click', () => {
    cart.classList.toggle('toggelCard');
    let containes = navPhone.style.display;
    if (containes === 'none') {
        mainSection.classList.toggle('blurToggel');
    }
    navPhone.style.display = "none";
    closeCart();
});

function closeCart() {
    let containes = cart.classList.contains('toggelCard');
    if (containes) {
        mainSection.addEventListener('click', function () {
            cart.classList.remove('toggelCard')
            mainSection.classList.remove('blurToggel');
            this.removeEventListener('click', () => false);
        })
    }
}


//Changing Product Image Section

let childrenSlideImg = document.querySelector('.slide-img').children;
let mainImg = document.getElementById('main-img');

function removeActiveImg() {
    for (let el of childrenSlideImg) {
        el.classList.remove('active-img');
    };
};
for (let el of childrenSlideImg) {
    el.addEventListener('click', function () {
        removeActiveImg();
        mainImg.src = this.getAttribute('src').split('.')[0] + '-big.jpg';
        this.classList.add('active-img');
    })
};

//Quantity contour
function operation(num, op) {
    switch (op) {
        case "+":
            return ++num;
        case "-":
            return --num;
    }
};
let quantityValue = document.getElementById('quantity-value');
document.getElementById('plus').addEventListener('click', function () {
    quantityValue.textContent = operation(+quantityValue.innerHTML, "+");
});

document.getElementById('minus').addEventListener('click', function () {
    if (+quantityValue.textContent === 1) {
        return;
    };
    quantityValue.textContent = operation(+quantityValue.innerHTML, "-");
});

//Adding product in shopping cart section
let cartProductShop = document.querySelector('.cart-product-shop');
let addProduct = document.getElementById('add-product');
let qte = document.querySelector('#qte');
addProduct.addEventListener('click', () => {
    qte.style.display = 'flex';
    qte.textContent = quantityValue.innerHTML;
    cartProductShop.innerHTML = `
                    <div class="product-info">
                        <div class="product-info-img">
                            <img src="images/image-product-3.jpg" alt="image-product-1">
                        </div>
                        <div class="product-info-details">
                            <p>Fall Limited Edition Sneakers</p>
                            <p>$125.00 x <span>${quantityValue.innerHTML} </span><strong id="total">$${125 * +quantityValue.textContent}.00</strong></p>
                        </div>
                        <div class="product-info-icon" onclick="Delete()">
                            <svg width="14" height="16" xmlns="http://www.w3.org/2000/svg"
                                xmlns:xlink="http://www.w3.org/1999/xlink">
                                <defs>
                                    <path
                                        d="M0 2.625V1.75C0 1.334.334 1 .75 1h3.5l.294-.584A.741.741 0 0 1 5.213 0h3.571a.75.75 0 0 1 .672.416L9.75 1h3.5c.416 0 .75.334.75.75v.875a.376.376 0 0 1-.375.375H.375A.376.376 0 0 1 0 2.625Zm13 1.75V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 1 14.5V4.375C1 4.169 1.169 4 1.375 4h11.25c.206 0 .375.169.375.375ZM4.5 6.5c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Zm3 0c0-.275-.225-.5-.5-.5s-.5.225-.5.5v7c0 .275.225.5.5.5s.5-.225.5-.5v-7Z"
                                        id="a" />
                                </defs>
                                <use fill="#C3CAD9" fill-rule="nonzero" xlink:href="#a" />
                            </svg>
                        </div>
                    </div>
                    <div class="btn btn-cart">
                        <button>Chekout</button>
                    </div>`;
    window.scroll({ top: 0, behavior: "smooth" });
});

function Delete() {
    cartProductShop.innerHTML = "<p class='p-empty'>Your cart is empty</p>";
    qte.style.display = "none";
};


//Slide Images for phone screen
let previousImg = document.querySelector('.previous');
let nextImg = document.querySelector('.next');
let num = 1;

previousImg.addEventListener('click', () => {
    num--;
    if (num === 0) {
        num = 4;
    }
    mainImg.src = `images/image-product-${num}-big.jpg`;
});

nextImg.addEventListener('click', () => {
    num++;
    if (num === 5) {
        num = 1;
    }
    mainImg.src = `images/image-product-${num}-big.jpg`;
});

// add switch slide image 
if (window.innerWidth <= 600) {
    setInterval(() => {
        num++;
        if (num === 5) {
            num = 1;
        }
        mainImg.src = `images/image-product-${num}-big.jpg`;
    }, 2000)
}

//Making Navbar Section responsive for phone screen
let iconClose = document.querySelector('.icon-close');

iconClose.addEventListener('click', () => {
    navPhone.style.display = "none";
    mainSection.classList.toggle('blurToggel');
})


menu.addEventListener('click', () => {
    navPhone.style.display = "block";
    cart.classList.remove('toggelCard');
    let isBlur = mainSection.classList.contains('blurToggel');
    if (!isBlur) {
        mainSection.classList.add('blurToggel');
    }
    let containes = navPhone.style.display;
    if (containes === 'block') {
        mainSection.addEventListener('click', function () {
            navPhone.style.display = "none";
            mainSection.classList.remove('blurToggel');
            this.removeEventListener('click', () => false);
        })
    }
})


// add scroll up
let scrollUp = document.querySelector('.up');
window.addEventListener('scroll', () => {
    let pScroll = window.scrollY;
    if (pScroll >= 200) {
        scrollUp.style.display = "block";
    } else {
        scrollUp.style.display = "none";
    }
});

scrollUp.addEventListener('click', function () {
    scroll({ top: 0, behavior: "smooth" });
    this.style.display = "none";
})



