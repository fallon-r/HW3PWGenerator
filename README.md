# HW3PWGenerator


This homework was a bit difficult. As someone mentioned in class, a major stumbling block with JS is that it's hard to start from scratch. With HTML and CSS, there's and the elements do things in a demonstrable way. Javascript requires a lot more forethought. As was mentioned, starting with the pseudocode is very useful. 

One thing I did that was helpful was to add an input list. This was better, and it felt a bit more professional looking than window prompts.This provided me an opportunity to use the *blur* event listener, which i had hitherto not heard of. If you enter something that is smaller than 8 or bigger than 128 for the password length, the button is disabled and let's you know if the password is too short or long. 

A new frustrating problem is verifying if the password generated contains the number of specific characters chosen by the user (i.e the user wants 3 numbers in an 8 character passwor => that password should include 3 numbers.) I have not been able to crack this yet. As it stands, the password includes those in the  `char` array, but does not guarantee the presence of that specific character. 
