//  Project 3 - Interactive Form - Team Treehouse

// Below I have set the first form input box to be in focus, hidden the "Other Job Role" text input box by default and 
// created a change event listener to show the "Other Job Role" input box or keep it hidden based on the job selected 
// in the "job role" selector.

let name = document.getElementById("name");

name.focus();

let jobRole = document.getElementById('title');
let otherJobRole = document.getElementById('other-job-role');

otherJobRole.style.display = 'none';

jobRole.addEventListener('change', (e) => {
    if ( e.target.value === 'other') {
        otherJobRole.style.display = 'block';
    } else {
        otherJobRole.style.display = 'none';
    }
});

let design = document.getElementById('design');
let color = document.getElementById('color');
let colorOption = document.getElementById('color').children;
let shirtColorsDiv = document.getElementById('shirt-colors');

// Below I disabeled the color menu to then make it only appear once someone has chosen a theme for a shirt in the shirt theme menu.
// Attempting to fix the addEventListener and if statement inside.

// Update: I fixed the below listener by adding [i] onto the shirtTheme variable as well as after color in the if statement. 


shirtColorsDiv.style.display = 'none';




design.addEventListener('change', (e) => {
    shirtColorsDiv.style.display = '';
    


    for ( let i = 1; i < colorOption.length; i++ ) {
        let value = e.target.value;
        let shirtTheme = document.getElementById('color')[i].getAttribute('data-theme');

        if ( value === shirtTheme ) {
            color[i].removeAttribute('hidden');
        } else {
            color[i].setAttribute('hidden', 'hidden');
            color.selectedIndex = 0;
        }
    }
});

// Below I created an eventListener on registerForActivities to listen for changes (checked or unchecked). I then set up an if statement to 
// either add or subtract the total cost of the activity from the total based on if it is checked or unchecked. 

let registerForActivities = document.getElementById('activities');
let activitiesCost = document.getElementById('activities-cost');
let totalCost = 0;

console.log(registerForActivities);
console.log(activitiesCost);

registerForActivities.addEventListener('change', (e) => {
    let data_cost = e.target.getAttribute('data-cost');
    data_cost = +data_cost;

    if ( e.target.checked ) {
        totalCost = totalCost + data_cost;
    } else {
        totalCost = totalCost - data_cost;
    }

    activitiesCost.innerHTML = `Total: $${totalCost}`;
});

// Below is the event listener for the paymentMethod element. I am trying to get the payment method a user selects to show while hiding the other
// payment methods. I have set credit card as the default option by selecting it through paymentMethod children and selecting credit card with [1]
// to get to the second child element of the paymentMethod element. 

// Update: my error was not matching the exact id in the if statement. For instance, I had ( e.target.value === 'Credit Card' ) when it should
// have been ( e.target.value === 'credit-card' ) because it has to match the exact id.

let paymentMethod = document.getElementById('payment');
let creditCard = document.getElementById('credit-card');
let paypal = document.getElementById('paypal');
let bitcoin = document.getElementById('bitcoin');
let secondChild = paymentMethod.children[1];

paypal.style.display = 'none';
bitcoin.style.display = 'none';

secondChild.setAttribute('selected', 'selected');

paymentMethod.addEventListener('change', (e) => {
    console.log(e.target.value);
    if ( e.target.value === 'credit-card' ) {
        creditCard.style.display = 'block';
        paypal.style.display = 'none';
        bitcoin.style.display = 'none';
    } else if ( e.target.value === 'paypal' ) {
        paypal.style.display = 'block';
        creditCard.style.display = 'none';
        bitcoin.style.display = 'none';
    } else if ( e.target.value === 'bitcoin' ) {
        bitcoin.style.display = 'block';
        creditCard.style.display = 'none';
        paypal.style.display = 'none';
    }
});

// Below I have created the form validation for the required fields. I have also added logic to better show errors if a user 
// forgets one of the required fields. I'm still working on the test to check if there has been a selection made in the Register 
// for Activities section. I also need to figure out how to make the credit card info required ONLY when that is the selected 
// method of payment.

