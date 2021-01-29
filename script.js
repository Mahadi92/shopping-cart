// Phone Quantity increase
// document.getElementById('increase-quantity').addEventListener('click', function () {
// const quantityInput = document.getElementById('current-quantity');
// const quantityCount = parseInt(quantityInput.value);
// const quantityNewCount = quantityCount + 1;
// quantityInput.value = quantityNewCount;
// const priceTotal = quantityNewCount * 1220;
// document.getElementById('price').innerText = priceTotal;
// });

// Phone Quantity decrease
// document.getElementById('decrease-quantity').addEventListener('click', function () {
// const quantityInput = document.getElementById('current-quantity');
// const quantityCount = parseInt(quantityInput.value);
// const quantityNewCount = quantityCount - 1;
// quantityInput.value = quantityNewCount;
// const priceTotal = quantityNewCount * 1220;
// document.getElementById('price').innerText = priceTotal;
// });

// Increase case price
// document.getElementById('increase-quantity').addEventListener('click', function () {
// const caseInput = document.getElementById('case-current-quantity');
// const caseCount = parseInt(caseInput.value);
// const caseNewCount = caseCount + 1;
// caseInput.value = caseNewCount;
// const casePriceTotal = caseNewCount * 59;
// document.getElementById('case-price').innerText = casePriceTotal;
// })

// Decrease case price 
// document.getElementById('decrease-quantity').addEventListener('click', function () {
// const caseInput = document.getElementById('case-current-quantity');
// const caseCount = parseInt(caseInput.value);
// const caseNewCount = caseCount - 1;
// caseInput.value = caseNewCount;
// const casePriceTotal = caseNewCount * 59;
// document.getElementById('case-price').innerText = casePriceTotal;

// })

function handleProductChanges(product, isIncrease) {
    const input = document.getElementById(product + '-current-quantity');
    const count = parseInt(input.value);
    let newCount = count;
    if (isIncrease == true) {
        newCount = count + 1;
    }
    if (isIncrease == false && newCount > 0) {
        newCount = count - 1;
    }
    input.value = newCount;

    let priceTotal = 0;
    if (product == 'phone') {
        priceTotal = newCount * 1220;
    }
    if (product == 'case') {
        priceTotal = newCount * 59;
    }

    document.getElementById(product + '-price').innerText = priceTotal;
}


// function handleProductChanges(isIncrease) {
//     const quantityInput = document.getElementById('phone-current-quantity');
//     const quantityCount = parseInt(quantityInput.value);
//     let quantityNewCount = quantityCount;

//     if (isIncrease == true) {
//         quantityNewCount = quantityCount + 1;
//     }
//     if (isIncrease == false && quantityCount > 0) {
//         quantityNewCount = quantityCount - 1;
//     }

//     quantityInput.value = quantityNewCount;
//     const priceTotal = quantityNewCount * 1220;
//     document.getElementById('phone-price').innerText = priceTotal;


// }

// function handleCaseChanges(isIncrease) {
//     const caseInput = document.getElementById('case-current-quantity');
//     const caseCount = parseInt(caseInput.value);
//     let caseNewCount = caseCount;
//     if (isIncrease == true) {
//         caseNewCount = caseCount + 1;
//     }
//     if (isIncrease == false && caseNewCount > 0) {
//         caseNewCount = caseCount - 1;
//     }
//     caseInput.value = caseNewCount;
//     const casePriceTotal = caseNewCount * 59;
//     document.getElementById('case-price').innerText = casePriceTotal;
// }