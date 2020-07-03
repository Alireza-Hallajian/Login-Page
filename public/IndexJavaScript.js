const postDataToServer = function () 
{
    const user = {
        username: $("form div:nth-child(1) input").val(),
        password: $("form div:nth-child(2) input").val()
    };


    $.ajax({
        type: "POST",
        url: "/",
        async: false,
        data: user,
        success: function (response) {
            console.log(response);
            },
        error: function (err) {
            console.log(err);
        }
    });
};