let emailAddress = document.getElementById('email');
let cardNumber = document.getElementById('cc-num');
let zipCode = document.getElementById('zip');
let cvv = document.getElementById('cvv');
let form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    let nameValue = name.value;
    let nameTest = /^[a-z ,.'-]+$/i.test(nameValue);

    let emailValue = emailAddress.value;
    let emailTest = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/i.test(emailValue);

    let cardValue = cardNumber.value;
    let cardNumberTest = /^\b\d{13,16}\b$/.test(cardValue);

    let zipValue = zipCode.value;
    let zipTest = /^\d{5}$/.test(zipValue);

    let cvvValue = cvv.value;
    let cvvTest = /^\d{3}$/.test(cvvValue);

    if ( !nameTest ) {
        e.preventDefault();
        name.parentNode.classList.remove('valid');
        name.parentNode.classList.add('not-valid');
        name.parentNode.lastElementChild.style.display = 'block';
    } else {
        name.parentNode.classList.remove('not-valid');
        name.parentNode.classList.add('valid');
        name.parentNode.lastElementChild.style.display = 'none';
    } 

    
// In the for loop below, I am supposed to target the parent element for the activities. The parent element is the fieldset element. Since
// I referenced the fieldset element in the variable registerForActivities, I didn't use .parentNode because that is already the
// parent element. Below, all of the if statements are being used to validate the inputs with regex to make sure no required fields are missing.

    let numberChecked = 0;
    for (let i = 0; i < activities.length; i++) {
        if (activities[i].checked === true) {
            numberChecked += 1;
            registerForActivities.classList.remove('not-valid');
            registerForActivities.classList.add('valid');
            registerForActivities.lastElementChild.style.display = 'none';
        }   
    }

    if (numberChecked === 0) {
        e.preventDefault();
        registerForActivities.classList.remove('valid');
        registerForActivities.classList.add('not-valid');
        registerForActivities.lastElementChild.style.display = 'block';
    }

    if ( !emailTest ) {
        e.preventDefault();
        emailAddress.parentNode.classList.remove('valid');
        emailAddress.parentNode.classList.add('not-valid');
        emailAddress.parentNode.lastElementChild.style.display = 'block';
    } else {
        emailAddress.parentNode.classList.remove('not-valid');
        emailAddress.parentNode.classList.add('valid');
        emailAddress.parentNode.lastElementChild.style.display = 'none';
    }

    if ( secondChild.selected === true ) { 
        
        if ( !cardNumberTest ) {
            e.preventDefault();
            cardNumber.parentNode.classList.remove('valid');
            cardNumber.parentNode.classList.add('not-valid');
            cardNumber.parentNode.lastElementChild.style.display = 'block';
        } else {
            cardNumber.parentNode.classList.remove('not-valid');
            cardNumber.parentNode.classList.add('valid');
            cardNumber.parentNode.lastElementChild.style.display = 'none';
        }
        

        if ( !zipTest ) {
            e.preventDefault();
            zipCode.parentNode.classList.remove('valid');
            zipCode.parentNode.classList.add('not-valid');
            zipCode.parentNode.lastElementChild.style.display = 'block';
        } else {
            zipCode.parentNode.classList.remove('not-valid');
            zipCode.parentNode.classList.add('valid');
            zipCode.parentNode.lastElementChild.style.display = 'none';
        }

        if ( !cvvTest ) {
            e.preventDefault();
            cvv.parentNode.classList.remove('valid');
            cvv.parentNode.classList.add('not-valid');
            cvv.parentNode.lastElementChild.style.display = 'block';
        } else {
            cvv.parentNode.classList.remove('not-valid');
            cvv.parentNode.classList.add('valid');
            cvv.parentNode.lastElementChild.style.display = 'none';
        }
    }
});

// Below I have referenced the checkbox input and stored it in the variable activities and added focus and blur event listeners
// to that variable so that when tabbing through the different inputs, the checkboxes get a blue border when selected. I did this
// by looping through all 7 checkbox inputs and adding a class of focus to the currently in use checkbox and removing that class
// when that checkbox is no longer in focus.


let activities = document.querySelectorAll('input[type="checkbox"]');

console.log(activities);

for ( let i = 0; i < activities.length; i++ ) {
    activities[i].addEventListener('focus', (e) => {
        e.target.parentNode.classList.add('focus');
    });

    activities[i].addEventListener('blur', (e) => {
        e.target.parentNode.classList.remove('focus');
    });
};

// Extra credit for real-time error message using a 'keyup' listener.


let message = document.createElement('div');
let paymentMethodBox = document.querySelector('.payment-methods');
paymentMethodBox.appendChild(message);
message.style.display = 'none';
message.insertAdjacentHTML('beforeend', '<p id="messageText"></p>');
let messageText = document.querySelector('#messageText');
messageText.style.color = 'red';
messageText.style.border = '1px solid red';
messageText.style.padding = '9px';


cardNumber.addEventListener('keyup', (e) => {
    if ( e.target.value.length < 13 || e.target.value.length > 16) {
        console.log(e.target.value);
        message.style.display = '';
        messageText.innerHTML = 'Please enter a number that is between 13 and 16 digits long.';
    } else {
    
        message.style.display = 'none';
    }
});

// Extra credit for a conditional error message for the email input

let basicInfoBox = document.querySelector('.basic-info-and-shirt-box');
let emailMessage = document.createElement('div');
basicInfoBox.appendChild(emailMessage);
emailMessage.style.display = 'none';
emailMessage.insertAdjacentHTML('beforeend', '<p id="emailMessageText"></p>');
let emailMessageText = document.getElementById('emailMessageText');
emailMessageText.style.color = 'red';
emailMessageText.style.border = '1px solid red';
emailMessageText.style.padding = '9px';


form.addEventListener('submit', (e) => {
    e.target = emailAddress;
    if ( emailAddress.value === '' ) {
        emailMessage.style.display = '';
        emailMessageText.innerHTML = 'An email address is required to move forward with registration.';
    } else {
        emailMessage.style.display = 'none';
    }
});

// Extra credit: Prevent users from registering for conflicting activities

let checkboxes = document.querySelectorAll('.activities input');

registerForActivities.addEventListener('change', (e) => {
    let clicked = e.target;
    let clickedType = clicked.getAttribute('data-day-and-time');
    
    for ( let i = 0; i < checkboxes.length; i++ ) {
        let checkboxType = checkboxes[i].getAttribute('data-day-and-time');
        if ( checkboxType === clickedType && clicked !== checkboxes[i] ) {
            if ( clicked.checked ) {
                checkboxes[i].disabled = true; 
            } else {
                checkboxes[i].disabled = false;
            }
        }
    }
    
});











