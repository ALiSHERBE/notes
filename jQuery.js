//jQuery(document).ready(function(){	// выполняется после полной загрузки DOM элемента
//$(document).ready(function(){	// выполняется после полной загрузки DOM элемента
//var $j = jQuery.noConflict();	// теперь можно обращаться не $ а $j чтоб не конфликтовать с другими библеотеками
$(function(){	// выполняется после полной загрузки DOM элемента хоть и не написан document ready знак доллара это позволяет
	var a = $('p');	// мы помещяем p в переменую а
});

/*------*/

$function(){
	var a = $('a:not("p a")');		//мы выбрали все не содержащиеся в p элементе
	//a.hide().addClass('NonVisible');		// так можно их скрыть, и добавить им класс
}

/*------------*/
var graf = $('#ident2');	// выборка элемента по ид, он ли элем в HTML
graf.parent();	// выбор родительского элемента
graf.parents();	// выбор всех родителей элемента
graf.parentsUntil('.container');	// выбор всех родителей пока не встретим класс container он тоже не выберется

var li6 = $('#ident6');	// здесь ли элемент мы там выбрали вертуально
li6.prev();	// выбрать предыдущий элемент в той же секции ли5 будет например
li6.next();	// выбрать следующий элемент в той же секции ли7 будет например
li6.prevAll();	// выбрать все предыдущие элементы в той же секции
li6.prevUntil('#li2');	// выбрать все предыдущие элементы в той же секции пока не дойдем до указанного элемента
li6.siblings();	// выбрать все элементы в той же секции кроме самого получится

/*--------*/
var div = $('div');
div.children();		// вывборка его потомков, но не пропотомков
div.contents();		// вывборка его потомков, но не пропотомков даже коментарие и переносов строк и т.д.
div.find('ul');		// выборка всех ul элементов которые стоят под элементом div в DOM дереве

$('li').first();	// выбрать первый li элемент
$('li').last();	// выбрать последний li элемент
$('li').first.siblings();	// выбрать все элементы в этой секции кроме себя
$('li').eq(0);	// выбрать элемент li по индексу 0
$('li').eq(5);	// выбрать элемент li по индексу 5
$('li').eq($('li').length - 1);	// выбрать последний элемент li

$('#li2').closest('ul');	// выдаёт нам ближайшего ul элемента вверх по дереву
$('#li2').offsetParent();	// выдаёт нам элемент у которого задано позиционирование relative or absolute or fixed если их нет то выдаст нам <html></html>


/*---------------------------*/

$('*'); // выбор всех тегов в документе

$('.content');	//выбор тега с классом content
$('div.content');	// можно и так она идентична как на верху
$('div#testId.container');	// выбор элемента с идентиф testId и классом content
$('div, p');		// выборка всех элементов div и p которые есть на странице
$('div p');		// выборка всех элементов p которые являются дочерними элементами div
$('div > p');		// выборка всех элементов p которым div является родителем а не ПРЕДКОМ
$('h2 + p');		// выборка элемента который сразу идёт после элемента h2 он не будет искать у себя внутри, он будет искать рядом


$('p[align]');		// будут выбраны элементы p с атрибутом align
$('p[align="left"]');		// будут выбраны элементы p с атрибутом align="left"
$('p[align="right"]');		// будут выбраны элементы p с атрибутом align="right"



/*События СОБЫТИЯ*//*События СОБЫТИЯ*//*События СОБЫТИЯ*//*События СОБЫТИЯ*//*События СОБЫТИЯ*/

$(function(){
	$(window).resize(function(e){
		$("#resize-text").text("Ширина : " + window.innerWidth + ", Высота: " + window.innerHeight); // здесь выводим текущую ширину и высоту текущего окна браузера
	});

	$(window).scroll(function(){
		$("#scroll-text").text("Позиция Y:" + window.scrollY); // здесь выводим текущую прокрутку окна браузера
	});
});
/*---*/

$(function(){
	$("button").click(function(e){
		$(this).text("Pushed!");		//изменилась надпись на кнопке
	});
});

/*Часть Вторая*//*Часть Вторая*//*Часть Вторая*//*Часть Вторая*//*Часть Вторая*//*Часть Вторая*/

