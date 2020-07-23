$(function(){

  $( '.burger' ).on( 'click', function(){
    $(this).toggleClass( 'active' );
    $('.navigation').toggleClass( 'active' );
  });

  $( '.dropdown' ).on( 'click', function(event){
    event.preventDefault();
    $( this ).find( '.navigation-list--sub' ).toggleClass( 'active' );
  });

}());