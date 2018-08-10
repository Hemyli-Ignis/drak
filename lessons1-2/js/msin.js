var num = 33721;
	out = 1;
	a = 0;

while( num !== 0) { 
	a = num % 10;
	out *= a;
	num = Math.floor(num / 10);
	console.log(out);
}

out = Math.pow(out, 3);

out = String(out);

alert(out[0] + out[1]);
