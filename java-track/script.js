$(document).ready(function(){
    // $("p").hide()     //tag based selection
    // $(".test").hide()    //class based
    // $("#test").hide()   //id based selection
    // $("*").hide()    //selecting everything
    // $("p").click(function(){    
    //     $(this).hide()    //select current element
    // })
    // $("p.intro").hide()    //tag and class based
    // $("p:first").hide()    //first occurence of tag
    // $("ul li:first").hide()      //first li of first ul
    // $("ul li:first-child").hide()     //first li of every ul
    // $("[href]").hide();      //attribute based selection
    // $("a[target = '_blank']").hide()       //value of attribute based selection
    // $("a[target != '_blank']").hide()     //not the value of attribute
    // $(":button").hide()     //tag and type attribute based
    // $("tr:odd").hide()     //tag and position based
    // $("tr:even").hide()
    // $("p").click(function(){
    //     $(this).hide();
    // })
    // $("p").dblclick(function(){
    //     $(this).hide();
    // })
    // $("#newDiv").mouseenter(function(){
    //     alert("You entered the div!")
    // })
    // $("#newDiv").mouseleave(function(){
    //     alert("You exited the div!")
    // })
    // $("#newDiv").mousedown(function(){
    //     alert("Mouse down event occured on div!")
    // })
    // $("#newDiv").mouseup(function(){
    //     alert("Mouse up event occured on div!")
    // })
    // $("#newDiv").hover(function(){
    //     alert("You entered the div!")
    // },function(){
    //     alert("You exited the div!")
    // })
    // $("input").focus(function(){
    //     $(this).css("background-color", "yellow")
    // })
    // $("input").blur(function(){
    //     $(this).css("background-color", "white")
    // })
    // $("p").on("click", function(){
    //     $(this).hide()
    // })
    $("p").on({
        mouseenter : function(){
            $(this).css("background-color", "yellow")
        },
        mouseleave : function(){
            $(this).css("background-color", "blue")
        },
        click : function(){
            $(this).css("background-color", "green")
        }
    })
    // $("#hide").click(function(){
    //     $("p.intro").hide("slow", function(){
    //         alert("P was hidden")
    //     });
    // })
    // $("#show").click(function(){
    //     $("p.intro").show("fast", function(){
    //         alert("P is now visible")
    //     });
    // })
    //   $(selector).hide(speed, callback)

    $("#toggle").click(function(){
        $("p.intro").toggle("slow", function(){
            alert("P was toggled")
        });
    })
})