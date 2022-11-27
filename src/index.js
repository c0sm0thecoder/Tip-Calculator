let bill = document.getElementById("bill-input");
let b = document.querySelector(".calc-button");

function displayBill() {
    let price = document.getElementById("price");
    if (price.placeholder != '$0.00') {
        price.innerHTML = '$' + bill.value;
    } else {
        price.innerHTML = '$0.00';
    }
}

function calcTip(percentage) {
    tip = document.querySelector("#tip-amount");
    total = document.querySelector("#total-price");
    if (percentage === "") {
        total.innerHTML = tip.innerHTML = "$0.00";
    }
    let tipAmount = Function("return " + bill.value + "*" + percentage + "/100")();
    let totalAmount = Function("return " + bill.value + "+" + tipAmount)();
    tip.innerHTML = "$" + tipAmount;
    total.innerHTML = "$" + totalAmount;
    console.log(percentage);
}
