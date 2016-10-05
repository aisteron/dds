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

})
    