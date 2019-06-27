//Event Pda saat link di klik
$('.page-scroll').on('click', function(e){

	//Ambil isi href
	var tujuan = $(this).attr('href');
	//tangkap elemen yang bersangkutan
	var elementTujuan = $(tujuan);

	//pindahkan scroll
	$('html, body').animate({
		scrollTop: elementTujuan.offset().top - 50
	}, 1000);

	e.preventDefault();
});






//PARALLAX
// About
$(window).on('load', function() {
	$('.pKiri').addClass('pMuncul');
	$('.pKanan').addClass('pMuncul');
});

$(window).scroll(function() {
	var wScroll = $(this).scrollTop();

	$('.jumbotron img').css({
		'transform' : 'translate(0px,'+ wScroll/6 +'%)'
	});

	$('.jumbotron h1').css({
		'transform' : 'translate(0px,'+ wScroll/2 +'%)'
	});

	$('.jumbotron p').css({
		'transform' : 'translate(0px,'+ wScroll/1 +'%)'
	});


	//PORTFOIO
	if( wScroll > $('.portfolio').offset().top - 200){
		$('.portfolio .img-thumbnail').each(function(i) {
			setTimeout(function() {
				$('.portfolio .img-thumbnail').eq(i).addClass('muncul');
			}, 200 * (i+1));
		});
		
	}


});





