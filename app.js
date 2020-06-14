// //  Chapter_01 (Alerts) 

// //question 1. Write a script to greet your website visitor using JS alert box.(chp1) 
// alert("Welcome To My Website. You will find everything here that you need");

// //2. Write a script to display following message on your web page: 
// alert("Error! Please Enter a valid password/password incorrect");

// //3. Write a script to display following message on your web page: (Hint : Use line break) 
// alert("Welcome coders to JS dreamcode.. \nHappy Coding!");

// //4. Write a script to display following messages in sequence: 
// alert("Welcome to JS Land..");
// alert("Happy Coding!");

// //5. Generate the following message through browser’s developer console: 
// console.log("Hello.. I can run javascript code through my web browser console");



// // Chapter_02 

// //question 1. Declare a variable called username. 
// var username;
// //2. Declare a variable called myName & assign to it a string that represents your Full Name.
// var Myname = "Abdullah Amjad";
// // 3. Write script to 
// // a) Declare a JS variable, titled message. 
// // b) Assign “Hello World” to variable message 
// // c) Display the message in alert box. 
// var message;
// message = "Hello World";
// alert(message);

// // 4. Write a script to save student’s bio data in JS variables and show the data in alert boxes. 
// var name = "Abdullah Amjad";
// var age = "20 years old";
// var course = "Certified Mobile Application Development";
// alert(name);
// alert(age);
// alert(course);


// //5. Write a script to display the following alert using one JS variable: 
// var pizza = "PIZZA \nPIZZ \nPIZ \nPI \nP"
// alert(pizza);


// //6. Declare a variable called email and assign to it a string that represents your Email Address(e.g. example@example.com).
// // Show the blow mentioned message in an alert box.(Hint: use string concatenation) 
// var email = "keepcool200@gmail.com";
// alert("My email address is" + " " + email);


// //7. Declare a variable called book & give it the value “A smarter way to learn JavaScript”. 
// //Display the following message in an alert box: 
// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn and explore from the Book" + " " + book);


// //8. Write a script to display this in browser through JS 
// document.write("Yeah! I can write HTML content through JavaScript");


// //9. Store following string in a variable and show in alert and browser through JS 
// //“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬” 
// var symbol = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(symbol);


// //  Chapter_03

// //1. Declare a variable called age & assign to it your age. Show your age in an alert box. 
// var age = 23;
// alert("I am" + " " + age + " " + "years old");


// //2. Declare & initialize a variable to keep track of how many times a visitor has visited a web page.
// //Show his/her number of visits on your web page. For example: “You have visited this site N times”. 
// var n = 12;
// alert("You have visited this site " + n + " times");


// //3. Declare a variable called birthYear & assign to it your birth year. Show the following message in your browser: 
// var birthYear = 1998;
// document.write("My birth year is " + birthYear);
// document.write("<br>")
// document.write("\n" + "Data type of my declared variable is" + " " + typeof birthYear);


// document.write("<br>" + "<br>");


// //4. A visitor visits an online clothing store www.xyzClothing.com . 
// // Write a script to store in variables the following information: 
// // a. Visitor’s name 
// // b. Product title 
// // c. Quantity 
// // i.e. how many products a visitor wants to order 
// // Show the following message in your browser: “John Doe ordered 5 T-shirt(s) on XYZ Clothing store”. 
// var Visitor_name = "John Doe";
// var Product_title = "T-shirt(s)";
// var Quantity = 5;
// document.write(Visitor_name + " " + "ordered" + " " + Quantity + " " + Product_title + " " + "on XYZ Clothing store");


// //  Chapter_04 

// //1. Declare 3 variables in one statement. 
// var name, email, qualification;

// //2. Declare 5 legal & 5 illegal variable names. 

// //5 legal variable names.
// var chat;
// var chatApp;
// var client1;
// var father_name;
// var $name;


// //5 illegal variable names
// // var father name;
// // var @year;
// // var do;
// // var if;
// // var 1stcustomer;


// // 3. Display this in your browser 

