length = prompt("How long is the room?")
width = prompt("How wide is the room?")

gallons = Math.ceil(length * width / 350)

if(isNaN(length)) {
	document.write("That's not a number, jerk. Stop trying to break my program.")
} 

else if(isNaN(width)) {
	document.write("That's not a number, jerk. Stop trying to break my program.")
}

else {
	document.write('<div class=\'write\'><p>You need to paint ' + length * width + ' square feet. You will need ' + gallons + ' gallon(s) of paint.</p></div')
}
