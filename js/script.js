$("#currentDay").text(moment().format('LLLL'));


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