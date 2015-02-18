// Exercises: Functions

// EXERCISE: The Fortune Teller

// Why pay a fortune teller when you can just program your fortune yourself?

// Write a function named tellFortune that:
// takes 4 arguments: number of children, partner's name, geographic location, job title.
// outputs your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
// Call that function 3 times with 3 different values for the arguments.

function fortuneTeller(jobTitle, place, partner, numKids){
	return 'You will be a' + jobTitle + 'in' + place + 'married to' + partner + 'and you will have ' + numKids + ' kids.';
}
document.write(fortuneTeller(' Coder ', ' Portland ', ' Neely ', 2)+'<br>') ;
document.write(fortuneTeller(' Ophthalmologist ', ' Toronto ', ' Sarah ', 2)+"<br>")
document.write(fortuneTeller(' General Laborer ', ' Vancouver ', ' Christina ', 0)+"<br>")

// EXERCISE: The Age Calculator

// Forgot how old you are? Calculate it!

// Write a function named calculateAge that:
// takes 2 arguments: birth year, current year.
// calculates the 2 possible ages based on those years.
// outputs the result to the screen like so: "You are either NN or NN"
// Call the function three times with different sets of values.
// Bonus: Figure out how to get the current year in JavaScript instead of passing it in.

function ageCalculator(birthYear, currentYear){
	yearOne = (currentYear - birthYear)
	yearTwo = (currentYear - birthYear + 1)
	return '<br>' + 'You are either ' + yearOne + ' or ' + yearTwo + ' years old ' + '<br>';	
}
var result = ageCalculator(1977, 2015)
document.write(result)
var result = ageCalculator(1965, 2015)
document.write(result)
var result = ageCalculator(1985, 2015)
document.write(result)

document.write(new Date().getFullYear() + '<br>')

// EXERCISE: The Lifetime Supply Calculator

// Ever wonder how much a "lifetime supply" of your favorite snack is? Wonder no more!

// Write a function named calculateSupply that:
// takes 2 arguments: age, amount per day.
// calculates the amount consumed for rest of the life (based on a constant max age).
// outputs the result to the screen like so: "You will need NN to last you until the ripe old age of X"
// Call that function three times, passing in different values each time.
// Bonus: Accept floating point values for amount per day, and round the result to a round number.

function calculateSupply1(age,amountPerDay){
lifeTimeSupply = (age * amountPerDay)
return '<br>' + ' You will need ' + lifeTimeSupply + ' pieces of gum in order to chew ' + amountPerDay + ' pieces of gum each day until you are ' + age + ' years old.'
}
var result = calculateSupply1(65, 28)
document.write(result)

function calculateSupply2(age,amountPerDay){
lifeTimeSupply = (age * amountPerDay)
return '<br>' + ' You will need ' + lifeTimeSupply + ' slices of pizza in order to eat ' + amountPerDay + ' pieces of pizza each day until you are ' + age + ' years old.'
}
var result = calculateSupply2(80, 3)
document.write(result)

function calculateSupply3(age,amountPerDay){
	lifeTimeSupply = (age * amountPerDay)
	return '<br>' + 'You will need to drink ' + lifeTimeSupply + ' liters of water in order to drink  ' + amountPerDay + ' liters of water each day until you are ' + age + ' years old.' + '<br>'
}
var result = calculateSupply3(120, 4)
document.write(result)

// EXERCISE: The Geometrizer

// Create 2 functions that calculate properties of a circle, using the definitions here.

// Create a function called calcCircumfrence:

// Pass the radius to the function.
// Calculate the circumference based on the radius, and output "The circumference is NN".
// Create a function called calcArea:

// Pass the radius to the function.
// Calculate the area based on the radius, and output "The area is NN".

function calcCircumference(radius){
 circum = Math.round((2 * Math.PI * radius))
 return '<br>' + 'The circle with radius ' + radius +' has a circumference of ' + circum + '<br>'
}
var result = calcCircumference(4)
document.write(result)
// EXERCISE: The Temperature Converter

// It's hot out! Let's make a converter based on the steps here.

// Create a function called celsiusToFahrenheit:

// Store a celsius temperature into a variable.
// Convert it to fahrenheit and output "NN°C is NN°F".
// Create a function called fahrenheitToCelsius:

// Now store a fahrenheit temperature into a variable.
// Convert it to celsius and output "NN°F is NN°C."

function celciusToFarhenheit(celsius){
cToF = Math.round((celsius * 9/5 + 32))
return '<br>' + 'It is ' + cToF + ' degrees Fahrenheit when it is ' + celsius + ' degrees celcius out' + '<br>'
}
var result = celciusToFarhenheit(0)
document.write(result)

function farhenheitToCelsius(fahrenheit){
	fToC = Math.round(((fahrenheit - 32) * 5/9))
	return '<br>' + 'It is ' + fToC + ' degrees celsius when it is ' + fahrenheit + ' degrees fahrenheit out' + '<br>'
}
var result = farhenheitToCelsius(-40)
document.write(result)


