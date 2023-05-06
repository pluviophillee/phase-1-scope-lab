// Write your solution in this file!
var customerName = "bob"
function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
    console.log(customerName);
}

function setBestCustomer(){
    bestCustomer = "not bob";
}

function overwriteBestCustomer(newCustomer){
    bestCustomer = newCustomer;
}

const leastFavoriteCustomer = "anyone"
function changeLeastFavoriteCustomer(){
    leastFavoriteCustomer = "meh";
}