/*-----------наследование и абстракция----------------*/

var animal = {
	canRun: true;
};

var Wolf = function (){
	this.name = 'Волк'
};

var Grey = function (){
	this.color = 'Серый'
};

var Black = function (){
	this.color = 'Чёрный'
};

var Chicken = function (){
	this.name = "Курица";
	this.haveWings = true;
};

Wolf.prototype = animal;
Chicken.prototype = animal;

var wolfy = new Wolf();
var chicky = new Chicken();


/*-----------------Инкапсуляция----------*/

//скрытие служебного кода

var module = (function (){

	function _privateMethod1(argument){		// здесь все то что должно быть скрыто
		//....
	},

	function _privateMethod2(argument){
		//....
	},

	return {								//здесь все то что должно быть может доступно кому то ещё
		publicMethod: function (){
			privateMethod1();
		};
	};
})();

module.publicMethod();



/*-------Полиморфизм-----------*/
//это когда можно вызывать чужую функцию
//в своём собственном контексте (позаимствовать)

//Конструктор родительского класса
function Animal(name){
	this.name = name;
}

Animal.prototype.speak = function (){
	alert(this.name + " says:");
}

//Конструктор унаследованного класса "Dog"
function Dog(name){
	Animal.call(this, name);
}

Dog.prototype.speak = function (){
	Animal.prototype.speak.call(this);

	alert("woof");
}
var snoopDoggyDog = new Dog('Snoop');
var 2pac = new Dog('2pac');
var notoriousBIG = new Dog();

//Конструктор унаследованного класса "Cat"
function Cat(name){
	Animal.call(this, name);
}


Cat.prototype.speak = function (){
	Animal.prototype.speak.call(this);

	alert("miaow");
};


/*-------------link-live style-----------------*/
//GOOGLE  http://google.github.io/styleguide/javascriptguide.xml
//AIRBNB  https://github.com/airbnb/javascript
//GITHUB  https://github.com/styleguide/javascript
//MOZILA  https://goo.gl/HtFRDb
// НАДО ВСЕ ЭТО ВЫУЧИТЬ


/*Треугольнички делаем в сss tooltip*/
// tultips vnizu
/*<div class="divider">
	<div class="tooltip tooltip_top">
		<div class="tooltip_inner">Cодержание тултипа</div>
	</div>
</div>
<div class="divider">
	<div class="tooltip tooltip_right">
		<div class="tooltip_inner">Cодержание тултипа</div>
	</div>
</div>
<div class="divider">
	<div class="tooltip tooltip_bottom">
		<div class="tooltip_inner">Cодержание тултипа</div>
	</div>
</div>
<div class="divider">
	<div class="tooltip tooltip_left">
		<div class="tooltip_inner">Cодержание тултипа</div>
	</div>
</div>
*/

/*-----css-----*/
.divider{
	margin: 50px;
}
.tooltip{
	display: inline-block;
	position: absolute;
	opacity: 0;
	-webkit-transition: opacity .3s;
	-moz-transition: opacity .3s;
	-ms-transition: opacity .3s;
	-o-transition: opacity .3s;
	transition: opacity .3s;
}

.tooltip_top{
	.tooltip_inner{
		&:after{
			bottom: 0;
			border-width: 5px 5px 0 5px;
			border-top-color: #000;
		}
	}
}

.tooltip_left{
	.tooltip_inner{
		&:after{
			right: 0;
			border-width: 5px 0 5px 5px;
			border-left-color: #000;
		}
	}
}

.tooltip_bottom{
	.tooltip_inner{
		&:after{
			top: 0;
			border-width: 0 5px 5px 5px;
			border-top-color: #000;
		}
	}
}

.tooltip_right{
	.tooltip_inner{
		&:after{
			left: 0;
			border-width: 5px 5px 5px 0;
			border-top-color: #000;
		}
	}
}

