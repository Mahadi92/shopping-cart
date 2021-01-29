// Quantity increase
document.getElementById('increase-quantity').addEventListener('click', function () {
    // const quantityInput = document.getElementById('current-quantity');
    // const quantityCount = parseInt(quantityInput.value);
    // const quantityNewCount = quantityCount + 1;
    // quantityInput.value = quantityNewCount;
    // const priceTotal = quantityNewCount * 1220;
    // document.getElementById('price').innerText = priceTotal;
    handleProjectChanges(true);
});

// Quantity decrease
document.getElementById('decrease-quantity').addEventListener('click', function () {
    // const quantityInput = document.getElementById('current-quantity');
    // const quantityCount = parseInt(quantityInput.value);
    // const quantityNewCount = quantityCount - 1;
    // quantityInput.value = quantityNewCount;
    // const priceTotal = quantityNewCount * 1220;
    // document.getElementById('price').innerText = priceTotal;
    handleProjectChanges(false);
});


function handleProjectChanges(isIncrease) {
    const quantityInput = document.getElementById('current-quantity');
    const quantityCount = parseInt(quantityInput.value);
    let quantityNewCount = quantityCount;

    if (isIncrease == true) {
        quantityNewCount = quantityCount + 1;
    }
    if (isIncrease == false && quantityCount > 0) {
        quantityNewCount = quantityCount - 1;
    }

    quantityInput.value = quantityNewCount;
    const priceTotal = quantityNewCount * 1220;
    document.getElementById('price').innerText = priceTotal;


}