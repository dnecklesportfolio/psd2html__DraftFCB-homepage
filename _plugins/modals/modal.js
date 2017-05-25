var modalContentPath = "_assets/html/modals/";

var modal = {

	elements: {
		openElement:  $("[data-modal]"),
		closeElements: ".modal-wrap .close, .overlay" 
	},

	events: function() {

		modal.elements.openElement.on("click", function(e) {

			e.preventDefault();

			$("body").prepend("<div class='overlay'>OVERLAY</div>");
			modal.preHooks("test");

			$(modal.elements.closeElements).on("click", function() {
				modal.postHooks("test", $(this));
			});

		});
	}, 

	preHooks: function(hook) {
	  switch(hook) {
		  case "test":
		    console.log("found test preHook");
		    break;
		  default:
		    // default
	  }  		
	},

	postHooks: function(hook, el) {
	  switch(hook) {
		  case "test":
		    console.log("found test postHook");
		    break;
		  default:
		    // 
	  }
	  el.remove();
	},

	init: function() {
		this.events();
	}

}

modal.init();