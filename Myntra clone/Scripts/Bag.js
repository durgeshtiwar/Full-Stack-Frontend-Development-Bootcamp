let bagItemObject;
Loading();
function Loading()
{
    loadBagItemObject();
    displayBagItem();
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
function displayBagItem()
{
    let containersElement = document.querySelector('.bag-items-container');
    let innerHTML = '';
    bagItemObject.forEach(bagItem => {
        innerHTML+=generateHTML(bagItem);
    });
    containersElement.innerHTML = innerHTML;
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

    <div class="remove-from-cart">X</div>
  </div>`;
}