let arr = [];

for (let i = 2; i <= 100; i++) {
	for (let j = 1; j <= i; j++) {
		if (i % j == 0 && i !=j && j != 1) {
			j = i;
		} else if (i % j == 0 && i == j) {
			arr.push(i);
		}
	}
}

alert(arr);
console.log(arr);