// // a)  A heading stating “Rules for naming JS variables” 
// document.write("<h1>Rules for naming JS variables</h1>");

// // b)  Variable names can only contain ______, ______, ______ and ______. For example $my_1stVariable 
// document.write("Variable names can only contain numbers, $ and _. For example: $my_1stVariable." + "<br/>");

// // c) Variables must begin with a ______, ______ or _____. For example $name, _name or name 
// document.write("Variable must begin with a letter, $ or _. For example: $name, _name or name" + "<br/>");

// // d) Variable names are case _________ 
// document.write(" Variable names are case sensitive" + "<br/>");

// // e) Variable names should not be JS _________   
// document.write("Variable names should not be JS keywords" + "<br/>");


// //  Chapter_05

// //1. Write a program that take two numbers & add them in a new variable. Show the result in your browser.  
// var a = 3;
// var b = 5;
// // addition
// var c = a + b;
// document.write("Sum of" + " " + a + " " + "and" + " " + b + " " + "is" + " " + c);


// //2. Repeat task1 for subtraction, multiplication, division & modulus. 

// // subtraction
// var c = a - b;
// document.write("<br>" + "Sub of" + " " + a + " " + "and" + " " + b + " " + "is" + " " + c);

// // multiplication
// var c = a * b;
// document.write("<br>" + "Mul of" + " " + a + " " + "and" + " " + b + " " + "is" + " " + c);

// // division
// var c = a / b;
// document.write("<br>" + "Div of" + " " + a + " " + "and" + " " + b + " " + "is" + " " + c);

// // modulus
// var c = a % b;
// document.write("<br>" + "Mod of" + " " + a + " " + "and" + " " + b + " " + "is" + " " + c);
// document.write("<br>" + "<br>");

// // 3. Do the following using JS Mathematic Expressions 
// // a. Declare a variable.      
// var x;

// //b. Show the value of variable in your browser like “Value after variable declaration is: ??”.
// document.write("Value after variable declaration is:" + " " + x);

// // c. Initialize the variable with some number.
// x = 5;
// document.write("<br>");

// //d. Show the value of variable in your browser like “Initial value: 5”.
// document.write("Initial value: " + " " + x);

// //e. Increment the variable.
// x = ++x;
// document.write("<br>");

// //f. Show the value of variable in your browser like “Value after increment is: 6”.
// document.write("Value after increment is:  " + " " + x);

// //g. Add 7 to the variable.
// x = x + 7;
// document.write("<br>");

// // h. Show the value of variable in your browser like “Value after addition is: 13”.  
// document.write("Value after addition is:   " + " " + x);

// // i. Decrement the variable.
// x = --x;
// document.write("<br>");

// //j. Show the value of variable in your browser like “Value after decrement is: 12”.
// document.write("Value after decrement is: " + " " + x);

// // k. Show the remainder after dividing the variable’s value by 3.
// x = x % 3;
// document.write("<br>");

// // l. Output : “The remainder is : 0”.
// document.write("The remainder is :    " + " " + x);
// document.write("<br>" + "<br>");


// // 4. Cost of one movie ticket is 600 PKR.
// // Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets to a movie. Example output: 
// var ticket = 600;
// var quantity = 5;
// var cost = ticket * quantity;

// document.write("Total cost to buy" + " " + quantity + " " + "tickets to movie is" + " " + cost + "PKR")
// document.write("<br>" + "<br>");


// //5. Write a script to display multiplication table of any number in your browser.
// var no = 4;
// var x = 0;
// document.write(no + " x " + ++x + " = " + (no * x) + "<br/>");
// document.write(no + " x " + ++x + " = " + (no * x) + "<br/>");
// document.write(no + " x " + ++x + " = " + (no * x) + "<br/>");
// document.write(no + " x " + ++x + " = " + (no * x) + "<br/>");
// document.write(no + " x " + ++x + " = " + (no * x) + "<br/>");
// document.write(no + " x " + ++x + " = " + (no * x) + "<br/>");
// document.write(no + " x " + ++x + " = " + (no * x) + "<br/>");
// document.write(no + " x " + ++x + " = " + (no * x) + "<br/>");
// document.write(no + " x " + ++x + " = " + (no * x) + "<br/>");
// document.write(no + " x " + ++x + " = " + (no * x));
// document.write("<br>" + "<br>");

