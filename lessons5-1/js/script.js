var item = document.getElementsByClassName('menu-item'),
	adv = document.getElementsByClassName('adv'),
	box = document.getElementsByTagName('body'),
	title = document.getElementById('title'),
	prom = document.getElementById('prompt');

item[0].parentNode.insertBefore(item[2], item[1]);
adv[0].parentNode.removeChild(adv[0]);
box[0].style.background = '#f3f3f3 url(img/apple_true.jpg) center no-repeat';

title.textContent = "Мы продаем только подленную технику Apple!";
prom.textContent = prompt('Ваше отношение к технике', 'Великолепное!');