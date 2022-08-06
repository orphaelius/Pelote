'use strict'


// swap elote image with michael's face on button click

const eatMe = document.querySelector(".btn-eat-pelote");

eatMe.addEventListener('click', function(){
    console.log("clicked");
    document.getElementById('eat-corn').style.width = "20rem";
    document.getElementById('eat-corn').style.height = "25rem";
    document.getElementById('eat-corn').src="owner1.jpg";

    
});



