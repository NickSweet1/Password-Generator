Password Generator <br>
This password generator will take input from a user and output a truly randomized password based on the given criteria.  <br>

Link to deployed application: https://nicksweet1.github.io/Password-Generator/ <br>

![Screenshot (12)](https://user-images.githubusercontent.com/111986248/236012624-8154a8f0-2293-4d26-bf7c-8e035961519f.png)

Description <br>
This program starts by declaring a function that will chose lower case, upper case, numbers, and symbols at random. <br> It then leads into the generatePassword function that will get the length of the password (as a string) and a while loop to ensure that the string meets all criteria. <br>The function then uses confirm to recieve boolean values from the user for each of the inputs. Followed by a while loop, this will ensure that the user has selected at least 1 (ONE) choice. <br> I then used if statements to and for loops to itterate though the random arrays that were made and add those to the userChoices array. <br>The final for loop will run for the length of the password. Every iteration of the for loop adds a random index of the userChoices array to the password variable. <br> If you open the console in Chrome Dev Tools, it will print the value of userChoices. This is the array of every possible choice that the password variable is choosing from. <br>

Executing program <br>
To execute the program, simply click the "Generate Password" button to be prompted with the questions that will create your randomized password. <br>

Authors<br>
Nicholas Sweet<br>

Assistance<br>
Assistance was provided by Joshua Vaneps @ https://github.com/JoshuaVaneps<br>
Inspiration for the CSS gif background code from Will Zealot @ https://github.com/WillZealot <br>
Guidance and support was provided by Sara Neves Pereira via bootcampspot tutoring.<br>
Ask BCS was also utilized as a resource.



