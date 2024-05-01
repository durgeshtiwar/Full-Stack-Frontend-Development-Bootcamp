let bagItems;
Loading();
function Loading() {
    let bagItemStr = localStorage.getItem("bagItems");
    if (bagItemStr == null) {
        bagItems = [];
    } else {
        bagItems = JSON.parse(bagItemStr);
    }
    displayItemsOnHomepage();
    displayBagItem();   
}
function addToBag(itemid)
{
    bagItems.push(itemid);
    localStorage.setItem( 'bagItems', JSON.stringify(bagItems));
    displayBagItem();
}
function displayBagItem()
{
    let countBagItem = document.querySelector('.bag-item-count');
    if (bagItems.length > 0) {
        countBagItem.style.visibility = 'visible';
        countBagItem.innerText = bagItems.length;
    } else {
        countBagItem.style.visibility = 'hidden';
    }
}
function displayItemsOnHomepage()
{
    let itemsContainerElements = document.querySelector(".item-containers");
    if (!itemsContainerElements) {
        return;
    }
    let innerHTML = '';
    items.forEach(items => {
        innerHTML+=`<div class="item-container">
        <img class="item-img" src="${items.image}" alt="item image">
        <div class="rating">
        ${items.rating.stars} ⭐ | ${items.rating.count}
        </div>
        <div class="compony-name">${items.company}</div>
        <div class="item-name">${items.item_name}</div>
        <div class="price">
            <span class="current-price">Rs ${items.current_price}</span>
            <span class="original-price">Rs ${items.original_price}</span>
            <span class="discount">(${items.discount_percentage}% OFF)</span>
        </div>
        <button class="btn-add-bags" onclick = "addToBag(${items.id});">Add to Bag</button>
        
        </div>`;
    });
    itemsContainerElements.innerHTML = innerHTML;
}