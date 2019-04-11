$(function(){
  
  
  
  $('#userSignInput').on('keyup', function(e) {
  
  var inputLength = $(this).val().length;
  $('#tiles').text(inputLength);
  updatePrice(inputLength); 
    
  })    
  
  $('#userFontInput').on('click', function(e) {  
  
    
  
    var inputFont = $(this).is(':checked');
    
     updatePrice( $('#userSignInput').val().length, inputFont)
  }) 
    
    
 $('#confirmOrder').on('click', function(e) {
   var previewMsg = $('#userSignInput').val();
   
   $('#previewScreen').append(previewMsg);
    $('#previewScreen')
      .toggle()
      .animate({ 'right':'0px' }, 250);
  
   
  }) //preview click event
   $('#cancelPreview').on('click', function(e) {
     
   event.preventDefault();
   
    $('#previewScreen').toggle();
    
   
   
   
  
    
}) //closing tag to my doc.ready f/n

function updatePrice(signLength, fontUpgrade) {
  var costPerTile = 5;
  
  if(fontUpgrade) { costPerTile = 6; }
  else { costPerTile = 5; }
  
  var subTotal = signLength * costPerTIle;
  var shipping = 7;
  var grandTotal = subTotal + shipping;
  
  if(signLength !=0) { shipping = 7 }
  else { shipping = 0; }
  
  var grandTotal = subTotal + shipping;
  $('#subTotal').text('$'+subTotal);
  $('#shipping').text('$'+shipping);
  $('#grandTotal').text('$'+grandTotal);
  
  return grandTotal;