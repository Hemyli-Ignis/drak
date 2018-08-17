let prise = 10000;

let mainList = {
		budget: 0,
		shopName: 'Name',
		arrShopGoods: [],
		Employers:  {
			name: [],
			tell: [],
		},
		open: false,
		discount: true,
		shopItems: [],
		start: function start() {
			mainList.budget = prompt("Ваш бюджет", "30000");

			while (isNaN(mainList.budget) || mainList.budget == "" || mainList.budget == null) {
				mainList.budget = prompt("Введено не чисо: Ваш бюджет", "30000");
			}

			mainList.shopName = prompt("Название вашего магазина", "Сталкер").toUpperCase();
		},

		workTime: function workTime() {
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
		},

		chooseGoods: function chooseGoods() {
			if (mainList.open) {
				for (let i = 1; i < 4; i++) {
					let a  = prompt(i + ")" + " Какой товар?", "Тест");
					while ((typeof(a)) !== 'string' || !isNaN(a) || a == '' ||  a.length > 50 ) {
						a = prompt(i + ")" + " Введено не верно: Какой товар?", "Тест");
					}
					mainList.arrShopGoods[i] = a;
				}
			}	
		},

		budgetForTheDay:function budgetForTheDay() {
			alert("Ваш бюджет на день " + (mainList.budget / 30).toFixed(1));
		},

		discountSystem: function discountSystem() {
			let priseTotals
			if (mainList.discount) {
				priseTotals = (prise / 100) * 80;
				prise -= priseTotals;
				console.log(prise);
			}
		},

		hiringEmployees:function hiringEmployees() {
			for (let i = 1; i < 5; i++) {
				mainList.Employers.name[i] = prompt(i + ")" + " Имя сотрудника", "Иван " + i);
				mainList.Employers.tell[i] = prompt(i + ")" +  "Имя сотрудника", "8 888 888 88 88");
			}
		},

		chooseShopItems: function chooseShopItems() {
			let items = prompt("Перечислите через запятую товары", "");
			while ((typeof(items)) !== 'string' || !isNaN(items) || items == '') {
				items = prompt("Введенно не корректно, перечислите через запятую товары", "");
			}
			
			mainList.shopItems = items.split(",");
			let addItems = prompt("Подождите? Еще ", "");

			while ((typeof(addItems)) !== 'string' || !isNaN(addItems) && addItems !== '') {
				addItems = prompt("Введенно не корректно, Подождите? Еще", "");
			}

			if ( addItems !== "") {
				mainList.shopItems.push(addItems);
			}

			mainList.shopItems.sort();
		},

		whatToBuy: function whatToBuy() {
			mainList.shopItems.forEach(function(item){
				alert("У нас вы можите купит: " + item);
			})
		},

		shopIncludes: function shopIncludes() {
			for (let key in mainList) {
				console.log(" Наш магазин включает в себя " + key + ": " + mainList[key]);
			}
		}

	}

mainList.chooseShopItems();
mainList.whatToBuy();
mainList.shopIncludes();





/*let arr = [1,2,3,4,5]

arr.pop(); // удаляет последний элемент
arr.push(6); // добоавляет в  конец
arr.unshift(0) // добавляет в начало

for (let i = 0; i < arr.length; i++) {
	alert(arr[i]);
}

arr.forEach(function(item,i,arrr){
	console.log(i +": " + item + "(массив: " + arr + ")")
})

console.log(arr)
console.log(arr.length)*/



/*for (let key in mainList) {
	console.log("свойство "  + key + " имеет значение " + mainList[key]);
}

console.log(Object.keys(mainList).length);*/

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