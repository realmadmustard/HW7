$(document).ready(function() {
	setTimeout (function () {
		var t1 = $('.wrapper').find('.wrap-text');
		console.log(t1);

		var t2 = $('.wrap-text').next();
		console.log(t2);

		var t3 = $('.content').prev();
		console.log(t3);

		var t4_1 = $('ul').parent();
		console.log(t4_1);
		var t4_2 = $('ul').parents();
		console.log(t4_2);

		var t5 = $('ul').children();
		console.log(t5);

		$('button').click(function () {
			console.log('clicked');
			$(this).closest('.content').next().append('<h1>ffffff</h1>');
		});

		$('.footer').append('<div>Hello))</div>');
		$('.footer').prepend('<div>Hi))</div>');

		$('.wrapper').before('<div>before wrapper</div>');
		$('.wrapper').after('<div>after wrapper</div>');

		$('h1').text('hodor');
		$('.wrap-text').html('<h1>wrap-text</h1>');
	}, 2000);
	setTimeout (function () {
		$('body').children().remove();
		$('body').append('<h1 align="center">SORE IT WOZ DEMO VERSHN, PLIS BAI FUL, SENKQU</h1>');
	}, 10000)
});