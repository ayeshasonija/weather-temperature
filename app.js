document.write(
    "<body style='background-color:#fcfbf5;' " +
      "</body>"
  );

var userInput = +prompt("Enter your Area's temperature (from 37)")

if(userInput <= 37 && userInput >= 33){
    document.write(
    "<div class='card mx-auto ' style='width: 18rem; background-color: #FF9D00; box-shadow: rgba(0, 0, 0, 0.65) 0px 0px 15px; border:none; margin-top:17%; '>" +
        "<img src='img/heat wave.JPEG' class='card-img-top mx-auto mt-3' alt='heat wave' style='clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); width: 10rem; '>" +
        "<div class='card-body'>" +
            "<h5 class='card-title' style='text-align: center' >" + "Heat Wave" + "</h5>" +
            "<p class='card-text' style='text-align: center' >" + "Your temperature is "+ userInput + "</p>" +
        "</div>" +
    "</div>"
    )
}else if(userInput <= 32 && userInput >= 27){
    document.write(
        "<div class='card mx-auto ' style='width: 18rem; background-color: #ee9f27; box-shadow: rgba(0, 0, 0, 0.65) 0px 0px 15px; border:none; margin-top:17%; '>" +
        "<img src='img/summer.jpg' class='card-img-top mx-auto mt-3' alt='very hot' style='clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); width: 10rem; '>" +
        "<div class='card-body'>" +
            "<h5 class='card-title' style='text-align: center' >" + "Very Hot" + "</h5>" +
            "<p class='card-text' style='text-align: center' >" + "Your temperature is "+ userInput + "</p>" +
        "</div>" +
    "</div>"
    )
}else if(userInput <= 26 && userInput >= 23){
    document.write(
        "<div class='card mx-auto ' style='width: 18rem; background-color: #f1b04c; box-shadow: rgba(0, 0, 0, 0.65) 0px 0px 15px; border:none; margin-top:17%; '>" +
        "<img src='img/hot.jpg' class='card-img-top mx-auto mt-3' alt='hot' style='clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); width: 10rem; '>" +
        "<div class='card-body'>" +
            "<h5 class='card-title' style='text-align: center' >" + "Hot" + "</h5>" +
            "<p class='card-text' style='text-align: center' >" + "Your temperature is "+ userInput + "</p>" +
        "</div>" +
    "</div>"
    )
}else if(userInput <= 22 && userInput >= 16){
    document.write(
        "<div class='card mx-auto ' style='width: 18rem; background-color: #f5c77e ; box-shadow: rgba(0, 0, 0, 0.65) 0px 0px 15px; border:none; margin-top:17%; '>" +
        "<img src='img/roomtemp.jpg' class='card-img-top mx-auto mt-3' alt='Room Temperature' style='clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); width: 10rem; '>" +
        "<div class='card-body'>" +
            "<h5 class='card-title' style='text-align: center' >" + "Room Temperature" + "</h5>" +
            "<p class='card-text' style='text-align: center' >" + "Your temperature is "+ userInput + "</p>" +
        "</div>" +
    "</div>"
    )
}else if(userInput <= 15 && userInput >= 11){
    document.write(
        "<div class='card mx-auto ' style='width: 18rem; background-color: #feba4f ; box-shadow: rgba(0, 0, 0, 0.65) 0px 0px 15px; border:none; margin-top:17%; '>" +
        "<img src='img/warm.jpg' class='card-img-top mx-auto mt-3' alt='Warm' style='clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); width: 10rem; '>" +
        "<div class='card-body'>" +
            "<h5 class='card-title' style='text-align: center' >" + "Warm" + "</h5>" +
            "<p class='card-text' style='text-align: center' >" + "Your temperature is "+ userInput + "</p>" +
        "</div>" +
    "</div>"
    )
}else if(userInput <= 10 && userInput >= 5){
    document.write(
        "<div class='card mx-auto ' style='width: 18rem; background-color: #b8e2f2 ; box-shadow: rgba(0, 0, 0, 0.65) 0px 0px 15px; border:none; margin-top:17%; '>" +
        "<img src='img/mild.jpg' class='card-img-top mx-auto mt-3' alt='mild' style='clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); width: 10rem; '>" +
        "<div class='card-body'>" +
            "<h5 class='card-title' style='text-align: center' >" + "Mild" + "</h5>" +
            "<p class='card-text' style='text-align: center' >" + "Your temperature is "+ userInput + "</p>" +
        "</div>" +
    "</div>"
    )
}else if(userInput <= 4 && userInput >= 0){
    document.write(
        "<div class='card mx-auto ' style='width: 18rem; background-color: #89cff3 ; box-shadow: rgba(0, 0, 0, 0.65) 0px 0px 15px; border:none; margin-top:17%; '>" +
        "<img src='img/cool.jpg' class='card-img-top mx-auto mt-3' alt='cool' style='clip-path: polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%); width: 10rem; '>" +
        "<div class='card-body'>" +
            "<h5 class='card-title' style='text-align: center' >" + "Cool" + "</h5>" +
            "<p class='card-text' style='text-align: center' >" + "Your temperature is "+ userInput + "</p>" +
        "</div>" +
    "</div>"
    )
}else{
    document.write(
        "<h1 style='text-align: center; margin-top:17%;'>" +
        "Out Of Range" +
        "</h1>"
    )
}