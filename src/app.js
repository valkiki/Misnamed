
$(document).on('click', '#translate', function(){    
    (Object.create(translator))
        .translate($("#functionName").val())
        .done(function(result){
            $("#functionTarget").html(
                '<code></code>public function <span style="color:dodgerblue">' +
                (Object.create(formatter)).camelize(result[0][0][0])
                + '</span> () {...}</code>'
            );
        });
});