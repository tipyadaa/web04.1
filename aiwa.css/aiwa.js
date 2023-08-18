
const unitzzElement = document.getElementById("unitzz");
const totalPriceElementA = document.getElementById("totalPriceAf");
const discountElement = document.getElementById("discount");
const totalPriceElementB = document.getElementById("totalPrice");


function calculateTotalPrice() {
    /*const priceSkinA = parseInt(document.getElementById("priceSkin").innerText);
    const priceSkinB = parseInt(document.getElementById("priceSkin1").innerText);
    const priceSkinC = parseInt(document.getElementById("priceSkin2").innerText);
    const priceSkinD = parseInt(document.getElementById("priceSkin3").innerText);*/
    const priceSkin=169;
    const unit1 = parseInt(num.innerText);
    const unit2 = parseInt(num1.innerText); 
    const unit3 = parseInt(num2.innerText); 
    const unit4 = parseInt(num3.innerText); 

    const totalprice1 = unit1 * priceSkin;
    const totalprice2 = unit2 * priceSkin;
    const totalprice3 = unit3 * priceSkin;
    const totalprice4 = unit4 * priceSkin;

    const totalUnits = unit1 + unit2 + unit3 + unit4; 
    const totalPriceBefore = totalprice1 + totalprice2 + totalprice3 + totalprice4;
    let discount = 0;
    let totalPrice=0;
    const totalPriceAf = totalPriceBefore;
    
    if (totalPriceBefore > 1000) {
        discount = totalPriceBefore * 0.1;
        totalPrice = totalPriceBefore - discount;
    } else {
        totalPrice = totalPriceBefore; // ถ้าไม่มีส่วนลด กำหนดราคาทั้งหมดเป็นราคาเดิม
    }
    

    
    unitzzElement.innerText = totalUnits;
    totalPriceElementB.innerText = totalPrice.toFixed(2); 
    discountElement.innerText = discount.toFixed(2); 
    totalPriceElementA.innerText = totalPriceAf.toFixed(2); 
}

plus.addEventListener("click", calculateTotalPrice);
minus.addEventListener("click", calculateTotalPrice);
plus1.addEventListener("click", calculateTotalPrice);
minus1.addEventListener("click", calculateTotalPrice);
plus2.addEventListener("click", calculateTotalPrice);
minus2.addEventListener("click", calculateTotalPrice);
plus3.addEventListener("click", calculateTotalPrice);
minus3.addEventListener("click", calculateTotalPrice);


