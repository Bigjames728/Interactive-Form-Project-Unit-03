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
        }
    }
});

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




