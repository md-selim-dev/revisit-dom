const allCartBtns = document.getElementsByClassName("add-to-cart-btn");

const availableBudgetElem = parseInt(document.getElementById('available-budget').innerText);
for (const btn of allCartBtns) {
  btn.addEventListener("click", function (e) {
    // get players data
    const name = e.target.parentNode.parentNode.childNodes[1].innerText;
    const price = parseInt(
      e.target.parentNode.parentNode.childNodes[3].childNodes[2].innerText
    );
    const category =
      e.target.parentNode.parentNode.childNodes[5].innerText.split(" ")[1];

    // set players data to cart
    const cartElemContainer = document.getElementById(
      "cart-elements-container"
    );
    const eachPlayerData = document.createElement("div");
    eachPlayerData.classList = "flex justify-between mx-2";
    const nameElem = document.createElement("p");
    nameElem.innerText = name;
    const priceElem = document.createElement("p");
    priceElem.innerText = price;
    const categoryElem = document.createElement("p");
    categoryElem.innerText = category;

    const leftElem = parseInt(document.getElementById('left-elem').innerText);
    if(leftElem === 0){
      alert(`You can't choose more!`);
      return;
    }
    const leftCount = leftElem - 1;
    setInnerText('left-elem', leftCount)

    const availableBudget = availableBudgetElem - price;

    setInnerText('available-budget', availableBudget)
    console.log(availableBudget)

    const cartElem = parseInt(document.getElementById('cart-elem').innerText);
    const totalCart = cartElem + 1;
    setInnerText('cart-elem',totalCart);

    eachPlayerData.append(nameElem, priceElem, categoryElem);
    cartElemContainer.appendChild(eachPlayerData);
    console.log(price);
    totalCostCount(price);
  });
}




const grandTotalCount = document.getElementById('apply-btn');
grandTotalCount.addEventListener('click', function(){
   const totalCostValue = parseInt(document.getElementById('total-cost').innerText);
   totalCostCount(totalCostValue, true)
})

function totalCostCount(value, isGrand) {
  if (!isGrand) {
   const id = 'total-cost'
    const totalCost = parseInt(document.getElementById(id).innerText);
    console.log(totalCost);
    const total = totalCost + value;
    setInnerText(id, total);
    document.getElementById('grand-total').innerText = total
  }else{
   const id = 'grand-total';
   const coupon = document.getElementById('coupon-code').value;
   const totalCost = parseInt(document.getElementById(id).innerText);
   if(coupon === 'selim01' && totalCost > 0){
      const grandValue = value - (value * 0.2);
      setInnerText(id, grandValue)
      grandTotalCount.disabled = true;
      document.getElementById('coupon-container').value = ''
   }else{
      alert('Buy someone & Enter a valid coupon code')
      document.getElementById('coupon-code').value = ''
   }
  }
  console.log(isGrand)
}

function setInnerText(id, value) {
  const element = document.getElementById(id);
  element.innerText = value;
}