/*---------JS--------------*/ // Посмотреть http://jquery.page2page.ru/tags/ifr.html
// HTML часть в документах loft JS#3

$(document).ready(function(){
	if ($('.popup').length){
		Popups.init()
	}
	$('#form').on('submit', function (e){
		e.preventDefault();

		var
			$this = $(this);

		if (validateThis($this)){
			postFormData($this, function (data){
				var
					reqPopup = data.status ? '#success' : '#error';

					Popups.open(reqPopup)
			});
		};

	});
}); // -> ready end


var Popups = (function (){

	var
		popups = $('.popup');

	function _close(){		// _close означает что функция приватная
		popups.hide();
	}

	return {

		init : function (){
			$('.popup_close, .popup_overlay').on('click', function(e){
				e.preventDefault();

				_close();
			});
		},

		open: function (id){
			var
				reqPopup = popups.filter(id);

			_close();

			reqPopup.fadeIn(300);
		}
	}

})();


function postFormData(form, successCallback){
	var
		host		= form.attr('action'),
		reqFields   = form.find('[name]'),
		dataObject  = {};

	if (!host){
		console.log('Установи action атрибут в своей форме');
	}

	reqFields.each(function (){
		var
			$this = $(this),
			value = $this.val(),
			name  = $this.attr('name');

		dataObject[name] = value;
	});

	$.post(host, dataObject, successCallback);
}


/* ---------------------валидация------------- */
function validateThis(form){

	var
		textType = form.find("[data-validation='text']"),
		mailType = form.find("[data-validation='mail']"),
		isValid  = false;

	textType.each(function (){

		var
			$this = $(this),
			norEmptyField = !!$this.val() // input type value здесь будет, а !! это приводить переменную к булевскому типу

		if (notEmptyFiled){
			isValid = true;
		} else {
			$this.tooltip({
				content : 'Заполните поле',
				position: 'left'
			});

			isValid = false;
		}
	});

	mailType.each(function (){
		var
			$this = $(this),
			regExp = /^([a-zA-Z0-9_.-])+@([a-zA-Z0-9_.-])+\.([a-zA-Z])+([a-zA-Z])+/;
			isMail = regExp.test($this.val());

			if (isMail){
				isValid = true;
			} else{
				$this.tooltip({
					content : 'Неверный e-mail',
					position: 'bottom'
				});
				isValid = false;
			}
	});

	return isValid
}


$.fn.tooltip = function (options){
	options = {
		positon  : options.position || 'right', 	// это будет по умолчание если ничего не передаётся к функции аргументом в js это делается так, в PHP можно указать сразу в аргументах, но js нельзя!!!!
		content  : options.content  || 'I am tooltip'
	};

	var
		markup = '<div class="tooltip tooltip_' + options.position + '"> \
					<div class="tooltip_inner">' + option.content + '</div> \
				</div>'; // здесь \ указывается как перенос строк без этого будет ошибка!!!

	var
		$this = this,	// объект jQuery
		body = $('body');

	$this
		.addClass('tooltipstered')
		.attr('data-tooltip-position', options.position);

	body.append(markup);	// append добавляет в конец, prepend в начало

	_positionIt($this, body.find('.tooltip').last(), options.position);

	$(document).on('click', function(){
		$('.tooltip').remove();
	});

	$(window).on('resize', function (){
		var
			tooltips = $('.tooltip');

		var tooltipsArray = [];

		tooltips.each(function (){
			tooltipsArray.push($(this));	// здесь вроде  перебираем тултипы
		});

		$('.tooltipstered').each(function (index){
			var
				position = $(this).data('tooltip-position');

			_positionIt($(this), tooltipsArray[index], position);
		});

	});

	function _positionIt(elem, tooltip, position){

		// измеряем элемент

		var
			elemWidth 	= elem.outerWidth(true),	// outerWidth - значение элемента с отступами, width взял бы чистую ширину без отступов
			elemHeight	= elem.outerHeight(true),
			topEdge 	= elem.offset().top,
			bottomEdge	= topEdge + elemHeight,
			leftEdge	= elem.offset().left,
			rightEdge	= leftEdge + elemWidth;

		// измеряем тултип

		var
			tooltipWidth	= tooltip.outerWidth(true),
			tooltipHeight	= tooltip.outerHeight(true),
			leftCentered	= (elemWidth / 2) - (tooltipWidth / 2),
			topCentered		= (elemHeiht /2) - (tooltipHeight /2);

		var position = {};

		switch (position){

			case 'right' :
				positions = {
					left : rightEdge,
					top  : topEdge + topCentered
				};
				break;
			case 'top' :
				positions = {
					left : leftEdge + leftCentered,
					top  : topEdge - tooltipHeight
				};
				break;
			case 'bottom' :
				positions = {
					left : leftEdge + leftCentered,
					top  : bottomEdge
				};
				break;
			case 'left' :
				positions = {
					left : leftEdge + tooltipWidth,
					top  : topEdge - topCentered
				};
				break;
		}	// -> switch end

		tooltip
			.offset(positions)
			.css('opacity', '1');
	};

};

