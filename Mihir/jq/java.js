$(function() {
    $("#close").hide();
    $("#open,#close").click(function (event){
        $("#open,#close").toggle();
        $(this).css("text-decoration","underline")
        alert("The font size "+$(this).css("font-size"));
    });
    $("p").mouseenter(function(){
        $(this).addClass("highlighted");
    });
    $("p").mouseleave(function(){
        $(this).removeClass("highlighted");
    });

    $("li").click(function(){
        if(!$(this).hasClass("highlighted")){
            $(this).addClass("highlighted");
        }
        else{
            alert("This list item is already highlighted");
        }
    });

    $("input[name='email']").focus(function(){
        if ($(this).val() == "person@example.com") {
            $(this).val("");
            $(this).css("color","black");
        }
    });

    $("input[name='email']").blur(function(){
        if ($(this).val() == ""){
            $(this).val("person@example.com");
            $(this).css("color","#999");
            $("#emailFormSubmit").attr("disabled","disabled");
        }
        else{
            $("#emailFormSubmit").removeAttr("disabled");
        }
    });

    $("#clearList").click(function(event){
        event.preventDefault();
        $("#editable").slideUp('1000', function(){
            $("#editable").empty();
            $("#editable").show();
        })
    });




    $(document).on('click',"#editable li",function(){
        $(this).fadeOut('slow',function(){
            $(this).remove();
        });
    });

    $("#addElement").submit(function(event){
        event.preventDefault();
        var content = "<li>" + $("#addElement input[name='liContent']").val()+"</li>";
        $(content).hide().appendTo("#editable").fadeIn('slow').css("display","list-item");
        $("#addElement input[name = 'liContent']").val("").focus();
    });



});
