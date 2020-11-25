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