// // 6. The Temperature Converter: It’s hot out! Let’s make a converter based on the steps here. 
// // a.  Store a Celsius temperature into a variable. 
// // b. Convert it to Fahrenheit & output “NNoC is NNoF”. 
// // c. Now store a Fahrenheit temperature into a variable. 
// // d. Convert it to Celsius & output “NNoF is NNoC”. 

// //celcius to farenheight
// var C = 25;
// var F = (C * 9 / 5) + 32;
// document.write(C + "C is " + F + "F" + "<br/>");

// //fahrenheight to celcius
// var F = 70;
// var C = (F - 32) * 5 / 9;
// document.write(F + "F is " + C + "C" + "<br/>");
// document.write("<br>" + "<br>");


// // 7.  Write a program to implement checkout process of a shopping cart system for an e-commerce website. 
// // Store the following in variables 

// // a. Price of item 1 
// // b. Price of item 2 
// var item1_Price = 650;
// var item2_Price = 100;

// // c. Ordered quantity of item 1
// // d. Ordered Quantity of item 2 
// var item_1_quantity = 3;
// var item_2_quantity = 7;

// var item_1_cost = item1_Price * item_1_quantity;
// var item_2_cost = item2_Price * item_2_quantity;

// //  e. Shipping charges 
// var Shipping = 100;

// var total = item_1_cost + item_2_cost + Shipping;

// // Compute the total cost & show the receipt in your browser. 
// document.write("Price of Item 1 is " + item1_Price + "<br/>");
// document.write("Quantity of Item 1 is " + item_1_quantity + "<br/>");
// document.write("Price of Item 2 is " + item2_Price + "<br/>");
// document.write("Quantity of Item 2 is " + item_2_cost + "<br/>");
// document.write("Shipping Charges " + Shipping + "<br/>");
// document.write("Total cost of your order is " + total);
// document.write("<br>" + "<br>");


// //8. Store total marks & marks obtained by a student in 2 variables. 
// // Compute the percentage & show the result in your browser 
// var totalMarks = 980;
// var obttainMarks = 804;
// var Percentage = (totalMarks / obttainMarks) * 100;

// document.write("<h3>" + "Marks Sheet" + "</h3>");
// document.write("Total Marks: " + totalMarks + "<br/>");
// document.write("Marks Obtained: " + obttainMarks + "<br/>");
// document.write("Percentage: " + Percentage);
// document.write("<br>" + "<br>");


// // 9. Assume we have 10 US dollars & 25 Saudi Riyals. Write a script to convert the total currency to Pakistani Rupees. 
// // Perform all calculations in a single expression. 
// // (Exchange rates : 1 US Dollar = 104.80 Pakistani Rupee and 1 Saudi Riyal = 28 Pakistani Rupee) 
// var dollarRate = 104.80;
// var riyalRate = 28;
// var pkr = (10 * dollarRate) + (25 * riyalRate);
// document.write("<h3>" + "Currency Conversion in PKR" + "</h3>");
// document.write("Total Currency in PKR: " + pkr);
// document.write("<br>" + "<br>");


// //10. Write a program to initialize a variable with some number and do arithmetic in following sequence: 
// // a. Add 5 
// // b. Multiply by 10 
// // c. Divide the result by 2 
// // Perform all calculations in a single expression 
// var num = 7;
// num = (((num + 5) * 10) / 2);
// document.write("<h3>" + "Arithmetic Operation in single statement" + "</h3>");
// document.write("Output: " + num);
// document.write("<br>" + "<br>");


