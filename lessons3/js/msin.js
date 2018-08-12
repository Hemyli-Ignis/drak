let mainList = {
		budget: 0,
		shopName: 'Name',
		arrShopGoods: [],
		Employers:  {
			name: [],
			tell: [],
		},
		open: false,
		discount: true
	}

let prise = 10000;

function start() {
	mainList.budget = prompt("Ваш бюджет", "30000");

	while (isNaN(mainList.budget) || mainList.budget == "" || mainList.budget == null) {
		mainList.budget = prompt("Введено не чисо: Ваш бюджет", "30000");
	}

	mainList.shopName = prompt("Название вашего магазина", "Сталкер").toUpperCase();
}

function workTime() {
	let time = +prompt("Сколько сейчас времени? \n *Режим работы с 6 до 20", "10");

	while (isNaN(time) || time == "" || time == null) {
		time = prompt("Введено не чисо: Сколько сейчас времени? \n *Режим работы с 6 до 20", "10");
	}

	if (time > 6 && time < 20) {
		mainList.open = true;
		alert("Время работать")
	} else {
		mainList.open = false;
		alert("Магазин закрыт")
	}	
}

function chooseGoods() {
	if (mainList.open) {
		for (let i = 1; i < 4; i++) {
			let a  = prompt(i + ")" + " Какой товар?", "Тест");
			while ((typeof(a)) !== 'string' || !isNaN(a) || a == '' ||  a.length > 50 ) {
				a = prompt(i + ")" + " Введено не верно: Какой товар?", "Тест");
			}
			mainList.arrShopGoods[i] = a;
		}
	}	
}

function budgetForTheDay() {
	alert("Ваш бюджет на день " + (mainList.budget / 30).toFixed(1));
}

function discountSystem() {
	let priseTotals
	if (mainList.discount) {
		priseTotals = prise * 80 / 100;
		prise -= priseTotals;
		console.log(prise);
	}
}

function hiringEmployees() {
	for (let i = 1; i < 5; i++) {
		mainList.Employers.name[i] = prompt(i + ")" + " Имя сотрудника", "Иван " + i);
		mainList.Employers.tell[i] = prompt(i + ")" +  "Имя сотрудника", "8 888 888 88 88");
	}
}

start()
workTime()
chooseGoods()
budgetForTheDay()
discountSystem()
hiringEmployees()


/*if (mainList.open) {
	while (i < 3) {
		let a  = prompt(i +")" + " Какой товар?", "Тест");
		if ( (typeof(a)) === 'string' && !isNaN(a) && a != '' &&  a.length < 50 )  {
			mainList.arrShopGoods[i] = a;
			i++;
		} else 
			alert("Вы вели не верное значение, попрбуйте еще раз");
	}
}*/


/*if (mainList.open) {
	do {
		let a  = prompt(i +")" + " Какой товар?", "Тест");
		if ( (typeof(a)) === 'string' && a != '' &&  a.length < 50 )  {
			mainList.arrShopGoods[i] = a;
			i++;
		} else 
			alert("Вы вели не верное значение, попрбуйте еще раз");
	}
	while (i < 3)
	(typeof(a)) === 'string' && a != '' &&  a.length < 50
}*/