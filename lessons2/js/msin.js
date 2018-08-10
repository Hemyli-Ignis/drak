var mainList = {};
	i = 0;
	time = 0;

mainList = {
	budget: 0,
	shopName: 'Name',
	arrShopGoods: [],
	employers:  {
		name: 'Ivan',
		position: 'prodovec'
	},
	open: false
}

mainList.budget = prompt("Ваш бюджет", "30000");
mainList.shopName = prompt("Название вашего магазина", "Сталкер");
time = +prompt("Сколько сейчас времени? \n *Режим работы с 6 до 20", "10");

if (time > 6 && time < 20) {
	mainList.open = true;
} else {
	mainList.open = false;
}

if (mainList.open) {
	while (i < 3) {
		let a  = prompt(i +")" + " Какой товар?", "Тест");
		if ( (typeof(a)) === 'string' && a != '' &&  a.length < 50 )  {
			mainList.arrShopGoods[i] = a;
			i++;
		} else 
			alert("Вы вели не верное значение, попрбуйте еще раз");
	}
}

alert("Ваш бюджет на день " + (mainList.budget / 30).toFixed(1));

console.log(mainList);

/*for (i = 0; i < 3; i++) {
	mainList.arrShopGoods[i] = prompt("Какой товар?", "Тест");
	if 
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
}*/