// //11. The Age Calculator: Forgot how old someone is? Calculate it! 
// // a. Store the current year in a variable. 
// // b. Store their birth year in a variable. 
// // c. Calculate their 2 possible ages based on the stored values. 
// var currentYear = 2020;
// var birthYear = 1998;
// var Age = currentYear - birthYear;

// document.write("<h3>" + "Age Calculator" + "</h3>");
// document.write("Current Year: " + currentYear + "<br/>");
// document.write("Birth Year: " + birthYear + "<br/>");
// document.write("Your age is: " + Age);


// document.write("<br>" + "<br>");


// // 12. The Geometrizer: Calculate properties of a circle. 
// // a. Store a radius into a variable. 
// // b. Calculate the circumference based on the radius, and output “The circumference is NN”. (Hint : Circumference of a circle = 2 π r , π = 3.142) 
// // Calculate the area based on the radius, and output “The  area is NN”. (Hint : Area of a circle = π r2, π = 3.142) 
// var radius = 7;
// var circumference = 2 * 3.142 * radius;
// var area = 3.142 * radius * radius;

// document.write("<h3>" + "The Geometrizer" + "</h3>");
// document.write("Radius of a Circle: " + radius + "<br/>");
// document.write("The circumference is: " + circumference + "<br/>");
// document.write("The area is: " + area);


// document.write("<br>" + "<br>");


// // 13. The Lifetime Supply Calculator: Ever wonder how much a “lifetime supply” of your favorite snack is? Wonder no more. 
// // a. Store your favorite snack into a variable 
// // b. Store your current age into a variable. 
// // c. Store a maximum age into a variable. 
// // d. Store an estimated amount per day (as a number). 
// // e. Calculate how many would you eat total for the rest of your life. 
// var snack = "Chocalate Chip";
// var age = 22;
// var maxAge = 60;
// var amountPerDay = 3;
// var eat = (maxAge - age) * (365 * amountPerDay);

// document.write("<h3>" + "The Lifetime Supply Calculator" + "</h3>");

// // Output. 
// document.write("Favorite Snack: " + snack + "<br/>");
// document.write("Current Age: " + age + "<br/>");
// document.write("Estimated Maximum Age: " + maxAge + "<br/>");
// document.write("Amount of snacks per day: " + amountPerDay + "<br/>");
// document.write("You will need " + eat + " to last you until the ripe old age of " + maxAge);

// //  Chapter_06 to 09

// //1. Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
// var a = +prompt("Input a number: ");

// document.write("Result" + "<br/>");
// document.write("The value of a is: " + a + "<br/>");
// document.write("..............................................." + "<br/>");
// document.write("<br/>");

// // Pre-Increment
// document.write("The value of ++a is: " + ++a + "<br/>");
// document.write("Now the value of a is: " + a + "<br/>");
// document.write("<br/>");

// // Post- Increment
// document.write("The value of a++ is: " + a++ + "<br/>");
// document.write("Now the value of a is: " + a + "<br/>")
// document.write("<br/>");

// // Pre-Decrement
// document.write("The value of --a is: " + --a + "<br/>");
// document.write("Now the value of a is: " + a + "<br/>");
// document.write("<br/>");

// // Post-Decrement
// document.write("The value of a-- is: " + a-- + "<br/>");
// document.write("Now the value of a is: " + a + "<br/>");
// document.write("<br/>" + "<br/>");


// // 2. What will be the output in variables a, b & result after execution of the following script:
// // var a = 2, b = 1;
// // var result = --a - --b + ++b + b--;
// // Explain the output at each stage:

// var a = 2;
// var b = 1;
// var result = --a - --b + ++b + b--;

// document.write("The value of a is " + a + "<br/>");
// document.write("The value of b is " + b + "<br/>");
// document.write("The result is " + result + "<br/>" + "<br/>");

