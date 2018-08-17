let amount = 0;
let arr = [];
let arrint = new Array()
let item = 0;
let arrItog =[];
let itog = []

function getFriendlyNumbers(start, end) {

	for (let i = 0; i < end; i++) {
		start++;
		for (let t = 0; t < start; t++) {
			item = start / t;
			if (Math.round(item) == item) {
				amount = amount + t;
			}
		}

		arr[0] = start;
		arr[1] = amount;
		arrint[i] = arr.slice();
		amount = 0;

	}
	for (let i = 0; i < end; i++) {

		for (let j = 0; j < end; j++) {
			if (arrint[i][0] == arrint[j][1] && arrint[i][1] == arrint[j][0] && arrint[i][0] !== arrint[j][0] && arrint[i][1] !== arrint[j][1] && arrint[i][0] > arrint[j][0]) {
				itog.push(arrint[i,j]);
			}

		}
	}

    return itog
}

let start = prompt("Ведите значение №1", '1');
let end = prompt("Ведите значение №2", '300');

while (start >= end || start == "" || end == "" || isNaN(start) || isNaN(end) ||  start < 1 || Math.round(start) != start || Math.round(end) != end) {
	start = prompt("ОШИБКА - Ведите значение №1", '1');
	end = prompt("ОШИБКА - Ведите значение №2", '300');
}
let ret = getFriendlyNumbers(start,end);
alert('Результат: ' + ret);

/*module.exports = {
    firstName: 'Name',
    secondName: 'Surname',
    task: getFriendlyNumbers
}*/