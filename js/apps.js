//Login button event handle....
const loginBtn = document.getElementById('login');
loginBtn.addEventListener('click', function(){
    //console.log("Click");
    const loginArea = document.getElementById('login-area');
    loginArea.style.display='none';
    const transactionArea = document.getElementById('transaction-area');
    transactionArea.style.display='block';
})
//Deposite button event handle....
const depositBtn = document.getElementById('deposit');
depositBtn.addEventListener('click', function(){
    //Add Deposit 
    //const depositAmount = document.getElementById('depositAmount').value;
    //const depositNumber = parseFloat(depositAmount);

    const depositNumber = getInputNumber('depositAmount');

    /*
    const currentDeposite = document.getElementById('currentDeposite').innerText;
    const currentDepositeNumber = parseFloat(currentDeposite);

    const totalDeposite = depositNumber + currentDepositeNumber;
    //console.log(totalDeposite);
    
    //set deposite....
    document.getElementById('currentDeposite').innerText = totalDeposite;
    */
    // Call Function......
    updateSpanText('currentDeposite', depositNumber);
    updateSpanText('currentBalace', depositNumber);
    //Deposite value clear
    document.getElementById('depositAmount').value = "";

    // Balace upadate....
    /*
    const currentBalace = document.getElementById('currentBalace').innerText;
    const currentBalaceNumber = parseFloat(currentBalace);

    const totalBalace = depositNumber + currentBalaceNumber;
    document.getElementById('currentBalace').innerText = totalBalace;
    */
})
function updateSpanText(id, depositNumber){
    const currentBalace = document.getElementById(id).innerText;
    const currentBalaceNumber = parseFloat(currentBalace);

    const totalBalace = depositNumber + currentBalaceNumber;
    document.getElementById(id).innerText = totalBalace;
}

//Withdraw button event handle....
const addWithdraw = document.getElementById('addWithdraw');
addWithdraw.addEventListener('click', function(){
    const withdrawAmountNumber = getInputNumber('withdrawAmount');
    //console.log(withdrawAmountNumber);
    updateSpanText('currentWithdraw', withdrawAmountNumber);

    updateSpanText('currentBalace', -1 * withdrawAmountNumber);

    document.getElementById('withdrawAmount').value = "";
    
}) 
function getInputNumber(id){
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}