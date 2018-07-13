	var fb = [];	
	for (var n = 1; n <= 100; n++) {
		if ((n % 5) === 0 && (n % 3) === 0)  {
			fb.push("fizzbuzz");
		} else if (n % 3 === 0) {
			fb.push("fizz");
		} else if (n % 5 === 0) {
			fb.push("buzz");
		} else if (n % 3 !== 0) {
			fb.push(n);
		} else if (n % 5 !== 0) {
			fb.push(n);
		}
	}
console.log(fb);