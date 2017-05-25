/*
    Load remote jQuery if found. If not, then load local copy.
*/
yepnope([{

  load: 'http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.js',
  complete: function () {

    if (!window.jQuery) {
      yepnope('_assets/js/libs/jquery-1.10.1.js');
    }


    /* # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
      Project file
       # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # */


    yepnope({
      load: [
        '_assets/js/config.js',     // Set plugin variables
        '_assets/js/scripts.js'     // Your custom scripts
    ]});






    /* # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # #
      Conditional Resources
       # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # # */



    /*
        Load injectable content
    */
    yepnope([{
      test : $("[data-inject]"),
      yep  : '_plugins/inject/inject.js'
    }]);



    /*
        Load modal functionality
    */
    yepnope([{
      test : $("[data-modal]"),
      yep  : '_plugins/modals/modal.js'
    }]);



    /*
      Text Size Plugin
    */
    yepnope([{
      test : $("[data-textsize]"),
      yep  : '_plugins/text-size/text-size.js'
    }]);



  }

}]);