$("document").ready(function(){
    
    $("#DELETEbtn").click( function(){
        var id=$("#id").val();
        console.log(`http://localhost:3000/team/${id}`);
        $.ajax({
            url: `http://localhost:3000/team/${id}`,
            type: 'DELETE',            
            data: id,
            success: function(data) {
                $("#response").text(data);
            }
        });

    });
    
});

