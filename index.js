// login button event handler

var loginBtn = document.getElementById('login');
loginBtn.addEventListener("click",function(){
   
var loginArea = document.getElementById('login-area');
loginArea.style.display = "none";

var transactionArea = document.getElementById('transaction-area');
transactionArea.style.display = "block";
});

// deposit button event handler

var depositBtn = document.getElementById("addDeposit");
depositBtn.addEventListener("click",function(){
    var depAmount = parseFloat(document.getElementById('depositAmount').value);

    var currentDeposit = parseFloat(document.getElementById('currentDeposit').innerText);
    var totalDeposit = depAmount + currentDeposit;
    document.getElementById('currentDeposit').innerText = totalDeposit;

    var currentaBalance = parseFloat(document.getElementById('currentBalance').innerText);
    var totalBalance = currentaBalance + depAmount;
    document.getElementById('currentBalance').innerText = totalBalance;
   
    document.getElementById('depositAmount').value = "";
})

// withdraw button event handler


var withdrawBtn = document.getElementById("removeWithdraw");
withdrawBtn.addEventListener("click",function(){
    var widAmount = parseFloat(document.getElementById('withdrawAmount').value);

  
    var currentWithdraw = parseFloat(document.getElementById('currentWithdraw').innerText);
    var totalWithdraw = currentWithdraw + widAmount;
    document.getElementById('currentWithdraw').innerText = totalWithdraw;

    var currentaBalance = parseFloat(document.getElementById('currentBalance').innerText);
    var totalBalance = currentaBalance - widAmount;
    document.getElementById('currentBalance').innerText = totalBalance;

    document.getElementById('withdrawAmount').value = "";
})