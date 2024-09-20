const buttons = document.querySelectorAll('.btn-buy-now'); 

buttons.forEach(button => {  
  button.addEventListener('click', function() {
    alert("Your item has been added to the cart!");
  });
});
