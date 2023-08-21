
function handleClick(productName, productPrice) {
   const listItems = document.getElementById('listItems')
   const Item = document.createElement('li')
    Item.innerText = productName;
    listItems.appendChild(Item);


    const totalPriceElement = document.getElementById('total-price');
    const totalpriceString = totalPriceElement.innerText;
    const totalPrice = parseFloat(totalpriceString)
    const newTotalPrice = totalPrice + productPrice;
    totalPriceElement.innerText = newTotalPrice;
    const totalElement = document.getElementById('total');
    totalElement.innerText = newTotalPrice;

    const newDiscountAmount = (newTotalPrice / 100) * 20;
    const currentDiscount = newDiscountAmount.toFixed(1);

    document.getElementById('inputFild').addEventListener('keyup', function(e) {
        if(e.target.value === "SELL200") {
            applayBtn.addEventListener('click', function() {
                const discount = document.getElementById('discount');
               discount.innerText = currentDiscount;
               const totalElement = document.getElementById('total');
               const total = newTotalPrice - currentDiscount;
               totalElement.innerText = total
            })
        
        }
    })


    const applayBtn = document.getElementById("applay-btn")
    if(newTotalPrice >= 200){
        applayBtn.removeAttribute('disabled')
        applayBtn.style.backgroundColor = "#E527B2"
    }else {
        applayBtn.setAttribute('disabled', true);
    }


    const makePurchase = document.getElementById('makePurchase')
    if(totalPrice >= 0) {
        makePurchase.removeAttribute('disabled')
        makePurchase.style.backgroundColor = "#E527B2"
    }else {
        makePurchase.setAttribute('disabled', true);
    }
}




function handleClear() {
  window.location.reload()
}