/* ---------PHP------------- */

<?php

	header('Content-Type: application/json');

	$name = $_POST['name'];
	$mail = $_POST['mail'];

	// действия с данными

	sleep(1);
	$result = false;

	echo json_encode(array(
		'status' => $result
	));

?>

/* ----------PHP_END------- */


/*----------- VEBINAR PO Animacii----------------*/
// paru urokov po html, centrovanie
/*
.wrapper{

	position: absolute;
	top: 0;
	left: 0;
	right: 0;
	bottom: 0;
	text-align: center;
	overflow: auto;
	min-width: 400px;

	&:before{
		content: "";
		display: inline-block;
		height: 100%;
		width: 0;
		vertical-align: middle;
	}
}

.auth_form{
	display: inline-block;
	vertical-align: middle;
}

46:24
*/

/*Вывод по буквам*/

<!doctype html>
<html lang="ru-RU">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="x-ua-compatible" content="ie=edge">
        <title></title>
        <meta name="description" content="">
        <meta name="viewport" content="width=device-width, initial-scale=1">
    </head>
    <body>
        <div class="aviatitle">
            <h1>
                Aviazagolovaok <a href="#" data-text="Типо авиатабло"class="lets-start">Заголовок</a>
            </h1>
            <div id="aviatitle-container">

            </div>
        </div>
        <script src="jquery-1.9.0.min.js"></script>
        <script>
            (function (){
                $('.lets-start').on('click', function(e){
                    e.preventDefault(e);
                    var
                        title = $('#aviatitle-container'),
                        text = $(this).data('text').split('');

                    var
                        lettersArray = 'абвгдеёжзийклмнопрстуфхцчшщъьыэюя'.split('');

                    var
                        counter = 0,
                        randomCounter = 3,
                        innerCounter = 0,
                        wordGather = '';

                    function setLetters(word){
                        var
                            randomInt = getRandomInt(0, lettersArray.length - 1),
                            randomLetter = lettersArray[randomInt];

                        var
                            currentLetter = text[counter];

                        word = word || '';

                        title.text(word + currentLetter + '_');

                        innerCounter++;

                        if (innerCounter == randomCounter) {
                            title.text(word + currentLetter);
                            wordGather = wordGather + currentLetter;
                            innerCounter = 0;
                            randomCounter = getRandomInt(1, 7)
                            counter++;
                        }



                        if (counter < text.length) {
                            setTimeout(function(){
                                setLetters(wordGather);
                            }, 300);
                        }

                    }

                    setLetters();

                });

                function getRandomInt(min, max){
                    return Math.floor(Math.random() * (max - min + 1)) + min;
                }
            }());
        </script>
    </body>
</html>