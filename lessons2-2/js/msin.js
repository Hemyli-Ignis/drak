let week = ['Понидкльник','Вторник','Среда','Четверг','Пятница','Суббота','Воскресенье'];
	i = 0;



for (i = 0; i < 7; i++) {
	if ([i] > 4) {
		document.write('<b>' + week[i] + '</b>' + '<br>');
	} else 	if (week[i] == 'Пятница') {
			document.write('<i>' + week[i] + '</i>' + '<br>');
		} else 
			document.write(week[i] + '<br>');
}

console.log(week[i]);

let arr = ['24144', '9252356', '38655', '4565352', '7352253', '4584235', '33264',];

for (i = 0; i <7; i++) {
	let text = arr[i];
	if (text[0] == '3' || text[0] == '7') {
		console.log(text);
	}
}
//alert(null || 2 && 3 || 4);


console.log([] + {});