// document.write("<b>" + "Explanation of Solution" + "</b>" + "<br/>");
// document.write("a = 2, b = 1" + "<br/>");
// document.write("--a  -  --b  +  ++b  +  b--" + "<br/>");
// document.write("--a" + "<br/>");
// document.write("  1" + "<br/>");
// document.write("--a  -  --b" + "<br/>");
// document.write("  1  -   0 " + "<br/>");
// document.write("--a  -  --b  +  ++b" + "<br/>");
// document.write("  1  -   0   +    1 " + "<br/>");
// document.write("--a  -  --b  +  ++b   +  b--" + "<br/>");
// document.write("  1  -   0   +    1   +   1" + "<br/>");
// document.write("  1 +    1   +    1 " + "<br/>");
// document.write("3" + "<br/>");


// document.write("<br/>" + "<br/>");


// //3. Write a program that takes input a name from user & greet the user. 
// var name = prompt("Enter your name");
// document.write("Good Morning!" + " " + name + " " + "Have a nice day.");

// document.write("<br/>" + "<br/>");


// // 4. Write a program to take input a number from user & display it’s multiplication table on your browser.
// // If user does not enter a new number, 
// // multiplication table of 5 should be displayed by default. 
// var no = 5, x = 0;
// var no = +prompt("Enter table no");
// document.write("Table" + "</b>" + "<br/>");
// document.write(no + " x " + ++x + " = " + (no * x) + "<br/>");
// document.write(no + " x " + ++x + " = " + (no * x) + "<br/>");
// document.write(no + " x " + ++x + " = " + (no * x) + "<br/>");
// document.write(no + " x " + ++x + " = " + (no * x) + "<br/>");
// document.write(no + " x " + ++x + " = " + (no * x) + "<br/>");
// document.write(no + " x " + ++x + " = " + (no * x) + "<br/>");
// document.write(no + " x " + ++x + " = " + (no * x) + "<br/>");
// document.write(no + " x " + ++x + " = " + (no * x) + "<br/>");
// document.write(no + " x " + ++x + " = " + (no * x) + "<br/>");
// document.write(no + " x " + ++x + " = " + (no * x));
// document.write("<br/>" + "<br/>");

// // 5. Marksheet
// document.write("<h3>" + "Marksheet" + "</h3>");

// // a) Take three subjects name from user and store them in 3 different variables. 
// subject1 = prompt("Enter Name of Subject 1: ");
// subject2 = prompt("Enter Name of Subject 2: ");
// subject3 = prompt("Enter Name of Subject 3: ");

// // b) Total marks for each subject is 200, store it in another variable.
// var totalMarks = 600;

// // c) Take obtained marks for first subject from user and stored it in different variable.
// subject1Marks = +prompt("Enter Marks of " + subject1);

// // d) Take obtained marks for remaining 2 subjects from user and store them in variables.
// subject2Marks = +prompt("Enter Marks of " + subject2);
// subject3Marks = +prompt("Enter Marks of " + subject3);

// // e) Now calculate total marks and percentage and show the result in browser like this.(Hint: user table)
// var percentage1 = (subject1Marks / 200) * 100;
// var percentage2 = (subject2Marks / 200) * 100;
// var percentage3 = (subject3Marks / 200) * 100;

// var obtainedMarks = (subject1Marks + subject2Marks + subject3Marks);
// var percentage = (obtainedMarks / totalMarks) * 100;
// percentage = percentage.toFixed(3);
// document.write("<Table>");
// document.write("<tr>");
// document.write("<th>" + "Subject" + "</th>");
// document.write("<th>" + "Total Marks" + "</th>");
// document.write("<th>" + "Obtained Marks" + "</th>");
// document.write("<th>" + "Percentage" + "</th>");
// document.write("</tr>");

// document.write("<tr>");
// document.write("<td>" + subject1 + "</td>");
// document.write("<td>" + 200 + "</td>");
// document.write("<td>" + subject1Marks + "</td>");
// document.write("<td>" + percentage1 + "%" + "</td>");
// document.write("</tr>");

// document.write("<tr>");
// document.write("<td>" + subject2 + "</td>");
// document.write("<td>" + 200 + "</td>");
// document.write("<td>" + subject2Marks + "</td>");
// document.write("<td>" + percentage2 + "%" + "</td>");
// document.write("</tr>");

