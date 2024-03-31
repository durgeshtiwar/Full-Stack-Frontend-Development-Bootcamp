let itemsContainerElement =  document.getElementById(".item-containers");
console.log("This is inside index");
itemsContainerElement.innerHTML = `
<div class="item-container">
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
    <button class="btn-add-bags">Add to Bag</button>

</div>`;