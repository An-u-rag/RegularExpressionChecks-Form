//Anurag-18BCE2335 -> Credit Card Validation(partiii-2)
//referencing elements of html forms to variables
const credform = document.querySelector("#creditcardform");
const credNameInput = document.querySelector("#credCardName");
const credInput = document.querySelector("#credCard");

//Listening for submit event
credform.addEventListener('submit', onSubmit);

//function for submit event
function onSubmit(e) {
    e.preventDefault();
    if (document.querySelector('input[name="credCardName"]:checked')) {
        validateCard();
    }
    else {
        alert('Please enter all Fields!');
        return false;
    }
}

//function for validating the card number based on the card type
function validateCard() {
    if (document.querySelector('input[id="Visa"]:checked')) {
        if (credInput.value.match(/^(?:4[0-9]{12}(?:[0-9]{3})?)$/)) {
            console.log("Credit Card Accepted!");
        }
        else {
            console.log("Credit Card NOT Accepted!");
            alert("Not a Valid Visa Card Number");
            return false;
        }
    }
    if (document.querySelector('input[id="MasterCard"]:checked')) {
        if (credInput.value.match(/^(?:5[1-5][0-9]{14})$/)) {
            console.log("Credit Card Accepted!");
        }
        else {
            console.log("Credit Card NOT Accepted!");
            alert("Not a Valid MasterCard Card Number");
            return false;
        }
    }
    if (document.querySelector('input[id="American Express"]:checked')) {
        if (credInput.value.match(/^(?:3[47][0-9]{13})$/)) {
            console.log("Credit Card Accepted!");
        }
        else {
            console.log("Credit Card NOT Accepted!");
            alert("Not a Valid American Express Card Number");
            return false;
        }
    }
}