$(function(){
	$(window).on("resize scroll", {user: "Some string"},(function(e){	// здесь задействованы сразу два обработчика и они вызаваются паралельно хоть 0
		$("#resize-text").text("Ширина : " + window.innerWidth + ", Высота: " + window.innerHeight);
		$("#scroll-text").text("Позиция Y:" + window.scrollY);
		console.log(e.data.user);	// будет выводится и при изм разрешения и при изм скролла
		// $(window).off('resize');	// отключть обработчик событий, если аргумет окажется пустым то он выключит всё

		//$(window).one он запускает обработчики один раз
		console.log( $('button').trigger('click') );	// заэмулирует нажатие клавиши на кнопку и в нашем случае она поменяет надпись
		$(window).trigger('resize');	//  в нашем случае Позизия Y будет 0, и выведется

	/*------*/
	/*В случае чтоб их вызывать раздельно то пример будет ниже*/

	$(window).on({
		resize: function(){
			$("#resize-text").text("Ширина : " + window.innerWidth + ", Высота: " + window.innerHeight);
		},
		scroll: function(e){
			$("#scroll-text").text("Позиция Y:" + window.scrollY);
			console.log(e.data.user);	// теперь при изменении скролла будет вылетать надпись в консоле
		}
	}, {user: "Test string"});
});


/*Создание ЭЛЕМЕНТА В jQuery*//*Создание ЭЛЕМЕНТА В jQuery*//*Создание ЭЛЕМЕНТА В jQuery*/

 // при создании элементов надо лучше писать сразу парно $('<div></div>'), если тег одинарный то .createElement() // если используется теги вложенные в друг друга то надо использовать .innerHtml

$('<img>', {
	src: 'img/jquery.jpg',
	alt: 'jQuery course logo',
	title: 'jQuery основы',
	click: function(e){
		$(this).toggleClass("selectedImg");
	}
	/*
	on:{	// это второй способ первый описан выше, разницы нет
		click:function(e){
			$(this).toggleClass("selectedImg");
		}
	}
	//*/
})
.css({
	'padding': '10px',
	'border': '1px solid black'
})
.appendTo('body');

/* Манипуляции с Элементами*//* Манипуляции с Элементами*//* Манипуляции с Элементами*//* Манипуляции с Элементами*/

$('.list').wrap("<div></div>");		// он обернёт элементы с классом лист по отдельности див элементом
$('.list').wrapInner("<div></div>"); // он обернёт элементы внутри элемента тоесть детей элемента одим дивом
$('li').wrapAll("<div></div>"); // он обернёт элементы снутри и объеденит все li в один ul элемент

/*
.append()	// вставить самым последним ребенком выбранного узла
.appendTo()	// вставить самым последним ребенком выбранного узла
.prepend()	// вставить самым первым ребенком выбранного узла
.prependTo()	// вставить самым первым ребенком выбранного узла
.after()	// вставка после выбранного элемента
.insertAfter()
.before()	// вставка перед выбранном элементом
.insertBefore()
*/

/*БАЗОВЫЕ ЭФФЕКТЫ БАЗОВЫЕ ЭФФЕКТЫ БАЗОВЫЕ ЭФФЕКТЫ БАЗОВЫЕ ЭФФЕКТЫ БАЗОВЫЕ ЭФФЕКТЫ */

$('#div1').hide();	//скрыть элемент
$('#div1').show();	//Отобразить элемент
$('#div1').fadeOut();	//скрыть с opacity элемент
$('#div1').fadeIn();	//отобразить с opacity элемент
$('#div1').fadeTo(1000, 1);	//отобразить или скрыть в соотношении с вторым аргументом он opacity
$('#div1').fadeToggle();	//переключатель если скрыт отобразит если отабражен то скроет
$('#div2').slideUp();	//скрывает анимацией сворачивания
$('#div2').slideDown();	//отображает анимацией разворачивания
$('#div2').slideToggle(200);	//отображает или скрывает анимацией разворачивания

//.someDiv * 5(таких дивов 5), .modalDiv * 1

$('.someDiv').on('click', function(e){
	var animTime = 2000;

	var modal = $('#modalDiv');
	modal.css('top', (window.innerHeight - modal.height()) / 2);
	modal.css('left', (window.innerWidth- modal.width()) / 2);
	modal.css('background-color', $(e.target).css('background-color'));	// выбранный элемент примет его цвет
	//modal.show(animTime); 	// появляется при параллельном изменении 3 параметров сразу (ширина высота опасити )
	modal.fadeIn(animTime);	// только опасити
})

$('#modalDiv').on('click', function(){
	//$(this).hide(animTime);
	//$(this).fadeOut(animTime);
});

/*Анимация Анимация Анимация Анимация Анимация Анимация */
	var animTime = 2000;
	var modal = $('modalDiv');
	var oldDiv = null;

$('.someDiv').on('click', function(e){
	if (oldDiv){
		oldDiv.css('opacity', 1);
	}
	var jthis = $(this);
	modal.css({
		'top': jthis.offset().top,
		'left': jthis.offset().left,
		'width': jthis.offset().width(),
		'height': jthis.offset().height(),
		'background-color':jthis.css('background-color'),
		'opacity':1,
		'display': 'block'
	});
	jthis.css('opacity', 0);
	n = 0;
	/*modal
		.animate({'height':400}, 1000)	// принимает два объекта или один объе и милисекунды
		.animate({'width':400},{	// это без задержки
				duration:2000,
				queue:false
			})
		.animate({'top':(window.innerHeight - 400) / 2}, 1000);
		.animate({'left':(window.innerWidth - 400) / 2}, 1000);
	*/
	modal
		.animate({'height':400}, {
			duration: 1000,
			queue: false,
			specialEasing: {
				height: 'swing',
				width: 'linear',
			},
			complete: function(){		// после завершения анимации вызывается
				console.log("Animation complete");
			},
			step: function(){		// выполняется после каждого шага анимации
				console.log(n++);
				if (n = 100){
					modal.stop(); 	// при достижении 100 кадров анимация остановится
				}
			}
		})
		.animate({'top':(window.innerHeight - 400) / 2},
				  'left':(window.innerWidth - 400) / 2}, 1000); // теперь будет в два этапа

	oldDiv = jthis;

})

$('#modalDiv').on('click', function(){
	//$(this).hide(animTime);
	//$(this).fadeOut(animTime);
});


/*Ajax Ajax Ajax Ajax Ajax Ajax Ajax Ajax Ajax Ajax Ajax Ajax */

/*PHP start code*/

<?php
	echo date('H:i:s');
?>

/*PHP end code*/

 function show(){
	$.ajax({
		url: "php/time.php",	//местоположение php файла
		cache: false,
		success: function(html){
			#('#content_p').html(html);
		}
	});
 }

	setInterval('show()', 1000) 		//будет обновляться время каждую секунду

/*--------*/
/*PHP start code */
<?php echo "Ваша почта - <b> ".$_POST['mail']."</b>!"?>
/*PHP end code */
/*
	<p id="content_p"></p>
	<form>
		<input type="email" name="mail">
		<button type="submit">Отправить</button>
	</form>
*/
$("#mail_send").submit(function(){
	var str = $(this).serialize();	// будет здесь: name=value&... тоесть значение там будет введенный email если два то после &
	$.ajax({
		type: "POST",
		url: "php/hello.php",
		data: str,
		success: function(html){
			#('#content_p').html(html);
		}
	});
	return false;
});


/*	Оптимизирование jQuery		Оптимизирование jQuery		Оптимизирование jQuery		*/
/*
<body>
	<div id="content">
		<form method="post" action="/">
			<h2>Светофор</h2>
			<ul id="traffic_light">
				<li><input type="radio" class="on" name="light" value="red"/>Красный</li>
				<li><input type="radio" class="off" name="light" value="red"/>Желтый</li>
				<li><input type="radio" class="off" name="light" value="red"/>Зелёный</li>
			</ul>
			<input class="button" id="traffic_button" type="submit" value="Старт"/>
		</form>
	</div>
</body>
*/
var traffic_button = $('#traffic_button');	// => document.getElementById('traffic_button')
var traffic_lights = $('#traffic_light input');	// если выбирать тег то лучше сначала указать ид его родителя
var active_light = $('#traffic_light input.on');	// никогда не надо сразу ставить класс, а то цикл пойдёт по всему документу. Самый тормазнутый по поиску занимает селектор
// избегать повторений в выборке, надо закешировать лучше в переменную и вызывать так
/*
active_light.bind('click', function(){...})
active_light.css('border', '3px dashed yellow')
active_light.css('background-color', 'orange')
active_light.fadeIn('slow')

//a можно еще проще записать

active_light.bind('click', function(){...})
	.css('border', '3px dashed yellow')
	.css('background-color', 'orange')
	.fadeIn('slow');

*/

var trafic_light = $('#traffic_light');
var active_light = traffic_light.find('input.on');
var inactive_lights = traffic_light.find('input.off');

/*Далее внизу не надо так делать, этот код окажется очень медлительным*/
var top_100_list = [...]	// предположим что здесь 100 уникальных строк
jmylist = $('#mylist');	// jQuery выбирает элемент <ul>

for (var i=0, l = top_100_list.length; i<l; i++){
	jmylist.append('<li>' + top_100_list[i] + '</li>');
}

/*Да так делать было нельзя, но вот лучше сделать так вставить сразу 100 строк*/
var top_100_list = [...],	//assume this has 100 unique string
	jmylist = $('#mylist'),
	top_100_li = "";

	for(var i = 0, l=top_100_list.length; i<l; i++){
		top_100_li += '<li>' + top_100_list[i] + '</li>';
	}
	jmylist.html(top_100_li);


/*Самая Лёгкая замена строк далее...*/

var top_100_list = [...],	//assume this has 100 unique string
	jmylist = $('#mylist'),
	top_100_ul = "<ul id='#mylist'>";	//сохраним весь список в этой переменной

	for(var i = 0, l=top_100_list.length; i<l; i++){
		top_100_ul += '<li>' + top_100_list[i] + '</li>';
	}
	top_100_ul += '</ul>';	//закрываем тег

	jmylist.replaceWidth(top_100_ul);

/*не эффективный метод повешания событий далее...*/

$('#mylist').on('click', 'li', function(e){
	$(this).addClass('clicked');
	 // что то делаем еще
});

/*более эффективный способ*/

$('$myList').on('click', 'li', function(e){
	var target = e.target, // e.target получает узел сгенерированный событие
	jtarget = $(target);	// оборачиваем его jQuery
	jtarget.addClass('clicked');
	// что то еще
});



/*Базовые элементы jQuery Базовые элементы jQuery Базовые элементы jQuery Базовые элементы jQuery*/

<ul class="tabs_controls">
	<li class="tabs_controls-item active"><a class="tabs_control-link" href="#"></a></li>
	<li class="tabs_controls-item "><a class="tabs_control-link" href="#"></a></li>
	<li class="tabs_controls-item "><a class="tabs_control-link" href="#"></a></li>
	<li class="tabs_controls-item "><a class="tabs_control-link" href="#"></a></li>
</ul>
/*НИЖЕ текст*/
<ul class="tabs_list">
	<li class="tabs-item"><p></p></li>
	<li class="tabs-item"><p></p></li>
	<li class="tabs-item"><p></p></li>
	<li class="tabs-item"><p></p></li>
</ul>

$(document).ready(function(){
	$('.tabs_control-link').on("click", function(e){
		e.preventDefault();

		var item = $(this).closest('.tabs_controls-item'),
			contentItem = $('.tabs_item'),
			itemPosition = item.index();

		//console.log(itemPosition);	// выведет если нажали на первую кнопку то 0 и т.д.
		contentItem.eq(itemPosition)
			.add(item)				// это оптимизация не надо писать то что внизу закоменнтированно
			.addClass('active')
			.sublings()	// все соседи ниже убирает класс
			.removeClass('active');

		/*item.addClass('active')
			.sublings()
			.removeClass('active');
		*/	// надо оптимизировать код
	});
});

/*Если всё это будет не последовательно то код работать не будет, поэтому надо сделать следующее*/

<ul class="tabs_controls">
	<li class="tabs_control-item active" data-class="first"><a class="tabs_control-link" href="#"></a></li>
	<li class="tabs_control-item " data-class="second"><a class="tabs_control-link" href="#"></a></li>
	<li class="tabs_control-item " data-class="third"><a class="tabs_control-link" href="#"></a></li>
	<li class="tabs_control-item " data-class="fourth"><a class="tabs_control-link" href="#"></a></li>
</ul>
/*НИЖЕ текст*/
<ul class="tabs_list">
	<li class="tabs-item tabs_item_first"><p></p></li>
	<li class="tabs-item tabs_item_second"><p></p></li>
	<li class="tabs-item tabs_item_third"><p></p></li>
	<li class="tabs-item tabs_item_fourth"><p></p></li>
</ul>

$(document).ready(function(){
	$('.tabs_control-link').on("click", function(e){
		e.preventDefault();

		var item = $(this).closest('.tabs_controls-item'),
			contentItem = $('.tabs_item'),
			itemPosition = item.data('class');

		//console.log(itemPosition);	// выведет если нажали на первую кнопку то 0 и т.д.
		contentItem.filter('.tabs_item_' + itemPosition)
			.add(item)				// это оптимизация не надо писать то что внизу закоменнтированно
			.addClass('active')
			.sublings()	// все соседи ниже убирает класс
			.removeClass('active');

	});
});


/*CREATE AKARDEON CREATE AKARDEON CREATE AKARDEON CREATE AKARDEON CREATE AKARDEON CREATE AKARDEON */

<ul class="acardeon_list">
	<li class="acardeon_item">
		<a href="#" class="acardeon_triger">Link 1</a>
		<ul class="acardeon_inner">
			<li class="acardeon_inner-item"><a href="#" class="acordeon-inner-link">innerLink1</a></li>
			<li class="acardeon_inner-item"><a href="#" class="acordeon-inner-link">innerLink2</a></li>
			<li class="acardeon_inner-item"><a href="#" class="acordeon-inner-link">innerLink3</a></li>
			<li class="acardeon_inner-item"><a href="#" class="acordeon-inner-link">innerLink4</a></li>
		</ul>
	</li>
	<li class="acardeon_item">
		<a href="#" class="acardeon_triger">Link 2</a>
		<ul class="acardeon_inner">
			<li class="acardeon_inner-item"><a href="#" class="acordeon-inner-link">innerLink1</a></li>
			<li class="acardeon_inner-item"><a href="#" class="acordeon-inner-link">innerLink2</a></li>
			<li class="acardeon_inner-item"><a href="#" class="acordeon-inner-link">innerLink3</a></li>
			<li class="acardeon_inner-item"><a href="#" class="acordeon-inner-link">innerLink4</a></li>
		</ul>
	</li>
	<li class="acardeon_item">
		<a href="#" class="acardeon_triger">Link 3</a>
		<ul class="acardeon_inner">
			<li class="acardeon_inner-item"><a href="#" class="acordeon-inner-link">innerLink1</a></li>
			<li class="acardeon_inner-item"><a href="#" class="acordeon-inner-link">innerLink2</a></li>
			<li class="acardeon_inner-item"><a href="#" class="acordeon-inner-link">innerLink3</a></li>
			<li class="acardeon_inner-item"><a href="#" class="acordeon-inner-link">innerLink4</a></li>
		</ul>
	</li>
	<li class="acardeon_item">
		<a href="#" class="acardeon_triger">Link 4</a>
		<ul class="acardeon_inner">
			<li class="acardeon_inner-item"><a href="#" class="acordeon-inner-link">innerLink1</a></li>
			<li class="acardeon_inner-item"><a href="#" class="acordeon-inner-link">innerLink2</a></li>
			<li class="acardeon_inner-item"><a href="#" class="acordeon-inner-link">innerLink3</a></li>
			<li class="acardeon_inner-item"><a href="#" class="acordeon-inner-link">innerLink4</a></li>
		</ul>
	</li>
	<li class="acardeon_item">
		<a href="#" class="acardeon_triger">Link 5</a>
		<ul class="acardeon_inner">
			<li class="acardeon_inner-item"><a href="#" class="acordeon-inner-link">innerLink1</a></li>
			<li class="acardeon_inner-item"><a href="#" class="acordeon-inner-link">innerLink2</a></li>
			<li class="acardeon_inner-item"><a href="#" class="acordeon-inner-link">innerLink3</a></li>
			<li class="acardeon_inner-item"><a href="#" class="acordeon-inner-link">innerLink4</a></li>
		</ul>
	</li>
</ul>

// далее в css:
.acardeon_inner{
	display: none;
}

// js
$(document).ready(function(){
	$('.accordeon_triger').on("click", function(e){
		e.preventDefault();

		var $this = $(this),
			item = $this.closest('.acordeon_item'),
			list = $this.closest('.acordeon_list'),
			items = list.find('.acardeon_item'),
			contend = item.find('.acordeon_inner'),
			otherContent = list.find('.acordeon_inner'),
			duration = 300;

			otherContent.sledeUp(duration);
			content.slidedown(duratiion);
	})
})

/*Слайд Слайд Слайд Слайд Слайд Слайд Слайд Слайд Слайд Слайд Слайд Слайд*/

<div class="sledeshow">
	<div class="slideshow_display">
		<img src="#" alt="" />
	</div>
	<ul class="slideshow_list">
		<li class="slideshow_item">
			<a href="#" class="slideshow_pic">
				<img src="#" alt="" />
			</a>
		</li>
		<li class="slideshow_item">
			<a href="#" class="slideshow_pic">
				<img src="#" alt="" />
			</a>
		</li>
		<li class="slideshow_item">
			<a href="#" class="slideshow_pic">
				<img src="#" alt="" />
			</a>
		</li>
		<li class="slideshow_item">
			<a href="#" class="slideshow_pic">
				<img src="#" alt="" />
			</a>
		</li>
	</ul>
</div>

/*	Css	  */
.slideshow_list{
	.clearfix;
}

slideshow_item{
	float:left;
	margin-left: 20px;
}
.slideshow_display{
	width: 500px;
	height: 400px;
	border: 1px dashed #cccccc;
	position: relative;
	img{
		display: block;
		position: avsolute;
		top: 0; bottom: 0; left: 0; right: 0;
		margin: auto;
	}
}

.slideshow_pic{
	display: block;
	width: 100px;
	height: 80px;
	img{
		display: block;
		max-width: 100px;
		max-height: 80px;
	}
}

/* 	js	*/

$(document).ready(function(){

	$('.slideshow_pic').on('click', function(e){
		e.preventDefault();

		var
			$this = $(this),
			item = $this.closest('slideshow_item'),
			container = $this.closest('slideshow'),
			display = container.find(' slideshow_display'),
			path = item.find('img').attr('src'),
			duration = 300;

		if(!item.hasClass('active')){
			item.addClass('active').siblings().removeClass('active');

			display.find('img').fadeOut(duration, function(){
				$(this).attr('src', path).fadeIn(duration);
			});
		}
	});
}); //end code

/*Slide part 2 Slide part 2 Slide part 2 Slide part 2 Slide part 2 Slide part 2*/

<div class="slider">
	<div class="slider_list_wrap">
		<ul class="slider_list">
			<li class="slider_item active">
				<img src="" alt="" class="slider_pic" />
			</li>
			<li class="slider_item">
				<img src="" alt="" class="slider_pic" />
			</li>
			<li class="slider_item">
				<img src="" alt="" class="slider_pic" />
			</li>
			<li class="slider_item">
				<img src="" alt="" class="slider_pic" />
			</li>
		</ul>
	</div>
	<div class="slider_controls">
		<a href="#" class="slider_controls-button  slider_controls-button_next"></a>
	</div>
</div>

/*	Css	 */
.slider{
	position:relative;
	.inlineblock;
	margin-left: 200px;
}

.slider_list-wrap{
	width: 250px;
	height: 150px;
	overflow: hidden;
}

.slider_list{
	.clearfix;
	width: 2000px;
	position:relative;
	.transition(.3s);
	left: 0;
}

.slider_item{
	float: left;
}

.slider_controls-button{
	position: absolute;
	top: 50px;
}

.slider_controls-button-next{
	right: -100px;
}

slider_controls-button-prev{
	left: -100px;
}

/*	js	*/

$(document).ready(function(){
	$('.slider_controls-button').on('click', function(e){
		e.preventDefault();

		var
			$this = $(this),
			container = $this.closest('.slider'),
			list = container.find('.slider_list'),
			items = container.find('.slider_item'),
			activeSlide = items.filter('.active'),
			nextSlide = activeSlide.next(),
			prevSlide = activeSlide.prev(),
			firstSlide = items.first(),
			lastSlde = items.last(),
			slideOffset = container.offset().left,
			reqPos = 0;

		if($(this).hasClass('slider_controls-button-next')){

			if(nextSlide.length){

				findReqPos(nextSlide);
				removeActiveClass(nextSlide);
			} else{
				findReqPos(firstSlide);
				removeActiveClass(firstSlide);
			}

		} else {

			if(prevSlide.length){
				findReqPos(prevSlide);
				removeActiveClass(prevSlide);
			} else{
				findReqPos(lastSlide);
				removeActiveClass(lastSlide);
			}
		}
		list.css('left', '-=' reqPos + 'px');

		function removeActiveClass (reqSLide){
			reqSLide.addClass('active').siblings().removeClass('active');
		}

		function findReqPos (slide){
			reqPos = slide.offset().left - sliderOffset;
		}
	})
})

/* Rezinoviy slider  */
<div class="slider">
	<div class="slider_list-wrap">
		<ul class="slider_list">
			<li class="slider_item active">
				<img src="" alt="" class="slider_pic" />
			</li>
			<li class="slider_item">
				<img src="" alt="" class="slider_pic" />
			</li>
			<li class="slider_item">
				<img src="" alt="" class="slider_pic" />
			</li>
			<li class="slider_item">
				<img src="" alt="" class="slider_pic" />
			</li>
		</ul>
	</div>
	<div class="slider_controls">
		<a href="#" class="slider_controls-button slider_controls-button-next"></a>
		<a href="#" class="slider_controls-button slider_controls-button-prev"></a>
	</div>
</div>

/* ----- CSS --------*/

.slider{
	position: relative;
	width: 40%;
	overflow: hidden;
	display: inline-block;

	.slider_list{
		position: relative;
		width: 100%;
	}

	.slider-item{
		position: absolute;
		top: 0;
		left: 0;
		z-index: 0;
		width: 100%;

		img{
			width: 100%;
			display: block;
		}

		&.active{
			z-index: 1;
			position: relative;
		}

		&.inslide{
			z-index: 2;
		}
	}
}

/*---- JS ------*/

var slider = (function(){

	//private

	return {
		init: function(){
			var _this = this;

			$('.slider_controls-button').on('click', function(e){
				e.preventDefault();

				var
					$this = $(this),
					slides = $this.closest('.slider').find('.slider_item'),
					activeSlide = slides.filter('.active'),
					nextSlide = activeSlide.next(),
					prevSlide = activeSlide.prev(),
					firstSlide = slides.first(),
					lastSlide = slides.last();

					if($this.hasClass('slider_controls-button_next')){

						if(nextSlide.length){
							_this.moveSlide(nextSlide, 'forward');
						} else {
							_this.moveSlide(firstSlide, 'forward');
						}

					} else{
						if (prevSlide.length){
							_this.moveSlide(prevSlide, 'backward');
						} else {
							_this.moveSlide(lastSlide, 'backward');
						}
					}
			});
		},

		moveSlide: function(slide, direction){
			var
				container = slide.closest('.slider'),
				slides = container.find('slider_item'),
				activeSlide = slides.filter('.active'),
				sladeWidth = slides.width();
				duration = 500;
				reqCssPosition = 0,
				reqSlideStrafe = 0;

			if (direction === 'forward'){
				reqCssPosition = slideWidth;
				reqSlideStrafe = -slideWidth;

			} else if (direction === 'backward'){
				reqCssPosition = -slideWidth;
				reqSlideStrafe = slideWidth;
			}

			slide.css('left', reqCssPosition).addClass('inslide');

			var movableSlide = slides.filter('.inslide');
			activeSlide.animate({left: reqSlideStrafe}, duration);
			movableSlide.animate({left: 0}, duration, function(){
				var $this = $(this);
				slides.css('left', '0').removeClass('active');
				$this.toggleClass('inslide active');
			});

		}
	}
}());

$(document).ready(function(){
	if($('.slider').length){
		slider.init();
	}
});

/*---------SLIDER part 2----------------*/

<div class="slider">
	<div class="slider_list-wrap">
		<ul class="slider_list">
			<li class="slider_item active">
				<img src="" alt="" class="slider_pic" />
			</li>
			<li class="slider_item">
				<img src="" alt="" class="slider_pic" />
			</li>
			<li class="slider_item">
				<img src="" alt="" class="slider_pic" />
			</li>
			<li class="slider_item">
				<img src="" alt="" class="slider_pic" />
			</li>
		</ul>
		<ul class="slider_dots"></ul>
	</div>
	<div class="slider_controls">
		<a href="#" class="slider_controls-button slider_controls-button-next"></a>
		<a href="#" class="slider_controls-button slider_controls-button-prev"></a>
	</div>
</div>

/*---- JS ------*/

var slider = (function(){

	var flag = true,
		timer = 0,
		timeDuration = 3000;

	return {
		init: function(){
			var _this = this;

			// создаём точки

			_this.createDots();

			// включим автопереключение

			_this.autoSwitch();

			$('.slider_controls-button').on('click', function(e){
				e.preventDefault();

				var
					$this = $(this),
					slides = $this.closest('.slider').find('.slider_item'),
					activeSlide = slides.filter('.active'),
					nextSlide = activeSlide.next(),
					prevSlide = activeSlide.prev(),
					firstSlide = slides.first(),
					lastSlide = slides.last();

				_this.clearTimer();

				if($this.hasClass('slider_controls-button_next')){

					if(nextSlide.length){
						_this.moveSlide(nextSlide, 'forward');
					} else {
						_this.moveSlide(firstSlide, 'forward');
					}

				} else{
					if (prevSlide.length){
						_this.moveSlide(prevSlide, 'backward');
					} else {
						_this.moveSlide(lastSlide, 'backward');
					}
				}
			});

			// клик по точкам

			$('.sleder_dots-link').on('click', function(e){
				e.preventDefault();

				var
					$this = $(this),
					dots = $this.closest('.slider_dots').find('.slider-dots-item'),
					activeDot = dots.filter('.active'),
					dot = $this.closest('.slider_dots-item'),
					curDotNum = dot.index(),
					direction = (activeDot.index() < curDotNum) ? 'forward' : 'backward';
					reqSlide = $this.closest('.slider').find('.slider_item').eq(curDotNum);

				if(!dot.hasClass('active')){
					_this.clearTime();
					_this.moveSlide(reqSlide, direction);
				}
			});
		},

		moveSlide: function(slide, direction){
			var
				_this = this,
				container = slide.closest('.slider'),
				slides = container.find('slider_item'),
				activeSlide = slides.filter('.active'),
				sladeWidth = slides.width();
				duration = 500;
				reqCssPosition = 0,
				reqSlideStrafe = 0;

			if(flag){

				flag = false;

				if (direction === 'forward'){
					reqCssPosition = slideWidth;
					reqSlideStrafe = -slideWidth;

				} else if (direction === 'backward'){
					reqCssPosition = -slideWidth;
					reqSlideStrafe = slideWidth;
				}

				slide.css('left', reqCssPosition).addClass('inslide');

				var movableSlide = slides.filter('.inslide');

				activeSlide.animate({left: reqSlideStrafe}, duration);

				movableSlide.animate({left: 0}, duration, function(){
					var $this = $(this);

					slides.css('left', '0').removeClass('active');

					$this.toggleClass('inslide active');

					_this.setActiveDot(container.find('.slider_dots'));

					flag = true;
				});

			}


		},

		createDots: function (){

			var
				_this = this,
				container = $('.slider');

			var
				dotMarkup = '<li class="slider_dots-item active"> \
					<a href="#" class="slider_dots-link"></a> \
				</li>';

			container.each(function(){
				var
					$this = $(this),
					slides = $this.find('.slider_item'),
					dotContainer = $this.find('.slider_dots');

				for (var i = 0; i < slides.size(); i++){ 	// size eto toje samoe kak length
					dotContainer.append(dotMarkup);
				}

				_this.setActiveDot(dotContainer);

			});
		},

		setActiveDot: function(container){
			var
				slides = container.closest('.slider_list-wrap').find('.slider_item');

			container
				.find('.slider_dots-item')
				.eq(slides.filter('.active').index())
				.addClass('active')
				.siblings()
				.removeClass('active');
		},

		autoSwitch: function (){
			var
				_this = this;

			timer  = setInterval(function (){
				var
					slides = $('.slider_list .slider_item'),
					activeSlide = slides.filter('.active'),
					nextSlide = activeSlide.next(),
					firstSlide = slides.first();

				if(nextSlide.length){
					_this.moveSlide(nextSlide, 'forward')
				} else {
					_this.moveSlide(firstSlide, 'forward')
				}

			}, timeDuration);
		},
		clearTimer: function(){
			if(timer){
				clearInterval(timer);
				this.autoSwitch();
			}
		}
	}
}());

$(document).ready(function(){
	if($('.slider').length){
		slider.init();
	}
});



/*______________----------- Navigation ----------------______________*/

<div class="wrapper">
	<nav class="nav">
		<div class="container">
			<ul class="nav_list">
				<li class="nav_item"><a href="#one" class="nav_item-link">one</a></li>
				<li class="nav_item"><a href="#two" class="nav_item-link">two</a></li>
				<li class="nav_item"><a href="#three" class="nav_item-link">three</a></li>
				<li class="nav_item"><a href="#four" class="nav_item-link">four</a></li>
				<li class="nav_item"><a href="#five" class="nav_item-link">five</a></li>
				<li class="nav_item"><a href="#six" class="nav_item-link">six</a></li>
				<li class="nav_item"><a href="#seven" class="nav_item-link">seven</a></li>
			</ul>
		</div>
	</nav>
	<div class="wrapper_inner">
		<section class="section" style="..." data-section="one">
			<div class="section_title">
				One
			</div>
		</section>
		<section class="section" style="..." data-section="two">
			<div class="section_title">
				two
			</div>
		</section>
		<section class="section" style="..." data-section="three">
			<div class="section_title">
				Tree
			</div>
		</section>
		<section class="section" style="..." data-section="four">
			<div class="section_title">
				Four
			</div>
		</section>
		<section class="section" style="..." data-section="five">
			<div class="section_title">
				Five
			</div>
		</section>
		<section class="section" style="..." data-section="six">
			<div class="section_title">
				Six
			</div>
		</section>
		<section class="section" style="..." data-section="seven">
			<div class="section_title">
				Seven
			</div>
		</section>
	</div>
</div>

/*__________JS__________________*/

$(document).ready(function(){
	$('nav_item-link').on('click', function(e){
		e.preventDefault();

		showSection($(this).attr('href'), true);
	});

	showSection(window.location.hash, false);
});	// ->ready_end;

$(window).scroll(function(){
	checkSection();
}); //scroll end;

function showSection(section, isAnimate){
	var
		direction = section.replace(/#/, ''),
		reqSection = $('.section')filter('[data-section="' + direction + '"]'),
		reqSectionPos = reqSection.offset().top;
	if(isAnimate){
		$('body, html').animate({scrollTop: reqSectionPos}, 500);
	} else {
		$('body, html').scrollTop(reqSectionPos);
	}
}

function checkSection(){
	$('.section').each(function(){

		var
			$this = $(this),
			topEdge = $this.offset().top - 200,
			bottomEdge = topEdge + $this.height(),
			wScroll = $(window).scrollTop();

		if (topEdge < wScroll && bottomEdge > wScroll){
			var
				currentId = $this.data('section'),
				reqLink = $('.nav_item-link').filter('[href="#' + currentId + '"]');

			reqLink.closest('.nav_item').addClass('active')
				.siblings().removeClass('active');

			window.location.hash = currentId;
		}

	});
}

/*------------NOVAYA TEMA --PO VEBINARU------------------*/
/*html*/

<img src="####" alt=""/>
<ul class="img">
	<li class="img_item">
		<div class="img_wrapper">
			<img src="" alt="" class="img_element"/>
		</div>
	</li>
	<li class="img_item">
		<div class="img_wrapper">
			<img src="" alt="" class="img_element"/>
		</div>
	</li>
	<li class="img_item">
		<div class="img_wrapper">
			<img src="" alt="" class="img_element"/>
		</div>
	</li>
	<li class="img_item">
		<div class="img_wrapper">
			<img src="" alt="" class="img_element"/>
		</div>
	</li>
</ul>

<!-------appended------ -->
	<div class="appended">
		<div class="appended_inner">

		</div>
		<a href="#" class="append-btn">Добавить кнопку</a>
	</div>

<!-- -----slider------ -->

<div class="slide">
	<div class="slide_item"></div>
</div>
<div class="slider_start">
	<a href="#" class="slider_start-link">Старт</a>
</div>



/*end html*/

/*Css*/

img{
	.clearfix:
	margin-buttom: 50px;
}

.appended{
	margin-bottom: 50px;
}

.img_item{
	float: left;
	margin-left: 10px;

	&:first-child{
		margin-left: 0;
	}
}

.img_wrapper{
	border: 5px solid firebrick;
	width: 10px;
	height: 10px;
}

.slide{
	border: 3px dashed #000;
	.border-radius(5px);
}

.slide_item{
	.border-radius(5px);
	width: 50px;
	height: 30px;
	backgraund: firebrick;
	position: relative;
	left: 0px;

}

/*end css*/


$(document).ready(function(){

	$('.append-btn').on('click', function(e){
		e.preventDefault();

		var
			markup = '<a href="#" class="new-btn">Это кнопка добавлена динамически</a>';

		$('.appended_inner').append(markup);
	});

	$('.appended').on('click', '.new-btn', function(e){
		e.preventDefault();

		console.log('click');
	});

}); // - > ready_end;


function makeBorder(){
	$('.img_element').each(function(){
		var
			$this = $(this),
			width = $this.width(),
			height = $this.height();

		$this
			.closest('.img_wrapper')
			.width(width)
			.height(height);
	});
}

$(window).load(function(){
	makeBorder();
});

// Animation eta je tema

$(document).ready(function(){

	$('.slided_start-link').on('clik', function(e){
		e.preventDefault();

		var
			slide = $('.slide'),
			slideItem = $('.slide_item');

		if (!slide.hasClass('active')){
			slide.addClass('active');

			slideItem
				.stop(true, true)
				.animate({
					left: 500
				}).animate({
					opacity: 0;
				});
		} else{
			slide.removeClass('active');

			slideItem
				.stop(true, true)
				.animate({
					left: 0,
					opacity: 1
				});
		}
	});

}); // - > ready_end;



/*----------------------NOVAYA TEMA AJAX ------------------------*/

/*html*/
<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<title>js</title>
</head>
<body>
	<section class="main-content">
		<h2>Введите имя</h2>
		<form action="ajax.php" class="form" id="dima-form" method="post">
			<label class="label">
				<input type="text" class="input-text" placeholder="Введите имя" name="name"/>
			</label>
			<input type="submit" value="отправить" class="input-submit"/>
		</form>
		<h2>Сервер ответил</h2>
		<ul class="list">
		</ul>
	</section>
</body>
</html>
/*end html*/

/*php start*/
<?php

	$name = $_POST['name'];
	$data = array();

	if ($name == 'dima'){
		$data['age'] = 25;
		$data['work'] = 'web-developer';
	}

	header("Content-Type: application/json");
	echo json_encode($data);
	exit;

?>
/*php end*/

/*-js ajax star-*/

var = FormSender = (function(){

	//Подключаем прослушку событий

	function setUpLestners(){
		$('#dima-form').on('submit', _showResult); //_showResult почему не _showResult(), да потому-что она сразу вызовится во 2 случае, а не выполнится когда нам надо
	};

	// Обработка сабмита формы #dima-form
	function _showResult(ev){
		ev.preventDefault();

		var form = $(this),
			url = '/ajax.php',
			defObject = _ajaxForm(form, url);

		defObject.done(function(ans){

			var ul = $('.list'),
				markup = '';

			for(var item in ans){
				markup = '<li>' + item + ":" + ans[item] + '</li>';
				ul.append(markup);
			}

		})
	};

	// Универсальная функция ajax
	function _ajaxForm(form, url){

		var data = form.serialize(),
			defObj = $.ajax({
				type: "POST",
				url: url,
				dataType: "JSON",
				data: data
			});

		return defObj;
	};

	// Возвращаем в глобальную область видимости
return {
	init: function(){
		setUpListners();
	};
  }

}());

FormSender.init();

/*js end*/


/*----------------------Module-------------------------*/

var Popups = (function(){

	var
		_privateProperty = false;

	var
		_renderPopup = function(){
			//renderim
		};

		return {
			init: function (){

				$('.popup-activator').on('click', function(e){
					_renderPopup();
				});

				$('.popup-close').on('click', function(e){
					e.preventDefult();
					_this.popupClose();
				});

				console.log('модуль попапов инициализирован');

			},

			popupOpen: function (id){

			},

			popupClose: function (id){

			}
		}
}());

$(document).ready(function(){

	if ($('.popup-activator').length){
		Popups.init();
	}


});

function popupOpen(id){
	//открываем
};

function popupClose(id){
	//закрываем
};


/*-----------Modul#2------------*/

function library(module){
	$(function (){	// это равносьлино к document.ready разницы нет!!!!
		if (module.init){
			module.init();
		}
	});
	return module
};

var myLibrary = library(function (){
	return {
		init: function (){
			console.log('init');
		};
	}
}());




/*
*
*
*
*
*
*
*/
/*
* php
*
*/
echo json_encode($data); //мы преобразовали ассоциативный массив обратно в строку формата JSON с помощью функции json_encode() и вывели её.

/*
*js
*
*/
data = JSON.parse(data); //Преобразуем JSON-строку в массив


/*php*/
$decode = json_decode($json, true);//преобразовали в ассоциативный массив с помощью функции json_decode(). Если в этой функции вместо true поставить false, то вместо ассоциативного массива будет возвращён Object.