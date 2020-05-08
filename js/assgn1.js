
 $(document).ready(function doAjax() {
  var interval = 1000;
      $.ajax({
        type: "GET",
        url: "display.php",             
        dataType: "json",              
        success: function(response){               
            // console.log(response); 
              $.each( response, function( key, value ) {
                var newitem = $("<tr> <td>"+value.name +"</td> <td>"+value.email +"</td> <td>"+value.message +"</td> <td>"+value.date +"</td> </tr>");
                $(".detail").append(newitem);
              });
            // setTimeout(doAjax, interval);
      //        setTimeout(function () {
      //   alert('Reloading Page');
      //   location.reload(true);
      // }, 5000);
        }
    });
       setInterval('refreshPage()', 5000);
});

  function refreshPage() { 
        location.reload(); 
    }