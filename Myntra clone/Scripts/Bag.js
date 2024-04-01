const CONVENIENCE_FEES = 99;
let bagItemObject;
Loading();
function Loading()
{
    loadBagItemObject();
    displayBagItems();
    displayBagSummary();
}
function displayBagSummary()
{
    let bagSummaryElement = document.querySelector('.bag-summary');
    let totalItem = bagItemObject.length;
    let totalMRP = 0;
    let totalDiscount = 0;

    bagItemObject.forEach(item => {
        totalMRP += item.original_price;
        totalDiscount +=item.original_price - item.current_price;
    });
    let finalPayment = totalMRP - totalDiscount + CONVENIENCE_FEES;
    bagSummaryElement.innerHTML = `<div class="bag-details-container">
    <div class="price-header">PRICE DETAILS (${totalItem} Items) </div>
    <div class="price-item">
      <span class="price-item-tag">Total MRP</span>
      <span class="price-item-value">Rs${totalMRP}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Discount on MRP</span>
      <span class="price-item-value priceDetail-base-discount">-Rs${totalDiscount}</span>
    </div>
    <div class="price-item">
      <span class="price-item-tag">Convenience Fee</span>
      <span class="price-item-value">Rs 99</span>
    </div>
    <hr>
    <div class="price-footer">
      <span class="price-item-tag">Total Amount</span>
      <span class="price-item-value">Rs ${finalPayment}</span>
    </div>
  </div>
  <button class="btn-place-order">
    <div class="css-xjhrni">PLACE ORDER</div>
  </button>`;
}
function loadBagItemObject()
{
    console.log(bagItems);
    bagItemObject = bagItems.map(itemId =>{
        for (let i = 0; i < items.length; i++) {
            if (itemId == items[i].id) {
                return  items[i];
            }
            
        }
    });
    console.log(bagItemObject);
}
function displayBagItems()
{
    let containersElement = document.querySelector('.bag-items-container');
    let innerHTML = '';
    bagItemObject.forEach(bagItem => {
        innerHTML+=generateHTML(bagItem);
    });
    containersElement.innerHTML = innerHTML;
}

function removeFromBag(itemId)
{
    bagItems = bagItems.filter(item => item != itemId);
    localStorage.setItem( 'bagItems', JSON.stringify(bagItems));
    loadBagItemObject();
    displayBagItems();
    displayBagItem();
    displayBagSummary();
}



function generateHTML(item)
{
    return`<div class="bag-item-container">
    <div class="item-left-part">
      <img class="bag-item-img" src="../${item.image}">
    </div>
    <div class="item-right-part">
      <div class="company">${item.company}</div>
      <div class="item-name">${item.item_name}</div>
      <div class="price-container">
        <span class="current-price">${item.current_price}</span>
        <span class="original-price">${item.original_price}</span>
        <span class="discount-percentage">(${item.discount_percentage}% OFF)</span>
      </div>
      <div class="return-period">
        <span class="return-period-days">${item.return_period}</span> return available
      </div>
      <div class="delivery-details">
        Delivery by
        <span class="delivery-details-days">${item.delivery_date}</span>
      </div>
    </div>

    <div class="remove-from-cart" onclick=" removeFromBag(${item.id}) ">X</div>
  </div>`;
}