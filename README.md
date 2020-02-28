# HW3PWGenerator

*2/28/20 Update*

![How I feel submitting this](https://media.giphy.com/media/jORpjBkSvULm/giphy.gif)

This was the first assignment that was really challenging, but I learned a lot of important lessons in doing this. I had a mountain of issues that were largely self created. Some of these were: 

* I tried way too hard to make this way too fancy. Initially, I had number inputs for the special characters. The idea was to create a password that were random and complex. This proved to be my biggest stumbling block. I had no success in finding a method to random replace a character in the output password a given number of times. In my research, it does not seem that any password generator does something like this. Furthermore, my thinking was flawed; this customization would not make the resulting password any more secure or random. 
* I fixated on certain issues for much longer than necessary. "Don't trip over dollars to pick up pennies" is a saying that comes to mind when I think of my experience with this project. 

Ultimately, I have given up on the bells and whistles. I realized I should have focused on creating a working product instead of getting hung up on functionality that was not necessary or particularly useful. My hubris necessitated an extension, which is a huge bummer. That said, I am done and everything works. 



As someone mentioned in class, a major stumbling block with JS is that it's hard to start from scratch. With HTML and CSS, there's and the elements do things in a demonstrable way. Javascript requires a lot more forethought. As was mentioned, starting with the pseudocode is very useful. 

One thing I did that was helpful was to add an input list. This was better, and it felt a bit more professional looking than window prompts. If you enter something that is smaller than 8 or bigger than 128 for the password length, the button is disabled and let's you know if the password is too short or long. 

A new frustrating problem is verifying if the password generated contains the number of specific characters chosen by the user (i.e the user wants 3 numbers in an 8 character passwor => that password should include 3 numbers.) I have not been able to crack this yet. As it stands, the password includes those in the  `char` array, but does not guarantee the presence of that specific character. 

*"^^ I have given up on this function ^^"*
