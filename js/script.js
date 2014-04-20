$(document).ready(function(){
	
	var json = $('#entry-container textarea').eq(0).val('');
	
	$('#submit-button').click(function(){
		var json = $('#entry-container textarea').eq(0).val();
		console.log('json object: '+json);
		json = $.parseJSON(json);
		$('#input-container').slideUp(2000,function(){
			$('#json-parsed').slideDown(2000);
		});
		$('#jsonview').jsonView(json);
	});
	$('#returnButton').click(function(){
		$('#json-parsed').slideUp(2000,function(){
			$('#input-container').slideDown(2000);
		});
	});
});
