$(function(){ 
  let body = $( 'body' );
  $( '.burger' ).on( 'click', function(){
    $( this ).toggleClass( 'active' );
    $( '.navigation' ).slideToggle( 400 ).toggleClass( 'active' );
    $( 'body' ).toggleClass( 'no-scroll' );
  });

  $( '.navigation-list--arrow' ).on( 'click', function(event){
    $( this ).toggleClass( 'active' );
    $( this ).siblings().toggleClass( 'active' );
  });

}());