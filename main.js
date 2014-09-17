// 1  NOT WORKING...

function letterCapitolize(x) {
	
	x = x.split(" ");
	for (i = 0; i < x.length; i++){
		x[i] = x[i].charAt(0).toUpperCase();
		x = x.toString();
	}

	console.log(x);
	return x;
};

var capitolized = letterCapitolize("wow this world is pretty cool!");
capitolized = capitolized.replace(',', " ");
console.log(capitolized);



// 2

// function wordCount(x) {
// 	x = x.split(" ");
// 	x = x.length;
// 	return x;
// }

// var sentence = wordCount('how are you mr dude?')
// console.log(sentence);

// 3

// function primeTime (x) {
// 	var i = 2;
// 	while ((x % i) > 0) {
// 		i++;
// 		 }

// 		 if (i < x) {
// 		 	return false;
// 		 } else {
// 		 	return true;
// 		 }
	
// };


// var isPrime = primeTime(10);
// console.log(isPrime);