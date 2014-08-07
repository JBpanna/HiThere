$(document).ready(function(){

	$('.submit_button').click(function(){
		var whateverInput = $('input:text[name=text_input]').val();

		$.ajax({
			url: '/main/whateverPosts',
			data: { whatever: whateverInput},
			type: 'POST'
		}).done(function(data){
			console.log(data);
		});

	});
	
});