// document.write("<tr>");
// document.write("<td>" + subject3 + "</td>");
// document.write("<td>" + 200 + "</td>");
// document.write("<td>" + subject3Marks + "</td>");
// document.write("<td>" + percentage3 + "%" + "</td>");
// document.write("</tr>");

// document.write("<tr>");
// document.write("<th>" + "</th>");
// document.write("<th>" + totalMarks + "</th>");
// document.write("<th>" + obtainedMarks + "</th>");
// document.write("<th>" + percentage + "%" + "</th>");
// document.write("</tr>");
// document.write("</Table>");





// // Chapter 9 - 11

// // Question 1
// // var city=prompt("Enter the city name")
// // if(city==="Karachi" || city==="karachi")
// // {
// //     alert("Welcome to City of light")
// // }
// // else{
// //     alert("Enter correct name")
// // }


// // Question 2
// // var gender=prompt("Enter your gender")
// // if(gender==="male" || gender=== "Male")
// // {
// //     alert("Good Morning Sir")
// // }
// // else{
// //     alert("Good Morning Ma'am")
// // }

// // Question 3
// // var color = prompt("Enter the color of traffic signal")
// // if(color === "red")
// // {
// //     alert("Must stop")
// // }
// // else if(color === "yellow")
// // {
// //     alert("Ready to move")
// // }
// // else if(color === "green")
// // {
// //     alert("Move now")
// // }


// // Question 4
// // var fuel = +prompt("Enter the fuel Quantity")
// // if(fuel<25)
// // {
// //     alert("Please refill the fuel in your car")

// // }
// // else{
// // alert("Fuel is enough")

// // }


// // Question 5 Part a
// // var a = 4;
// // if (++a === 5){
// // alert("given condition for variable a is true");
// // }

// // It's True

// // Question 5 Part b

// // var b = 82;
// // if (b++ === 83){
// // alert("given condition for variable b is true");
// // }

// // It's False


// // // Question 5 Part c
// // var c = 12;
// // if (c++ === 13){
// // alert("condition 1 is true");
// // }
// // if (c === 13){
// // alert("condition 2 is true");
// // }
// // if (++c < 14){
// // alert("condition 3 is true");
// // }
// // if(c === 14){
// // alert("condition 4 is true");
// // }

// // Condition 2 is true



// // // Question 5 Part d

// // var materialCost = 20000;
// // var laborCost = 2000;
// // var totalCost = materialCost + laborCost;
// // if (totalCost === laborCost + materialCost){
// // alert("The cost equals");
// // }


// // Question 6

// // var marks = +prompt("Enter your Makrs")
// // var per = (marks*100)/300

// // if(per >= 80)
// // {
// //     document.write("Total Marks : 300" + "<br>" + "Marks Obtain : " + marks + "<br>" + "Percentage" + per + "<br>" + "Grade : A-one" + "<br>" + "Excellent")
// // }
// // else if(per>=70 && per < 79)
// // {
// //     document.write("Total Marks : 300" + "<br>" + "Marks Obtain : " + marks + "<br>" + "Percentage" + per + "<br>" + "Grade : A" + "<br>" + "Good")
// // }

// // else if(per >=60 && per < 69)
// // {
// //     document.write("Total Marks : 300" + "<br>" + "Marks Obtain : " + marks + "<br>" + "Percentage" + per + "<br>" + "Grade : B" + "<br>" + "you need to improve")
// // }

// // else if(per < 60)
// // {
// //     document.write("Total Marks : 300" + "<br>" + "Marks Obtain : " + marks + "<br>" + "Percentage" + per + "<br>" + "Grade : F" + "<br>" + "Sorry")
// // }



// // Qustion 7
// // var guess = +prompt("Enter number for guess")
// // v1 = 7

// // if(guess===v1)

// // {
// //     alert("Bingo")
// // }
// // else if(guess===6 || guess ===8)
// // {
// //     alert("So Close")
// // }
// // else if(guess===1 || guess ===2 || guess===3|| guess ===4 || guess===5 || guess ===9 || guess=== 10)
// // {
// //     alert("Try again")
// // }


