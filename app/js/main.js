$(function(){ 

  $( '.burger' ).on( 'click', function(){
    $( this ).toggleClass( 'active' );
    $( '.navigation' ).slideToggle( 400 ).toggleClass( 'active' );
    $( 'body' ).toggleClass( 'no-scroll' );
  });

  $( '.navigation-list--arrow' ).on( 'click', function(event){
    $( this ).toggleClass( 'active' );
    $( this ).siblings().toggleClass( 'active' );
  });

  $(document).on('click', function (e) {
    if ($(e.target).closest('.navigation-list--arrow').length === 0) {
      $( '.navigation-list--sub' ).removeClass( 'active' );
    }
  });

}());