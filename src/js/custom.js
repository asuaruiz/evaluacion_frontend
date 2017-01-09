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
           $('#valorop2').html($('#distance_value').val()/12*673);		   
		 }
		
	})
	$(".getconsumo").on('click', function(event){
		 //alert("aqui");
		 //alert(event.target.id);
		 if (event.target.id == "moto") {
		   //$('#distance_value').val();
           $('#valorop1').html($('#distance_value').val()/21*673);		   
		 }
		
	})
	$(".getconsumo").on('click', function(event){
		 //alert("aqui");
		 //alert(event.target.id);
		 if (event.target.id == "minivan") {
		   //$('#distance_value').val();
           $('#valorop3').html($('#distance_value').val()/7*673).math.round();		   
		 }
		
	})
	$(".getconsumo").on('click', function(event){
		 //alert("aqui");
		 //alert(event.target.id);
		 if (event.target.id == "camion") {
		   //$('#distance_value').val();
           $('#valorop4').html($('#distance_value').val()/6*673);		   
		 }
		
	})
});