// // Question 8
// // var val = +prompt("Enter the number to check wheather the number is divisible of 3 or not")

// // if(val% 3 == 0 )
// // {
// //     alert("The number is divisible of 3")
// // }
// // else{
// //     alert("The number is not divisible of 3")
// // }


// // Question 9
// // var val = +prompt("Enter the number to check :")

// // if(val% 2 == 0 )
// // {
// //     alert("The number is Even")
// // }
// // else{
// //     alert("The number Odd")
// // }

// // Question 10
// // var temp = prompt("Enter the temperture")
// // if(temp>40)
// // {
// //     alert("It's too hot outside")
// // }
// // else if(temp>30)

// // {
// //     alert("The weather today is normal")
// // }
// // else if(temp>20)

// // {
// //     alert("Today's weather is cold")
// // }

// // else if(temp>10)

// // {
// //     alert("OMG ! Today's weather is too cold")
// // }

// // Question 11
// // var sign = prompt("Enter the '+' , '-' , '*' , '/'")
// // if(sign === "+")
// // {
// //     var val1 = +prompt("Enter First value")
// //     var val2 = +prompt("Enter Second value")
// //     var val3 = alert(val1 + val2)
// // }
// // else if(sign === "-")
// // {
// //     var val1 = +prompt("Enter First value")
// //     var val2 = +prompt("Enter Second value")
// //     var val3 = alert(val1 - val2)
// // }

// // else if(sign === "*")
// // {
// //     var val1 = +prompt("Enter First value")
// //     var val2 = +prompt("Enter Second value")
// //     var val3 = alert(val1 * val2)
// // }
// // else if(sign === "/")
// // {
// //     var val1 = +prompt("Enter First value")
// //     var val2 = +prompt("Enter Second value")
// //     var val3 = alert(val1 / val2)
// // }




// // Chapter 12-13
// // Question 1


// // var Alpha= prompt("Enter the alphabet")

// // if(Alpha>=95 && Alpha<=90)
// // {
// //     alert("Capital word")
// // }
// // else if(Alpha>=97 && Alpha<=122)
// // {
// //     alert("Small word")
// // }



// // Question 2
// // var val1 = +prompt("Enter number")

// // var val2 = +prompt("Enter number")

// // if(val1>val2)
// // {
// //     alert(val1 + "is larger value")

// // }
// // else if(val1<val2)
// // {
// //     alert( val1 + " is larger value")

// // }

// // Question 3
// // var val = +prompt("Enter the number")
// // if(val>0)
// // {
// //     alert("The number is Positive")
// // }
// // else if(val<0){
// //     alert("The number is Negative")
// // }
// // else if(val===0)
// // {
// //     alert("The number is Zero")
// // }


// // // Question 4
// // var val = prompt("Enter the alphabet")
// // if(val ==="a" || val ==="e" || val ==="o" || val==="i" || val ==="u" )
// // {
// //     alert("It's a vowel")


// // }
// // else{
// //     alert("It's a consonant")

// // }


// // Question 5
// // var x = prompt("Enter your Password","Enter here")
// // var pass = "Abc123"

// // if(x=== pass)
// // {
// //     alert("Successfully Login")
// // }
// // else{
// //     alert("Incorrect Password")
// // }



// // Question 6
// // var greeting;
// // var hour = 13;
// // if (hour < 18) {
// //     greeting = "Good day";
// //     alert(greeting)
// // }
// // else {
// //     greeting = "Good evening";
// //     alert(greeting)
// // }



// // Question 7
// // var time = +prompt("Enter the time")
// // if(time >= 0000 && time < 1200)
// // {
// //     alert("Good Morning")
    
// // }
// // else if(time >= 1200 && time < 1700)
// // {
// //     alert("Good Afternoon")
// // }
// // else if(time >= 1700 && time < 2100)
// // {
// //     alert("Good Evening")
// // }
// // else if(time >= 2100 && time <= 2359)
// // {
// //     alert("Good Night")
// // }








