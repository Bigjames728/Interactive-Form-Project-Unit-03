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

color.disabled = true;

design.addEventListener('change', (e) => {
    color.disabled = false;

    for ( let i = 0; i < colorOption.length; i++ ) {
        let value = e.target.value;
        let shirtTheme = document.getElementById('color').getAttribute('data-theme');

        if ( value === shirtTheme ) {

        }

        console.log(value);
        console.log(shirtTheme);
    }
    
    

});



console.log(design);
console.log(color);
console.log(colorOption);

