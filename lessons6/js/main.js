let obj = {
	openBtn: document.getElementById('open-btn'),
	nameValue: document.getElementsByClassName('name-value'),
	budgetValue: document.getElementsByClassName('budget-value'),
	goodsValue: document.getElementsByClassName('goods-value'),
	itemsValue: document.getElementsByClassName('items-value'),
	employersValue: document.getElementsByClassName('employers-value'),
	isopenValue: document.getElementsByClassName('isopen-value'),
	discountValue: document.getElementsByClassName('discount-value'),
	goodsItem: document.getElementsByClassName('goods-item'),
	btnAll: document.getElementsByTagName('button'),
	chooseItem: document.getElementsByClassName('choose-item'),
	timeValue: document.getElementsByClassName('time-value'),
	countBudgetValue: document.getElementsByClassName('count-budget-value'),
	hireEmployersItem: document.querySelectorAll('.hire-employers-item'),
},
	mainList = {
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
		prise: 0,
		disab: function disab() {
			if (mainList.open) {
				obj.btnAll[1].disabled  = false;
				obj.btnAll[2].disabled  = false;
				obj.btnAll[3].disabled  = false;
			} else {
				obj.btnAll[1].disabled  = true;
				obj.btnAll[2].disabled  = true;
				obj.btnAll[3].disabled  = true;
			}
		}
	};

obj.openBtn.addEventListener('click', () => {
	mainList.budget = +prompt("Ваш бюджет", "30000");

	while (isNaN(mainList.budget) || mainList.budget == "" || mainList.budget == null) {
		mainList.budget = prompt("Введено не число: Ваш бюджет", "30000");
	}

	mainList.shopName = prompt("Название вашего магазина", "Сталкер");
	
	while (!isNaN(mainList.shopName) ||  mainList.shopName == "" || mainList.shopName == null) {
		mainList.shopName = prompt("Введено не коректно: название вашего магазина", "Сталкер");
	}
	mainList.prise = +prompt("Ведите промо-код", "");

	while (isNaN(mainList.prise) || mainList.prise == "" || mainList.prise == null) {
		mainList.prise = prompt("Введено не число: Ваш ромо-код", "");
	}

	if (mainList.prise == 123) {
		obj.discountValue[0].textContent = '20%';
		obj.discountValue[0].style.backgroundColor = 'green';
	} else {
		alert('Вы вели не верный промо-код');
		obj.discountValue[0].textContent = '0%';
	}

	obj.nameValue[0].textContent = mainList.shopName.toUpperCase();
	obj.budgetValue[0].textContent = mainList.budget;
});

obj.btnAll[1].addEventListener('click', () => {
	for (let i = 0; i < obj.goodsItem.length; i++) {
		let items = obj.goodsItem[i].value;
		if ((typeof(items)) === 'string' && items.length < 50 && items != '') {
			mainList.arrShopGoods[i]  = items;
			obj.goodsValue[0].textContent = mainList.arrShopGoods;	
		}
	}
});

obj.chooseItem[0].addEventListener('change', () => {
	let bool;
	let items = obj.chooseItem[0].value;

	mainList.shopItems = items.split(",");

	for (let i = 0; i < mainList.shopItems.length; i++) {
		if ((typeof(mainList.shopItems[i])) === 'string' && isNaN(mainList.shopItems[i]) && mainList.shopItems[i] != '') {
			bool = true;
		} else {
			bool = false;
			i = mainList.shopItems.length;
		}
	}

	if (bool) {
		mainList.shopItems.sort();
		obj.itemsValue[0].textContent = mainList.shopItems;
	} else {
		alert("Введенно не корректно, перечислите наименование товара через запятую товары");
	}
		
});

obj.timeValue[0].addEventListener('change', () => {
	let time = +obj.timeValue[0].value;

	if (isNaN(time)) {
		alert("Введено не число \n *Режим работы с 6 до 20", "10");
	} else if (time < 0 || time > 24) {
		mainList.open = false;
		alert("Не верное время");
	} else if (time > 6 && time < 20) {
		mainList.open = true;
		alert("Время работать");
	} else {
		mainList.open = false;
		alert("Магазин закрыт");
	}

	if (mainList.open) {
		obj.isopenValue[0].style.backgroundColor = 'green';
		mainList.disab();
	} else {
		obj.isopenValue[0].style.backgroundColor = 'red';
		mainList.disab();
	}
});

obj.btnAll[2].addEventListener('click', () => {
	obj.countBudgetValue[0].value = mainList.budget / 30;
});

obj.btnAll[3].addEventListener('click', () => {
	for (let i = 0; i < obj.hireEmployersItem.length; i++) {
		let items = obj.hireEmployersItem[i].value;

		if ((typeof(items)) === 'string' && isNaN(items) && items.length < 50 ) {
			mainList.Employers.name[i] = items;
			obj.employersValue[0].textContent = mainList.Employers.name;
		}
	}
});

obj.countBudgetValue[0].addEventListener('mousedown', (event) => {
	event.preventDefault();
});

mainList.disab();