// // Chapter 14 to 16
// // Question 8
// // var arr=["SSC","HSC","BCS","BS","B.COM","M.Phil","MA"]
// // for( var i=0;i=arr.length;i++)
// // {
// //     document.write(i+") "+ arr[i] + "<br>")
// // }


// // Question 11
// // var arr=["Karachi", " lahore","islamabad","hyderabad","multan"]
// // var  selectcity =arr.slice(1,4)
// // document.write(selectcity)





// // Question 12
// // var aar = ["This", "is", "my", "cat"]

// // for(var i = 0;i<aar.length;i++)
// // {
// //     document.write(aar[i]+ " ")
// // }





// // Question 13

// // var arr=["keyboard","mouse","printer","monitor"]
// // for(var i=0;i<=arr.lenght;i++)
// // {
// //     document.write(arr[i] + "<br>")
// // }




// // Question 14

// // var arr=["keyboard","mouse","printer","monitor"]
// // var x = arr.length-1
// // for(var i=x;i>=0;i--)
// // {
// //     document.write(arr[i] + "<br>")
// // }

// // Question 15


// // var mob = ["Apple","Samsung","Motorolla","Nokia","Sony","Haier"]
// // document.write(mob[0] + "<br>",mob[1] + "<br>",mob[2] + "<br>",mob[3] + "<br>",mob[4] + "<br>",mob[5] + "<br>")





// // Chapter 17 to 20
// // Question 1


// // var multi = [];
// // var multi = [['Abdullah', 19],
// // ['hamza', 18],
// // ['hammad', 20]]

// // console.log(multi)

// // // Question 2 
// // var multi=[[0,1,2,3],[2,4,2,4],[1,6,7,8]]
// // document.write(multi[0] + "<br>" + multi[1] + "<br>" + multi[2])


// // Question 3

// // for(var i = 1; i<=10;i++)
// // {
// //     document.write(i +"<br>")
// // }


// // Question 4


// // var val = +prompt("Enter the value for table")
// // for(var i = 1; i<=10;i++)
// // {
// //     document.write(val + "x" + i + "=" + i*val + "<br>")
// // }



// // Question 5

// // var fruits = ["apple","banana","mango","orange","strawberry"]

// // for(var i = 0; i <=fruits.length;i++)
// // {
// //     document.write("Element at index" + i + " is " + fruits[i] + "<br>")
// // }



// // Question 6

// // for(var i=1;i<=15;i++)
// // {
// //     document.write(i + "<br>")
// // }


// // for(var i=10;i>=1;i--)
// // {
// //     document.write(i + "<br>")
// // }


// // for(var i=0;i<=20;i=i+2)
// // {
// //     document.write(i + "<br>")
// // }


// // for(var i=1;i<=20;i=i+2)
// // {
// //     document.write(i + "<br>")
// // }

// // Question 7

// // var A=["cake","apple pie","cookies","chips","patties"]

// // var search=prompt("Enter to search")

// // for(var i = 0; i<=A.length;i++)
// // {
// //     if(search=== A[i])
// //     {
// //         alert("Your search is Succesfull")
// //         break;
// //     }
// //     else
// //     {
// //         alert("Your search is not Succesfull")
// //         break;
// //     }
// // }

// // Question 8


// // var Arr=[66,45,11,84,90,53]
// // var max = 0

// // for(var i=0; i<=Arr.length;i++)
// // {
// //     if(arr[i]>max)
// //     {
// //         max=arr[i];
// //     }
// // }

// // document.write(max)



// // // Question 9



// // var Arr=[66,45,11,84,90,53]
// // var min= 0

// // for(var i=0; i<=Arr.length;i++)
// // {
// //     if(arr[i]<min)
// //     {
// //         min=arr[i];
// //     }
// // }

// // document.write(min)


// // Question 10


// // for( var i=1; i <=20;i++)
// // {
// //     document.write(i*5 + "<br>")
// // }

