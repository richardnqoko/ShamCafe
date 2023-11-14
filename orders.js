document.addEventListener('DOMContentLoaded', function() {
    let order = document.getElementById("order_quantity");
    
    window.less = function(button) {
      let order = button.nextElementSibling;
      if (order.value > 1) {
        order.value--;
      }
    }
    
    window.more = function(button) {
      let order = button.previousElementSibling;
      order.value++;
    }
});
