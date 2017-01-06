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
	$("#cont-select").change(function () {
        if ($(this).val() == "0") {
            $("#btn-ruta").attr("disabled" , "disable")
        } else {
            // enable button
            $("#btn-ruta").removeAttr("disabled")
        }
    });	
});

