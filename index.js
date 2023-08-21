
let newTotalPrice = 0;
const totalPriceElement = document.getElementById('total-price');
const applyButton = document.getElementById('apply-coupon-btn');
const couponInputField = document.getElementById('coupon-inout');
const discount = document.getElementById('discount');
const totalPayable = document.getElementById('total-payable');
const modalButton = document.getElementById('make-purchase-btn');

// Common function to handle all card calculation
function handleCardClick(nameId, priceId) {
    const name = document.getElementById(nameId).innerText;
    const priceString = document.getElementById(priceId).innerText;
    const price = parseFloat(priceString);

    const totalProducts = document.getElementById('total-product');
    const listItem = document.createElement('li');
    listItem.textContent = name;
    totalProducts.appendChild(listItem);

    const totalPriceString = totalPriceElement.innerText;
    const prevTotalPrice = parseFloat(totalPriceString);

    newTotalPrice = prevTotalPrice + price;
    totalPriceElement.innerText = newTotalPrice.toFixed(2);
    getDiscount(newTotalPrice);
}


// get total price function
function getDiscount(price) {
    if (price >= 200) {
        applyButton.style.opacity = '100%';
        applyButton.removeAttribute('disabled');
        couponInputField.addEventListener('input', function () {

            if (couponInputField.value === 'SELL200') {
                applyButton.addEventListener('click', function () {
                    let discountPrice = price * 0.2;
                    let payablePrice = price - discountPrice;
                    discount.innerText = discountPrice.toFixed(2);
                    totalPayable.innerText = payablePrice;
                })
                const modal = document.getElementById('modal-box');
                modal.addEventListener('click', function (event) {
                    if (event.target === modal) {
                        modal.classList.add('hidden');
                    }
                })
            }
        });
    }
    if (price > 0) {
        modalButton.style.opacity = '100%';
        modalButton.removeAttribute('disabled');
        modalButton.addEventListener('click', function () {
            const modalContainer = document.getElementById('modal-box');
            modalContainer.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        })
    }
}

document.getElementById('K-Accessories').addEventListener('click', function () {
    handleCardClick('K-Accessories-text', 'K-Accessories-price');
});
document.getElementById('K-Accessories2').addEventListener('click', function () {
    handleCardClick('K-Accessories2-text', 'K-Accessories2-price');
});
document.getElementById('Home-Cooker').addEventListener('click', function () {
    handleCardClick('Home-Cooker-text', 'Home-Cooker-price');
});
document.getElementById('sports-back-cap').addEventListener('click', function () {
    handleCardClick('sports-back-cap-text', 'sports-back-cap-price');
});
document.getElementById('full-jersey-set').addEventListener('click', function () {
    handleCardClick('full-jersey-set-text', 'full-jersey-set-price');
});
document.getElementById('sports-cates').addEventListener('click', function () {
    handleCardClick('sports-cates-text', 'sports-cates-price');
});
document.getElementById('relax-chair').addEventListener('click', function () {
    handleCardClick('relax-chair-text', 'relax-chair-price');
});
document.getElementById('children-play').addEventListener('click', function () {
    handleCardClick('children-play-text', 'children-play-price');
});
document.getElementById('flexible-sofa').addEventListener('click', function () {
    handleCardClick('flexible-sofa-text', 'flexible-sofa-price');
});