function calculator(){
    var amount = parseInt(document.getElementById("amount").value);
    // console.log(amount);
    var tip = parseInt(document.getElementById("tip").value);
    // console.log(tip);
    var tipamount = amount * (tip/100);
    var total = amount + tipamount;
    // total = math.round(total);
    if(amount < 0){
        document.getElementById("cal").innerHTML = `<h4> Tip Amount: 0  </h4>
        <h4> Total Amount:0 </h4>`;
    }
    else if(isNaN(amount) || isNaN(tip)){
        alert("Please Enter");
    }
    else{
        document.getElementById("cal").innerHTML = `<h4> Tip Amount: ${tipamount}  </h4>
        <h4> Total Amount:${total} </h4>`;
    }
// console.log(tipamount)
// console.log(total)
    
    
    
}