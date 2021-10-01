$("#currentDay").text(moment().format('LLLL'));

$(".saveBtn").click(function(){
    var textAreaVal = $(this).siblings("textarea").val();
    var key = $(this).parent().attr("id");
    localStorage.setItem(key, textAreaVal);
});

// $("#time9 textarea").val(localStorage.getItem("time9"));
// $("#time10 textarea").val(localStorage.getItem("time10"));
// $("#time11 textarea").val(localStorage.getItem("time11"));
// $("#time12 textarea").val(localStorage.getItem("time12"));
// $("#time13 textarea").val(localStorage.getItem("time13"));
// $("#time14 textarea").val(localStorage.getItem("time14"));
// $("#time15 textarea").val(localStorage.getItem("time15"));
// $("#time16 textarea").val(localStorage.getItem("time16"));
// $("#time17 textarea").val(localStorage.getItem("time17"));

for (var i = 1; i <= 12; i++){
    if(i != 6 && i != 7 && i !=8){
        $("#time" + i + " textarea").val(localStorage.getItem("time" + i));
    }


}


function updateTextArea(){
    var hourNow = moment().hours(); 
    $(".time-block").each(
        function(){
            var timeBlockTime = parseInt($(this).attr("data-time"));
            
            if(timeBlockTime < hourNow){
                $(this).find("textarea").addClass("past");
            }
                else if(timeBlockTime == hourNow){
                    $(this).find("textarea").removeClass("past")
                    $(this).find("textarea").removeClass("future")
                    $(this).find("textarea").addClass("present");
                } else {
                    $(this).find("textarea").removeClass("present");
                    $(this).find("textarea").removeClass("past")
                    $(this).find("textarea").addClass("future")



                }
            

        }
    )
}
updateTextArea();
