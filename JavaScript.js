/*Первый способ*/
function funcDec (){
	return a + b;
}

/*Второй способ литерал*/
var funcExp = function(a, b){
	return a + b;
}

/*Xosting*/

function func1(){
	function funcExample(){
		return 'one';
	}

	return funcExample();

	function funcExample(){
		return 'two';
	}
};

function func2(){
	var funcExample(){		//внимательней здесь var
		return 'one';
	}

	return funcExample();

	var funcExample(){
		return 'two';
	}
};

console.log(func1());		// two
console.log(func2());		// one	после ретёрна дальше не идёт как в PHP


/*Фуекция обратного вызова*/
var func = function (callback){
	var name = "Nick";
	return callback(name);
}

console.log(func(function(n){
	return "Hello " + n;
}) );

/*Возвращение функции*/
var func1 = function(){
	return function(){
		console.log( 'Привет!!!' );
	};
};

func1()();		// Привет!!!


/*Анонимная самовызывающая функция*/

(function (){
	console.log( 'Это фукция самовызавется её не нужно вызывать' );
})();


/*Этот метод поможет нам скрывать код от глобализации*/
var r = 1;
(function (){
	var i = 4;
	console.log( r );	// 1
	console.log( 'Это фукция самовызавется её не нужно вызывать' );
})();

console.log( i );	// Ошибка

/*Пример 2*/
var exm = 5;
;(function (das){		// ; этот знак спасает от всяких банов и ошибок
	console.log( das );	// 5
})(exm);

/*Arguments зарезерв объект косящий под массив*/
var funcArgs = function(){
	var i,
		sum = 0;
	for (i = 0, i < arguments.length; i++){
		sum += arguments[i];
	}
	return sum;
}

console.log( funcArgs(1, 2, 3, 4, 5, 6, 7) );	// возвратит сумму чисел



/*ОБЛАСТИ ВИДИМОСТИ ПЕРЕМЕННЫХ*/

var one = 1; 		// Глобальная перем

function func(){
	var two = 2;	// Локальная перем
};

var k = 4;

var outerScape(){
	console.log( k );		//undefined из-за нижнего обьявления это как на верху написать var k;
	var k = 8;				// Сначала перем ищет внутри самой функции а потом в глобальной части
	console.log( k );

	var innerScope = function(){
		console.log( k );		//undefined
		var k = 12;
	};
	innerScope();
	console.log( k );		//8
}

/*ЗАМЫКАНИЕ*/

var firstFunc = function (){
	var index = 5;

	return function(){
		return index;
	}
};

var secondFunc = function(){
	var index = 15;

	console.log( firstFunc()() );
};

secondFunc();		// 5
console.log( index ); 		// Ошибка


/*DOM Объекты*/
console.log ( screen.width +' X ' + screen.height);		// разрешение экрана
console.log ( location.toString() );		// address
console.log ( location.history() );		// history
window.confirm('BOMMM');		// da net
window.prompt();	// voodit znachenie


