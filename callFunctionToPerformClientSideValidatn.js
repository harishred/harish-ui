 <html>
    <head>
        <script type="text/javascript" src="http://ajax.googleapis.com/ajax/libs/jquery/1/jquery.min.js"></script>
        <script language="javascript">
            function makeSearch()
            {
                if(validateIdata())
                {
                    alert("send ajax request");
                    return;
                    $.ajax({    
                      type: 'POST',
                      url: url, //- action form
                      data: {Name1:$('#Name1').val(),age1:$('#age1').val()},
                      success: function(){
                        alert('success');
                      }
                    });
                }
            }

            function validateIdata()
            {
                if($('#Name1').val() =='')
                {
                    alert("Invalid Name");
                    return false;
                }

                if($('#age1').val() =='')
                {
                    alert("Invalid Age");
                    return false;
                }

                return true;
            }
        </script>
    </head>
    <body>
        <form name="search" >
        Name: <input type="text" id="Name1" Name="Name1"/>
        Age: <input type="text" id="age1" Name="age1"/>
        <input type="button" name="Submit" value="Submit" onclick="makeSearch()"/>
    </form>
    </body>
    </html>