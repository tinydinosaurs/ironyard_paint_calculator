length = prompt("How long is the room?")
width = prompt("How wide is the room?")

gallons = Math.ceil(length * width / 350)


document.write('<div class=\'write\'><p>You need to paint ' + length * width + ' square feet. You will need ' + gallons + ' gallon(s) of paint.</p></div')

