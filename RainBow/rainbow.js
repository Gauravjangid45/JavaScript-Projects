    var userTime = document.getElementById("appt");
    var TotalDiv = document.getElementById("TotalDiv");
    seasonName = document.getElementById('seasonid');
    first = document.getElementById('first');
    var timezone = document.getElementById("timezone");
    
    
    function myFun() {
            if(seasonName.value == ''){
                alert("please enter all fields");
            }
            else if(timezone.value == ''){
                alert("please enter all fields");
            }
            else if(userTime.value==''){
                alert("please enter all fields");
            }
            else if(seasonName.value == "Summer") {
                    if(userTime.value == '15:00' || userTime.value == '03:00'){
                        TotalDiv.setAttribute("transform","rotate(90)");
                    }
                    else if(userTime.value == '18:00' || userTime.value == '06:00'){
                        TotalDiv.setAttribute("transform","rotate(180)");
                    }
                    else if(userTime.value == '21:00' || userTime.value == '09:00'){
                        TotalDiv.setAttribute("transform","rotate(270)");
                        
                    }
                    else if(userTime.value == '12:00' || userTime.value == '00:00'){
                        TotalDiv.setAttribute("transform","rotate(360)");
                        
                    }
            
                    if(timezone.value=="Morning"){
                        first.setAttribute("opacity","0.5");
                        second.setAttribute("opacity","0.5");
                        third.setAttribute("opacity","0.5");
                        fourth.setAttribute("opacity","0.5");
                        fifth.setAttribute("opacity","0.5");
                        sixth.setAttribute("opacity","0.5");
                        seventh.setAttribute("opacity","0.5");
                    }
                    else if(timezone.value=="Evening"){
                            first.setAttribute("opacity","1.2");
                            second.setAttribute("opacity","1.2");
                            third.setAttribute("opacity","1.2");
                            fourth.setAttribute("opacity","1.2");
                            fifth.setAttribute("opacity","1.2");
                            sixth.setAttribute("opacity","1.2");
                            seventh.setAttribute("opacity","1.2");
                        }
                    else if(timezone.value=="Noon"){
                            first.setAttribute("opacity","1");
                            second.setAttribute("opacity","1");
                            third.setAttribute("opacity","1");
                            fourth.setAttribute("opacity","1");
                            fifth.setAttribute("opacity","1");
                            sixth.setAttribute("opacity","1");
                            seventh.setAttribute("opacity","1");
                        }

                first.setAttribute("fill", "yellow");
                second.setAttribute("fill", "orange");
                third.setAttribute("fill", "red");
                fourth.setAttribute("fill", "yellow");
                fifth.setAttribute("fill", "red");
                sixth.setAttribute("fill", "yellow");
                seventh.setAttribute("fill", "orange");
        }
        if (seasonName.value == "Winter") {
            if(userTime.value == '15:00' || userTime.value == '03:00'){
                TotalDiv.setAttribute("transform","rotate(90)");
            }
            else if(userTime.value == '18:00' || userTime.value == '06:00'){
                TotalDiv.setAttribute("transform","rotate(180)");
            }
            else if(userTime.value == '21:00' || userTime.value == '09:00'){
                TotalDiv.setAttribute("transform","rotate(270)");
                
            }
            else if(userTime.value == '12:00' || userTime.value == '00:00'){
                TotalDiv.setAttribute("transform","rotate(360)");
                
            }
            if(timezone.value == " "){
                alert("please enter all fields");
            }
            else if(userTime.value==''){
                alert("please enter all fields");
            }
            else if(timezone.value=="Morning"){
                first.setAttribute("opacity","0.5");
                second.setAttribute("opacity","0.5");
                third.setAttribute("opacity","0.5");
                fourth.setAttribute("opacity","0.5");
                fifth.setAttribute("opacity","0.5");
                sixth.setAttribute("opacity","0.5");
                seventh.setAttribute("opacity","0.5");
            }
            else if(timezone.value=="Evening"){
                first.setAttribute("opacity","1.5");
                second.setAttribute("opacity","1.5");
                third.setAttribute("opacity","1.5");
                fourth.setAttribute("opacity","1.5");
                fifth.setAttribute("opacity","1.5");
                sixth.setAttribute("opacity","1.5");
                seventh.setAttribute("opacity","1.5");
            }
            else if(timezone.value=="Noon"){
                first.setAttribute("opacity","1");
                second.setAttribute("opacity","1");
                third.setAttribute("opacity","1");
                fourth.setAttribute("opacity","1");
                fifth.setAttribute("opacity","1");
                sixth.setAttribute("opacity","1");
                seventh.setAttribute("opacity","1");
            }

            first.setAttribute("fill", "blue");
            second.setAttribute("fill", "#22577E");
            third.setAttribute("fill", "#5584AC");
            fourth.setAttribute("fill", "#051367");
            fifth.setAttribute("fill", "#2D31FA");
            sixth.setAttribute("fill", "#5D8BF4");
            seventh.setAttribute("fill", "#398AB9");
        }
        if (seasonName.value == "Spring") {
            if(userTime.value == '15:00' || userTime.value == '03:00'){
                TotalDiv.setAttribute("transform","rotate(90)");
            }
            else if(userTime.value == '18:00' || userTime.value == '06:00'){
                TotalDiv.setAttribute("transform","rotate(180)");
            }
            else if(userTime.value == '21:00' || userTime.value == '09:00'){
                TotalDiv.setAttribute("transform","rotate(270)");
                
            }
            else if(userTime.value == '12:00' || userTime.value == '00:00'){
                TotalDiv.setAttribute("transform","rotate(360)");
                
            }
            if(timezone.value == " "){
                alert("please enter all fields");
            }
            else if(userTime.value==''){
                alert("please enter all fields");
            }
            else if(timezone.value=="Morning"){
                first.setAttribute("opacity","0.5");
                second.setAttribute("opacity","0.5");
                third.setAttribute("opacity","0.5");
                fourth.setAttribute("opacity","0.5");
                fifth.setAttribute("opacity","0.5");
                sixth.setAttribute("opacity","0.5");
                seventh.setAttribute("opacity","0.5");
            }
            else if(timezone.value=="Evening"){
                first.setAttribute("opacity","1.2");
                second.setAttribute("opacity","1.2");
                third.setAttribute("opacity","1.2");
                fourth.setAttribute("opacity","1.2");
                fifth.setAttribute("opacity","1.2");
                sixth.setAttribute("opacity","1.2");
                seventh.setAttribute("opacity","1.2");
            }
            else if(timezone.value=="Noon"){
                first.setAttribute("opacity","1");
                second.setAttribute("opacity","1");
                third.setAttribute("opacity","1");
                fourth.setAttribute("opacity","1");
                fifth.setAttribute("opacity","1");
                sixth.setAttribute("opacity","1");
                seventh.setAttribute("opacity","1");
            }

            first.setAttribute("fill", "violet");
            second.setAttribute("fill", "indigo");
            third.setAttribute("fill", "blue");
            fourth.setAttribute("fill", "green");
            fifth.setAttribute("fill", "yellow");
            sixth.setAttribute("fill", "orange");
            seventh.setAttribute("fill", "red");
        }
    }