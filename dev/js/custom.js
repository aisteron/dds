/*swiper init*/
$(document).ready(function(){
					var swiper = new Swiper('.swiper-container', 
					{
				        pagination: '.swiper-pagination',
				        paginationClickable: true,
				        nextButton: '.swiper-button-next',
				        prevButton: '.swiper-button-prev',
				        spaceBetween: 30
				    });

function addphoto(){
$('.swiper-slide').each(function(){
var index = $(this).index('.swiper-slide') +1;
$(this).addClass('slide'+index);
})
}

setTimeout(addphoto, 2000);

/*prevent lift up page on close popup*/

$('.overlay a').click(function(e)
{
    window.location = '#close'
    e.preventDefault();
});

$('div.buttongroup button').click(function(){

	window.location='#popup1';
	var spanText = $(this).find('span').text();
	$('div.popup h2').text(spanText);
})




/*lazyload plugin event*/
document.addEventListener('lazyincluded', function(e){

				var flag = true;
				if ($('#map').length && flag) 
				{

    					var map = document.createElement("script");
						map.src = "https://api-maps.yandex.ru/services/constructor/1.0/js/?sid=0R88SZ1mKcCGzgiltKO-qOHEtX36baUe&amp;width=100%&amp;height=450&amp;lang=ru_RU&amp;sourceType=constructor&amp;scroll=true";
						document.getElementById("map").appendChild(map);
						flag = false;
				}

						


	/*popup house photo*/	
	$('.house img').bind('click', function(){
		window.location='#popup2';
		var res = $(this).attr('src').replace('00','b00');
		$('div#popup2 img').attr('src', res);
	});

	$('div.rightside button').bind('click', function(){
		window.location='#popup1';
		$('div.popup h2').html('Оставьте свои контакты<br> и мы вам перезвоним');

	})

	$('p.red').bind('click', function(){
		window.location='#popup1';
		$('div.popup h2').html('Оставьте свои контакты<br> и мы пришлем вам каталог домов');

	})

	$('div.section6 div.buttongroup button').bind("click",function(){

	window.location='#popup1';
	var spanText = $(this).find('span').text();
	$('div.popup h2').text(spanText);


})

					var swiper = new Swiper('.swiper-container_test', 
					{
				        pagination: '.swiper-pagination',
				        paginationClickable: true,
				        nextButton: '.swiper-button-next',
				        prevButton: '.swiper-button-prev',
				        autoplay: 2500,
				        spaceBetween: 30
				    });

});


});