let seats = document.getElementsByClassName("seat1");

seats[0].onclick = function(){
    if(seats[0].getAttribute("src") == "seat1.svg"){
        seats[0].setAttribute("src", "seat2.svg");
    }else{
        seats[0].setAttribute("src", "seat1.svg");
    }
}
