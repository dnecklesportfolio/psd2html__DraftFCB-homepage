/*

	TEXT-SIZE

	Description:
	---
	Text-size.js adds controls to your site to increase and/or decrease the text size of your defined elements.


	Usage:
	---
	Create a blank element and give it the following attribute: data-textsize="true". This will inject the
	labels which will allow you to modify the text size of your defined elements. It is important to note that
	any block of text that should adjust in size should be set with EM units.


	How it works:
	---
	The number of font sizes are set as percentages within the textSize_sizes array. The labels are generated
	based on the number of percentages and are labeled based on the textSize_label variable.


	Config Variables:
	---
	textSize_sizes          = ["85%", "100%", "115%"];
	textSize_label			= "A"; // remove this variable if labels are blank


	Example:
	---
		<div class="text-size" data-textsize="true"></div>


	Generated Code:
	---
		<div class="text-size" data-textsize="true">
			<a href="#" style="font-size: 85%" class="text-size-1" data-textsize-val="85%">A</a>
			<a href="#" style="font-size: 100%" class="text-size-2" data-textsize-val="100%">A</a>
			<a href="#" style="font-size: 115%" class="text-size-3" data-textsize-val="115%">A</a>
		</div>	

*/


$("[data-textsize]").each(function() {
	var textSize_markup = "";
	for(i=0; i < textSize_sizes.length; i++) {
		textSize_markup += "<a href='#' style='font-size: "+ textSize_sizes[i] +"' class='text-size-"+ (i+1) +"' data-textsize-val='" + textSize_sizes[i] + "'>" + textSize_label + "</a>";
	}
	$(this).append(textSize_markup);
});


$("[data-textsize] a").on("click", function() {
	textsizePct = parseInt($(this).attr("data-textsize-val").replace("px", "")) / 100;
	$("body").css("fontSize", textsizePct + "em");
});


