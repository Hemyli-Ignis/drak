var mainList = {};
	i = 0;

mainList = {
	budget: 0,
	shopName: 'Name',
	arrShopGoods: [],
	employers:  {
		name: 'Ivan',
		position: 'prodovec'
	},
	open: true
}
mainList.budget = prompt("Ваш бюджет", "30000");
mainList.shopName = prompt("Название вашего магазина", "Сталкер");



for (i = 0; i < 3; i++) {
	mainList.arrShopGoods[i] = prompt("Какой товар?", "Тест");
}

alert(mainList.budget / 30);

console.log(mainList);