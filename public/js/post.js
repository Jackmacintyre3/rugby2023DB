$("document").ready(function(){
    
    $("#POSTbtn").click( function(){
        var id=$("#id").val();
        var name=$("#name").val();
        
        $.post(`http://localhost:3000/team/`, 
                {
                    "id": id,
                    "name": name
                },
                function(data){
                    $("#response").text(data);
                });

    });
    
});
