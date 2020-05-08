
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
        }
    });
       setInterval('refreshPage()', 5000);
});

  function refreshPage() { 
        location.reload(); 
    }