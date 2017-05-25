/*

	INJECT

	Description:
	---
	Inject.js is used to inject markup and copy after page load. Typically, this plugin is used for
	ISI's and other large blocks of content that shouldn't be indexed by google. This content can
	be viewed as "document ready" or "post page load" content.


	Usage:
	---
	By simply adding a 'data-inject' attribute and value to an element, inject.js will trigger and inject 
	that element with markup found in the specified file.


	Config Variables:
	---
	inject_path              = "_assets/html/inject/";


	Example:
	---
	<div id="isi" data-inject="isi"></div>


*/

$("[data-inject]").each(function() {
	var injectFile = inject_path + $(this).attr("data-inject") + ".html";
	$(this).load(injectFile);
});