(function(){

	var elems = document.getElementsByTagName("p");		// Выборка элемента по тегу  p, elems[1] уже как массив
	var classElems = document.getElementsByClassName("parabraf");		// Выборка элемента по классу
	var Elem = document.getElementById("four");		// Выборка элемента по id
	var elemsSelector = document.querySelector("p");		// Выборка тега по первому найденному тега p он и выведется
	var elemsSelectors = document.querySelectorAll("p");		// Выборка тегов p они  и все выведутся но getelem работает быстрее чем этот способ
	var elmsSelectors = document.querySelectorAll("div p");		// Здесь выведутся все p вложенные в дивах остальные не выведутся
	var idelmsSelectors = document.querySelector("#four");		// Здесь выведется element с id four

	elems[1].tagName	=== P		//true		работает только с тегами
	elems[1].parentNode	=== <body></body>		//true	возвращает родителя элемента
	elems[1].previousSibling.previousSibling			// тег перед ним который. Если один раз был бы вызван то там был бы пробел text бы обозначался
	elems[1].nextSibling.nextSibling			// тег после который. Если один раз был бы вызван то там был бы пробел text бы обозначался
	elems[1].nextSibling.nodeName === text // true он работает и с пробелом
	elems[1].nodeType === 1 // true он возвращает тип с кем он работает
	elems[1].previousSibling.nodeType === 3 // true он возвращает тип с кем он работает здесь пробел поэтому

	/*Динамеческое создание элементов*/

	var elem = document.creareElement("p");		//
	console.log( elem ); // <p></p>

	var elem = document.creareElement("p"),
		content = document.createTextNode("Это динам созданный текст"),	// не получится добавлять элем HTML
		wrapped = document.getElementById("wraped"); // выбрали p с ид

		elem.innerHTML = '<strong>Это выделенный текст</strong>';
		elem.appendChild(content);	// добавляет туда
		elem.setAttribute('id', 'myNameId');	// добавляет аттрибуты

		wrapped.parentNode.appendChild(elem);	// в наш контент добавился p c текстом!!!
		wrapped.parentNode.insertBefore(elem, wrapped);	// вставляет перед указанном элементом 2 аргумент
		wrapped.parentNode.replaceChild(elem, wrapped);	// заменяет елементы
		wrapped.parentNode.removeChild(wrapped);	// удаляет елементы



		/* ИЗМЕНЕНИЕ СТИЛЕЙ */

		/*так делать нельзая*/
		var div = document.getElementsByClassName('test');	// выбераем элемент смотри он массив
		var style = div[0].style;
		style.color = "red";
		style.backgroundColor = "black";
		style.border = "1px solid blue";
		style.padding = "3px";

		/*так делать надо*/
		var = div = document.getElementById('test');	//выбираем элем с ид тест
		var = style = div.style;
		div.className = "css-class css-class-new"; 	// добавляем классы тут два класса
		div.className = ""; 	//стирает все классы

		/*Ещё способ но они не работают в IE*/
		div.classList.add('css-class');
		div.classList.add('css-class-new');
		div.classList.remove('css-class-new');
		div.classList.toggle('css-class-new');	//работает как переключатель если удалён создаёт. если есть то удалит



		/*АНИМАЦИЯ И ТАЙМЕРЫ*/

		(function (){

			var startTimer = function(){
				console.log( 'Функция сработала' );
			};

			setTimeout(startTimer, 3000); // через 3 сек вызовется функция starTimer
			alert("ОН вызовится сразу не будет ждать 3 сек");



			var timer = setTimeout(startTimer, 3000); // через 3 сек вызовется функция starTimer
			alert("ОН вызовится сразу не будет ждать 3 сек");
			clearTimeout(timer);	//Удаляет тимер

			/*Создаём анимацию ПРИМЕР 1*/

			var delay = 10;
			var i = 0;
			startTimer = function(){
				var elem = document.getElementById('circle'),	// выбираем элемент которого будем двигать
					bottom = elem.offsetTop;	// Размер отступа от верха до элемента например 50px

				if (i < 10){
					//console.log( 'Функция startTimer '+(i+1)+'сработала раз' );
					setTimeout(startTimer, delay);
					elem.style.top = bottom + 20 +'px';	//надеюсь здесь все ясно
				};
				i++;
			};

			startTimer();

			/*ПРИМЕР ВТОРОЙ*/

			var delay = 10;
			var i = 0;
			startTimer = function(pixels){
				var elem = document.getElementById('circle'),	// выбираем элемент которого будем двигать
					bottom = elem.offsetTop;	// Размер отступа от верха до элемента например 50px

				if(pixles > 0 && bottom > 250) || (pixels < 0 && bottom < 50){
					clearInterval(timer);

					timer = setInterval(function(){startTimer(pixels * -1);}, delay);
				}
				elem.style.top = bottom + pixels +'px';
				i++;

				/*if (i < 10){
					console.log( 'Функция startTimer '+(i+1)+'сработала раз' );
					setTimeout(startTimer, delay);
					elem.style.top = bottom + pixels +'px';	//надеюсь здесь все ясно
				}; else{
					clearInterval(timer);
				};*/

			};

			var timer = setInterval(function(){startTimer(20);}, delay);

		})();

})();


})();


/*СОБЫТИЯ*//*СОБЫТИЯ*//*СОБЫТИЯ*//*СОБЫТИЯ*//*СОБЫТИЯ*//*СОБЫТИЯ*//*СОБЫТИЯ*//*СОБЫТИЯ*//*СОБЫТИЯ*//*СОБЫТИЯ*//*СОБЫТИЯ*//*СОБЫТИЯ*//*СОБЫТИЯ*//*СОБЫТИЯ*//*СОБЫТИЯ*/
/*Ниже способы немного устаревшие можно только повесить одну функцию*/
(function (){
	var el = document.getElementById('box');

	el.onclick = function(){		//
		this.style.backgroundColor = "yellow";
	}
})();

(function (){
	var buttons = document.getElementByTagName('button');	// здесь выбираем элемент кнопку

	for (var i = 0, len = buttons.length; i < len; i++){
		buttons[i].onclic = function(){
			if (this.id === 'day'){
				document.body.className = 'day';	// здесь вешаем класс на body
			}; else if (this.id=== 'night'){
				document.body.className = 'night';
			};
		};
	};
})();

