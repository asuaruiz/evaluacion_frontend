$(document).ready(function(){
	$("#btn-ruta").on('click', function(){
		$("#transport").removeClass('hidden');
	})
	$('.check').change(function() {
		if ($('.check:checked').length) {
			$('#btn-transport').removeAttr('disabled');
		} else {
			$('#btn-transport').attr('disabled', 'disabled');
		}
	});	
});

