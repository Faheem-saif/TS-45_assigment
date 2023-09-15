"use strict";
//Personal Message: Store a person’s name in a variable, and print a message to that person. Your message should be simple, such as, “Hello Eric, would you like to learn some Python today?”
var pname = "Hello Faheem";
console.log(`"${pname},would you like to learn some python toaday?"`);
// 2. Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
var Nname = " faheem ali saif ";
console.log(`The name in uppercase is: ${Nname.toUpperCase()}`);
console.log(`The name in Lowercase is: ${Nname.toLowerCase()}`);
console.log(`The name in Tiitlecase is: ${Nname.split(" ").map((name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()).join(" ")}`);
//3.Famous Quote: Find a quote from a famous person you admire. Print the quote and the name of its author. Your output should look something like the following, including the quotation marks:
// Albert Einstein once said, “A person who never made a mistake never tried anything new.”
var Aname = "– nelson mandela";
console.log(`${Aname.split(" ").map((name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()).join(" ")} once said,“A winner is a dreamer who never gives up.”`);
//.4 Famous Quote 2: Repeat Exercise 4, but this time store the famous person’s name in a variable called famous_person. Then compose your message and store it in a new variable called message. Print your message.
var famous_person = "– nelson mandela";
var message = 'once said,“A winner is a dreamer who never gives up."';
console.log(`${Aname.split(" ").map((name) => name.charAt(0).toUpperCase() + name.slice(1).toLowerCase()).join(" ")} ${message} `);
//.5Stripping Names: Store a person’s name, and include some whitespace characters at the beginning and end of the name. Make sure you use each character combination, "\t" and "\n", at least once. Print the name once, so the whitespace around the name is displayed. Then print the name after striping the white spaces.
var Person_name = `\t\n\n\n\n\nFaheem saif\n\t\n`;
console.log(`Name with whitespace: ${Person_name}`);
console.log(`Name without whitespace: ${Person_name.replace(/\s+/g, "")}`);
// .6 Number Eight: Write addition, subtraction, multiplication, and division operations that each result in the number 8. Be sure to enclose your operations in print statements to see the results
var numbers = [5, 3, 13, 2];
var addition = numbers[0] + numbers[1];
var subtraction = numbers[2] - numbers[0];
var Multiplication = (numbers[0] * numbers[3]) - numbers[3];
var Division = (numbers[1] + numbers[2]) / numbers[3];
console.log(`
  ${addition}
  ${subtraction}
  ${Multiplication}
  ${Division}
`);
//.7 You should create four lines that look like this:
console.log("-------------------------");
for (let index = 0; index <= 4; index++) {
    if (index <= 3) {
        console.log(5 + 3);
        console.log("-------------------------");
    }
}
// .8 Favorite Number: Store your favorite number in a variable. Then, using that variable, create a message that reveals your favorite number. Print that message.
var favoritre_No = 7;
console.log(`My favorite no is ${favoritre_No}. `);
//.10 Adding Comments: Choose two of the programs you’ve written, and add at least one comment to each. If you don’t have anything specific to write because your programs are too simple at this point, just add your name and the current date at the top of each program file. Then write one sentence describing what the program does.
var numbers = [5, 3, 13, 2]; //i use array for practce no to add and other operations
var addition = numbers[0] + numbers[1];
var subtraction = numbers[2] - numbers[0];
var Multiplication = (numbers[0] * numbers[3]) - numbers[3];
var Division = (numbers[1] + numbers[2]) / numbers[3];
console.log(`
  ${addition}
  ${subtraction}   // here all the output wiil be 8 
  ${Multiplication}
  ${Division}
`);
//.11 Names: Store the names of a few of your friends in a array called names. Print each person’s name by accessing each element in the list, one at a time.
var piaic_group = ["Manan", "Zafeer ", "Ali Hamza", "Anees", "Faheem"];
console.log(piaic_group[1]);
console.log(piaic_group[0]);
//.12 Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name, print a message to them. The text of each message should be the same, but each message should be personalized with the person’s name.
for (let index = 0; index < piaic_group.length; index++) {
    console.log(`Hello ${piaic_group[index]} you are going to be succesful soon.`);
}
;
//. 13 Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that stores several examples. Use your list to print a series of statements about these items, such as “I would like to own a Honda motorcycle.”
var vehicle = ["Motorcycle", "Car😍", "Cycle",];
console.log(`I love to drive ${vehicle[0]} at night on canal road`);
console.log(`I am going to buy Audi a5 1st generation liftpack edition ${vehicle[1]}`);
console.log(`I Used alot ${vehicle[2]} in  my Matric Level`);
//.14 Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? Make a list that includes at least three people you’d like to invite to dinner. Then use your list to print a message to each person, inviting them to dinner.
var dinner_invite = ["Noman", "Asim", "Faheem"];
for (let index = 0; index < dinner_invite.length; index++) {
    console.log(`Hello Mr.${dinner_invite[index]} I arranged a Dinner party for you so Please reach for more fun`);
}
//.15 Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite.
console.log("-----------------------------------------------");
for (let index = 0; index < dinner_invite.length; index++) {
    if (dinner_invite[index] == "Faheem") {
        console.log(`${dinner_invite[index]} I understand you are out of station So don't woory i will handle situation.`);
        dinner_invite.pop();
        dinner_invite.push("Manan", "Zafeer");
    }
    console.log(`Hello Mr.${dinner_invite[index]} I arranged a Dinner party for you so Please reach for more fun`);
}
// //.16 More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner.
// • Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.
console.log("---------------for end print--------------------------------");
for (let index = 0; index < dinner_invite.length; index++) {
    if (dinner_invite[index] == "Faheem") {
        setTimeout(() => {
            console.log(`${dinner_invite[index]} I understand you are out of station So don't woory i will handle situation.`);
            dinner_invite.pop();
        }, 2000);
        dinner_invite.push("Manan", "Zafeer");
    }
    console.log(`Hello Mr.${dinner_invite[index]} I arranged a Dinner party for you so Please reach for more fun`);
}
// • Add one new guest to the beginning of your array.
dinner_invite.unshift("Sami Saif");
console.log(dinner_invite);
// • Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list. • Print a new set of invitation messages, one for each person in your list.
dinner_invite.splice(2, 0, "Umair"); // at middle add
console.log(dinner_invite);
//to append in last
dinner_invite.push("Umer");
console.log(dinner_invite);
// .17Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.
// • Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.
console.log(`Hello Everyone The Table  is not available for many so we have a table for 2 person so kindly coperate and sorry for the inconvinience . we will arranged another day `);
// • Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.
do {
    dinner_invite.pop();
} while (dinner_invite.length > 2);
console.log(dinner_invite);
let TotalNo = dinner_invite.length;
// • Print a message to each of the two people still on your list, letting them know they’re still invited.
console.log(`Hello ${dinner_invite} both of you are still invited. `);
// • Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.
console.log(`Mr ${dinner_invite.pop()} you are removed`);
console.log(`Mr ${dinner_invite.pop()} you are removed`);
console.log(dinner_invite);
console.log("--------------------------------------");
//.18 Seeing the World: Think of at least five places in the world you’d like to visit.
// • Store the locations in a array. Make sure the array is not in alphabetical order.
var LocName = ["Iefel tower", "Burj Khalifa", "Chinese Market", "Dubai Market", "New york city"];
// • Print your array in its original order.
console.log(LocName);
// • Print your array in alphabetical order without modifying the actual list.
console.log(LocName.sort());
// • Show that your array is still in its original order by printing it.
console.log(LocName);
// • Print your array in reverse alphabetical order without changing the order of the original list.
console.log(LocName.sort().reverse());
// • Show that your array is still in its original order by printing it again.
console.log(LocName);
// • Reverse the order of your list. Print the array to show that its order has changed.
console.log(LocName.reverse());
// • Reverse the order of your list again. Print the list to show it’s back to its original order.
console.log(LocName);
// • Sort your array so it’s stored in alphabetical order. Print the array to show that its order has been changed.
LocName = LocName.sort();
console.log(LocName);
//• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to show that its order has changed.
LocName = LocName.reverse();
console.log(LocName);
//.19 Dinner Guests: Working with one of the programs from Exercises 14 through 18, print a message indicating the number of people you are inviting to dinner.
console.log(`I invited about: ${TotalNo}  for the dinner`);
console.log("----------------------------------------------");
//.20 Think of something you could store in a array. For example, you could make a list of mountains, rivers, countries, cities, languages, or anything else you’d like. Write a program that creates a list containing these items.
let mountains = ["karakaram", "Himaliya", "Hindokush"];
let rivers = ["Ravi", "chanab"];
let countries = ["America", "China", "Dubai"];
let cities = ["Lahore", 'Islamabad'];
let languages = ["Pujabi", "sindhi"];
console.log(mountains.concat(rivers).concat(cities).concat(countries).concat(languages));
console.log("----------------------------------------------");
// .21 They think of something you could store in a TypeScript Object. Write a program that creates Objects containing these items.
let Faheem = {
    Fname: "Faheem",
    Lname: "Saif",
    Age: 22
};
console.log(Faheem);
console.log("----------------------------------------------");
//. 22 Intentional Error: If you haven’t received an array index error in one of your programs yet, try to make one happen. Change an index in one of your programs to produce an index error. Make sure you correct the error before closing the program.
//. 23 Conditional Tests: Write a series of conditional tests. Print a statement describing each test and your prediction for the results of each test. Your code should look something like this:
// let car = 'subaru';
// console.log("Is car == 'subaru'? I predict True.")
// console.log(car == 'subaru')
// • Look closely at your results, and make sure you understand why each line evaluates to True or False.
// • Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
let mycarcollection = {
    first: "Audii a5",
    second: "Mercedes E class",
    third: "Land Cruiser",
    fourth: "Sonata",
    fifth: "civic",
};
console.log("is 'audi a5' in my collection? yes absolutely right");
console.log(mycarcollection.first == "Audii a5");
console.log("is 'audi a2' in my collection? yes absolutely wrong");
console.log(mycarcollection.first == "Audii a2");
console.log("is 'Mercedes E class' in my collection? yes absolutely right");
console.log(mycarcollection.second == "Mercedes E class");
console.log("is 'audi a7' in my collection? yes absolutely wrong");
console.log(mycarcollection.second == "Audii a7");
console.log("is 'Land Cruiser' in my collection? yes absolutely right");
console.log(mycarcollection.third == "Land Cruiser");
console.log("is 'audi a4' in my collection? yes absolutely wrong");
console.log(mycarcollection.third == "Audii a5");
console.log("is 'Sonata' in my collection? yes absolutely right");
console.log(mycarcollection.fourth == "Sonata");
console.log("is 'c class' in my collection? yes absolutely wrong");
console.log(mycarcollection.fourth == "c lass");
console.log("is 'civic' in my collection? yes absolutely right");
console.log(mycarcollection.fifth == "civic");
console.log("is 'audi etron' in my collection? yes absolutely wrong");
console.log(mycarcollection.fifth == "Audii etron");
console.log("-------------------------------");
// //.24 More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings
// • Tests using the lower case function
// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to
// • Tests using "and" and "or" operators
// • Test whether an item is in a array
// • Test whether an item is not in a array
// all have been done already above;
//.25 Alien Colors #1: Imagine an alien was just shot down in a game. Create a variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.
// • Write an if statement to test whether the alien’s color is green. If it is, print a message that the player just earned 5 points.
// • Write one version of this program that passes the if test and another that fails. (The version that fails will have no output.)
var alien_color = "green";
if (alien_color == "green") {
    console.log("The player just earned 5 points.");
}
else {
    null;
}
//.26 Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and write an if-else chain.
// • If the alien’s color is green, print a statement that the player just earned 5 points for shooting the alien.
if (alien_color == "green") {
    console.log("The player just earned 5 points for shooting the alien.");
}
// • If the alien’s color isn’t green, print a statement that the player just earned 10 points.
else if (alien_color != "green") {
    console.log("The player just earned 10 points.");
}
// • Write one version of this program that runs the if block and another that runs the else block.
else
    (alien_color != "green");
{
    console.log("Here the else block run");
}
//.27 Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.
// • If the alien is green, print a message that the player earned 5 points.
if (alien_color == "green") {
    console.log("The player just earned 5 points.");
}
// • If the alien is yellow, print a message that the player earned 10 points.
alien_color = "yellow";
if (alien_color == "yellow") {
    console.log("The player earned 10 points.");
}
// • If the alien is red, print a message that the player earned 15 points.
alien_color = "red";
if (alien_color == "yellow") {
    console.log("The player earned 15 points.");
}
console.log("-----------------------------");
//.28 Stages of Life: Write an if-else chain that determines a person’s stage of life. Set a value for the variable age, and then:
// • If the person is less than 2 years old, print a message that the person is a baby.
var p_age = 1;
if (p_age < 2) {
    console.log("The person is a baby");
}
// • If the person is at least 2 years old but less than 4, print a message that the person is a toddler.
p_age = 3;
if (p_age >= 2 && p_age < 4) {
    console.log("The person is a toddler.");
}
// • If the person is at least 4 years old but less than 13, print a message that the person is a kid.
p_age = 12;
if (p_age >= 4 && p_age < 13) {
    console.log("The person is a kid.");
}
// • If the person is at least 13 years old but less than 20, print a message that the person is a teenager.
p_age = 15;
if (p_age >= 13 && p_age < 20) {
    console.log("The person is a teenager.");
}
// • If the person is at least 20 years old but less than 65, print a message that the person is an adult.
p_age = 45;
if (p_age >= 20 && p_age < 65) {
    console.log("The person is a Adult.");
}
// • If the person is age 65 or older, print a message that the person is an elder.
p_age = 67;
if (p_age >= 65) {
    console.log("The person is a Elder.");
}
console.log("----------------------------------");
//.29 Favorite Fruit: Make a array of your favorite fruits, and then write a series of independent if statements that check for certain fruits in your array.
// • Make a array of your three favorite fruits and call it favorite_fruits.
var favorite_fruits = ["banana", "Cherry", "Lychee"];
// • Write five if statements. Each should check whether a certain kind of fruit is in your array. If the fruit is in your array, the if block should print a statement, such as You really like bananas!
if (favorite_fruits[0] == "banana") {
    console.log("You really like bananas!");
}
if (favorite_fruits[0] == "apple") {
    console.log("You really like bananas!");
}
if (favorite_fruits[2] != "cherry") {
    console.log("You really like cherry!");
}
if (favorite_fruits[2] == "kiwi") {
    console.log("You really like bananas!");
}
if (favorite_fruits[2] == "Lychee") {
    console.log("You really like lychee!");
}
//.30 Hello Admin: Make a array of five or more usernames, including the name 'admin'. Imagine you are writing code that will print a greeting to each user after they log in to a website. Loop through the array, and print a greeting to each user:
var username = ["admin", "faheem", "Manan", "Zafeer", "Ali hanmza"];
// • If the username is 'admin', print a special greeting, such as Hello admin, would you like to see a status report?
for (let index = 0; index < username.length; index++) {
    if (username[index] == "admin") {
        console.log(`Hello ${username[index]}, would you like to see a status report?`);
    }
    // • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
    if (username[index] != "admin") {
        console.log(`Hello ${username[index]},  thank you for logging in again.`);
    }
}
console.log("------------------------------------------");
//.31 No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.
// • Remove all of the usernames from your array, and make sure the correct message is printed.
// • If the list is empty, print the message We need to find some users!
username = [];
console.log(username);
if (username.length === 0) {
    console.log("We need to find some users!");
}
// • Otherwise, print a generic greeting, such as Hello Eric, thank you for logging in again.
if (username.length != 0) {
    for (let index = 0; index < username.length; index++) {
        if (username[index] == "admin") {
            console.log(`Hello ${username[index]}, would you like to see a status report?`);
        }
        if (username[index] != "admin") {
            console.log(`Hello ${username[index]},  thank you for logging in again.`);
        }
    }
}
console.log("------------------------------------");
//.32 Checking Usernames: Do the following to create a program that simulates how websites ensure that everyone has a unique username.
// • Make a list of five or more usernames called current_users.
var current_users = ["admin", "faheem", "Manan", "Zafeer", "Ali hanmza"];
// • Make another list of five usernames called new_users. Make sure one or two of the new usernames are also in the current_users list.
var new_users = ["Hamza", "asad", "faheem", "umer", "Manan"];
;
for (let index = 0; index < current_users.length; index++) {
    for (let j = 0; j < new_users.length; j++) {
        if (current_users[index] == new_users[j]) {
            console.log(`This name '${current_users[index]}' is already occupied so,enter a new username`);
        }
    }
}
// • Loop through the new_users list to see if each new username has already been used. If it has, print a message that the person will need to enter a new username. If a username has not been used, print a message saying that the username is available.
// • Make sure your comparison is case insensitive. If 'John' has been used, 'JOHN' should not be accepted.
//.33 Ordinal Numbers: Ordinal numbers indicate their position in a array, such as 1st or 2nd. Most ordinal numbers end in th, except 1, 2, and 3.
// • Store the numbers 1 through 9 in a array.
var ordinal = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// • Loop through the array.
// • Use an if-else chain inside the loop to print the proper ordinal ending for each number. Your output should read "1st 2nd 3rd 4th 5th 6th 7th 8th 9th", and each result should be on a separate line.
for (let index = 0; index < ordinal.length; index++) {
    if (ordinal[index] == 1) {
        console.log(`${ordinal[index]}st`);
    }
    else if (ordinal[index] == 2) {
        console.log(`${ordinal[index]}nd`);
    }
    else if (ordinal[index] == 3) {
        console.log(`${ordinal[index]}rd`);
    }
    else if (ordinal[index] == 4) {
        console.log(`${ordinal[index]}th`);
    }
    else if (ordinal[index] == 5) {
        console.log(`${ordinal[index]}th`);
    }
    else if (ordinal[index] == 6) {
        console.log(`${ordinal[index]}th`);
    }
    else if (ordinal[index] == 7) {
        console.log(`${ordinal[index]}th`);
    }
    else if (ordinal[index] == 8) {
        console.log(`${ordinal[index]}th`);
    }
    else if (ordinal[index] == 9) {
        console.log(`${ordinal[index]}th`);
    }
}
console.log("-----------------------------------");
//.34 Pizzas: Think of at least three kinds of your favorite pizza. Store these pizza names in a array, and then use a for loop to print the name of each pizza.
var pizza_name = ["fajita", "Tikka special", "crown diagonal"];
for (let index = 0; index < pizza_name.length; index++) {
    console.log(pizza_name[index]);
    // • Modify your for loop to print a sentence using the name of the pizza instead of printing just the name of the pizza. For each pizza you should have one line of output containing a simple statement like I like pepperoni pizza.
    console.log(`i like ${pizza_name[index]} pizza`);
}
// • Add a line at the end of your program, outside the for loop, that states how much you like pizza. The output should consist of three or more lines about the kinds of pizza you like and then an additional sentence, such as I really love pizza!
console.log("All are my favorite pizza .I really love pizza! ");
//. 35 Animals: Think of at least three different animals that have a common characteristic. Store the names of these animals in a list, and then use a for loop to print out the name of each animal. • Modify your program to print a statement about each animal, such as A dog would make a great pet. • Add a line at the end of your program stating what these animals have in common. You could print a sentence such as Any of these animals would make a great pet!
var animals = ["dog", "cat", "horse"];
for (let index = 0; index < animals.length; index++) {
    console.log(animals[index]);
    // setTimeout(function(){
    console.log(`A ${animals[index]} would make a great pet.`);
    // },2000); 
    // }
    // setTimeout(function(){
    console.log("All these are loyal and behave friendly by their Owner");
    // },2000); 
    console.log('----------------------------------------');
    //.36 T-Shirt: Write a function called make_shirt() that accepts a size and the text of a message that should be printed on the shirt. The function should print a sentence summarizing the size of the shirt and the message printed on it. Call the function.
    function make_shirt(a, b) {
        console.log(`The size of the shirt is ${a} and baging will be ${b}`);
    }
    make_shirt(36, "Hello Men");
    console.log("--------------------------");
}
//.37 Large Shirts: Modify the make_shirt() function so that shirts are large by default with a message that reads I love TypeScript. Make a large shirt and a medium shirt with the default message, and a shirt of any size with a different message.
function make_shirt(a, b) {
    if (a == 25 || a == 35) {
        console.log(`The size of the shirt is ${a} and print on will be ${b}`);
    }
    else if (a != 25 || 35) {
        console.log(`The size of the shirt is custom ${a} and print on will be ${b}`);
    }
}
let size = {
    small: 25,
    large: 35
};
make_shirt(size.small, "I love typescript");
make_shirt(size.large, "I love Typescript ");
make_shirt(37, "hello Men");
console.log("--------------------------");
//.38 cities: Write a function called describe_city() that accepts the name of a city and its country. The function should print a simple sentence, such as Karachi is in Pakistan. Give the parameter for the country a default value. Call your function for three different cities, at least one of which is not in the default country.
function descrbe_city(city, country = "pakistan") {
    console.log(`${city} is in ${country}`);
}
descrbe_city("Lahore");
descrbe_city("Islamabad");
descrbe_city("New york", "America");
console.log("--------------------------");
//.39 City Names: Write a function called city_country() that takes in the name of a city and its country. The function should return a string formatted like this:
// "Lahore, Pakistan"
// Call your function with at least three city-country pairs, and print the value that’s returned.
function city_country(city, country) {
    console.log(`"${city}, ${country}"`);
}
city_country("karachi", "Pakistan");
city_country("Candy", "Sri lanka");
city_country("New York", "America");
//.40 Album: Write a function called make_album() that builds a Object describing a music album. The function should take in an artist name and an album title, and it should return a Object containing these two pieces of information. Use the function to make three dictionaries representing different albums. Print each return value to show that Objects are storing the album information correctly. Add an optional parameter to make_album() that allows you to store the number of tracks on an album. If the calling line includes a value for the number of tracks, add that value to the album’s Object. Make at least one new function call that includes the number of tracks on an album.
//.41 Great Magicians: Start with a copy of your program from Exercise 39. Write a function called make_great() that modifies the array of magicians by adding the phrase the Great to each magician’s name. Call show_magicians() to see that the list has actually been modified.
var magiciansName = ["Faheem", "zafeer", "Manan"];
function make_great(a) {
    for (let index = 0; index < a.length; index++) {
        console.log((`The Great "${a[index]}"`));
        // by map function we can also able to get the results
    }
}
function show_magicians() {
    make_great(magiciansName);
}
show_magicians();
console.log("--------------------------");
//.42 Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name.
function show_magicians2() {
    console.log(`The original Array:     ${magiciansName}`);
    var newarr = magiciansName.map((a) => "The greate " + a);
    console.log(`the Modified Array:      ${newarr}`);
}
show_magicians2();
// .43 Sandwiches: Write a function that accepts a array of items a person wants on a sandwich. The function should have one parameter that collects as many items as the function call provides, and it should print a summary of the sandwich that is being ordered. Call the function three times, using a different number of arguments each time.
console.log("---------------------");
function SandwichSummar(a) {
    console.log(`The person ordered : ${a}`);
}
SandwichSummar(["sandwich1", "sandwich2"]);
SandwichSummar(["sandwich3", "sandwich4"]);
SandwichSummar(["sandwich5", "sandwich6"]);
console.log("------------------------------");
//.44 Cars: Write a function that stores information about a car in a Object. The function should always receive a manufacturer and a model name. It should then accept an arbitrary number of keyword arguments. Call the function with the required information and two other name-value pairs, such as a color or an optional feature. Print the Object that’s returned to make sure all the information was stored correctly.
function set_data(a, b, ...args) {
    let car_data = {
        Manufacturer: a,
        Model: b
    };
    console.log(car_data);
}
set_data("Audii", "2013");
set_data("Audii", "2013", "Blue");
set_data("Audii", "2013", "blue", "sportback");