/*-СОБЫТИЯ БОЛЕЕ ПРАВИЛЬНО-*/

(function (){

	var buttons = document.getElementByTagName('button');	// здесь выбираем элемент кнопку

	var changeColor = function(e){
		console.log( e.type );	// click
		console.log( e.target );	//	<button id="night"></button>	// здесь иминно то что спровацировало вызов
		console.log( e.currentTarget );	//<html></html>	он возвращает тот элемент на котором висит обработчик он стабилен нежели чем наверху


		if (this.id === 'day'){
			document.body.className = 'day';	// здесь вешаем класс на body
		}; else if (this.id=== 'night'){
			document.body.className = 'night';
		};
	};

	var sayHi = function (e){
			e.preventDefault(); 	// он отключает то что работает по умолчанию, например тег а не срабатывает хотя нажимается
	};

	for (var i = 0, len = buttons.length; i < len; i++){
		var html = document.getElementsByTagName('html')[0],
			yandex = document.getElementById('yandex');

		yandex.addEventListener('click', sayHi, false);	//

		html.addEventListener('click', changeColor, false);	// для примера наверху currentTarget

		buttons[i].addEventListener('click', changeColor, false);	// false для нынешних браузеров означает
		buttons[i].addEventListener('click', sayHi, false);	// вот сразу второй добавили

		buttons[i].removeEventListener('click', sayHi, false);	// удалили вызов функции
	};

})();

/*Модель событий для IE*/

(function (){

	var buttons = document.getElementByTagName('button');	// здесь выбираем элемент кнопку


	var changeColor = function(e){
		e.returnValue = false;	// это вместо e.preventDefault();	тоесть отменяет все что должен делать элемент

		var elem = e.srcElement; 		// это вернет нашу кнопку в internet explore это так

		if (elem.id === 'day'){
			document.body.className = 'day';	// здесь вешаем класс на body
		}; else if (elem.id === 'night'){
			document.body.className = 'night';
		};
	};

	for (var i = 0, len = buttons.length; i < len; i++){
		buttons[i].attachEvent('onclick', changeColor);	// oneclick здесь для exlorer
		//buttons[i].detachEvent('onclick', changeColor);	// detach удаляет
	};

})();

/*Кросс-Браузерные События*//*Кросс-Браузерные События*//*Кросс-Браузерные События*//*Кросс-Браузерные События*/

var eventsObj = {
	addEvent: function(el, type, fn){
		if(typeof addEventListener !== 'undefined'){
			el.addEventListener(type, fn, false);
		} else if(typeof attachEvent !== 'undefined'){
			el.attachEvent('on' + type, fn);
		} else {
			el['on' + type] = fn;
		}
	},

	removeEvent: function(el, type, fn){
		if(typeof removeEventListener !== 'undefined'){
			el.removeEventListener(type, fn, false);
		} else if(typeof detachEvent !== 'undefined'){
			el.detachEvent('on' + type, fn);
		} else {
			el['on' + type] = null;
		}
	},

	getTarget: function (event){
		if(typeof event.target !== 'undefined'){
			return event.target;
		} else {
			return event.srcElement;
		}
	},

	preventDefault: function (event){
		if (typeof event.preventDefault !== 'undefined'){
			event.preventDefault();
		} else {
			event.returnValue = false;
		}
	}
};

(function (){

	var buttons = document.getElementByTagName('button');

	var changeColor = function(e){

		eventsObj.preventDefault(e);
		var elem = eventsObj.getTarget(e);

		if (elem.id === 'day'){
			document.body.className = 'day';
		}; else if (elem.id === 'night'){
			document.body.className = 'night';
		};
	};

	for (var i = 0, len = buttons.length; i < len; i++){
		eventsObj.addEvent(buttons[i], 'click', changeColor);
		//eventsObj.removeEvent(buttons[i], 'click', changeColor);		//удаляет вызов функции
	};

})();


/*Делегирование событий*//*Делегирование событий*//*Делегирование событий*//*Делегирование событий*//*Делегирование событий*//*Делегирование событий*/

(function(){

	var changeColor = function(e){
		eventsObject.preventDefault(e);

		var elem = eventsObj.getTarget(e),
			colorData = elem.getAttribute('data-color');	// там в html файле мы поставили html5 тег, вместо ид, data-color="day" поставили и night

			if (colorData){
				document.body.className = colorData;	//
			}

	};

	eventsObj.addEvent(document, 'click', changeColor);

})();





/*--------------------------*/

window.addEventListener('load', function(){		// это на чистом js вместо ready

});

