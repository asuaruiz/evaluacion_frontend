$(document).ready(function(){
	$("#btn-ruta").on('click', function(){
		$("#transport").removeClass('hidden');
		console.log("click");
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
	$(".getconsumo").on('click', function(event){
		 //alert("aqui");
		 //alert(event.target.id);
		 if (event.target.id == "auto") {
		   //$('#distance_value').val();
           $('#valorop2').html($('#distance_value').val());		   
		 }
		
	})
});

