$(document).ready(function() { // do this when the document is loaded
	$("#tabs").show(); // show the element with ID "tabs"
	$("#Content_Dialer").show(); // show the element with ID "Dialer"
	$("#Content_Contactlist").hide();
	$("#Content_Add-Contact").hide();
	$("#Content_help").hide();
});
// code below for interaction with tabs
$("#Dialer").click(function() { // when "Dialer" is clicked
	$("#Content_Dialer").show(); // show Dialer screen
	// hide the other tab content
	$("#Content_Contactlist").hide();	
	$("#Content_Add-Contact").hide(); 
	$("#Content_help").hide();
});
$("#Contactlist").click(function() { // when "Contact List" is clicked
	$("#Content_Contactlist").show(); // show Contact screen
	// hide the other tab content
	$("#Content_Dialer").hide();
	$("#Content_Add-Contact").hide();
	$("#Content_help").hide();
});
$("#Add-Contact").click(function() { // when "Add Contact" is clicked
	$("#Content_Add-Contact").show(); // show Add Contact screen
	// hide the other tab content
	$("#Content_Dialer").hide();	
	$("#Content_Contactlist").hide();
	$("#Content_help").hide();
});
$("#Help").click(function() { // when "Help" is clicked
	$("#Content_help").show();
	// hide the other tab content
	$("#Content_Dialer").hide();
	$("#Content_Add-Contact").hide();	
	$("#Content_Contactlist").hide();
})

/* fancy dialing functions */
$("#dialer_pad button").click(function() {
	$("#number_input").val($("#number_input").val() + this.innerText);
})

$("#button_dialer_clear").click(function() {
	$("#number_input").val("");
})
