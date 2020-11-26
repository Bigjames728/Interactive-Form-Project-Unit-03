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

// Below I disabeled the color menu to then make it only appear once someone has chosen a theme for a shirt in the shirt theme menu.
// Attempting to fix the addEventListener and if statement inside.

// Update: I fixed the below listener by adding [i] onto the shirtTheme variable as well as after color in the if statement. 

color.disabled = true;

design.addEventListener('change', (e) => {
    color.disabled = false;

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
    if ( e.target.value === 'Credit Card' ) {
        creditCard.style.display = 'block';
        paypal.style.display = 'none';
        bitcoin.style.display = 'none';
    } else if ( e.target.value === 'PayPal' ) {
        paypal.style.display = 'block';
        creditCard.style.display = 'none';
        bitcoin.style.display = 'none';
    } else if ( e.target.value === 'Bitcoin' ) {
        bitcoin.style.display = 'block';
        creditCard.style.display = 'none';
        paypal.style.display = 'none';
    }
});








