$(function(){

  $( '.burger' ).on( 'click', function(){
    $(this).toggleClass( 'active' );
    $('.navigation').toggleClass( 'active' );
  });

  $( '.dropdown-link' ).on( 'click', function(event){
    event.preventDefault();
    $( this ).siblings().toggleClass( 'active' );
  });

  $( '.navigation-list--sub' ).on( 'click', function(event){
    return true;
  });

  $(document).on('click', function (e) {
    if ($(e.target).closest(".dropdown-link").length === 0) {
      $( '.navigation-list--sub' ).removeClass( 'active' );
    }
  });

}());