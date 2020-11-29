# Interactive Form Project Unit 03

Using a keyup event listener on my credit card number input, I created real time error messaging.
This means that as a user starts to type in numbers, it will show an error message live until the
user reaches 11 digits, or passes the 16 digit mark.


I also added a submit event listener on the form and defined the target as the email input. This way, if a user submits the form without an email, it will tell them they need to enter an email address. The only problem with this is that the message shows up below the job role selector and I would like it 
to show up right above that and right below the email input. I tried using insertBefore() but couldn't get it to function correctly there. 

 
