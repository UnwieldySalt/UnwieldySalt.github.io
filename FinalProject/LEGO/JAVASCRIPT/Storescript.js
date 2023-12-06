
// Get the elements by their ID
var popupLink = document.getElementById("Basket-button");
var popupWindow = document.getElementById("basket-popup-window");
var closeButton = document.getElementById("close-basket");

// Show the pop-up window when the link is clicked
popupLink.addEventListener("click", function(event) {
event.preventDefault();
popupWindow.style.display = "block";
});
// Hide the pop-up window when the close button is clicked
closeButton.addEventListener("click", function() {
popupWindow.style.display = "none";
});


var marioCart = document.getElementById("mario_cart");
popupLink.addEventListener('click', function(event) {
event.preventDefault();
popupWindow.style.display = "block";
});

var fireVal = 0;
var airVal = 0;
var waterVal = 0;
var ass1Val = 0;
var ass2Val = 0;
var ass3Val = 0;

function add1(){
    if(fireVal<10)
    {
        fireVal += 1;
    }
    document.getElementById("marioloadded").innerHTML =  "Fire Truck: " + fireVal + " " + 
    '<button href="#" type="button" onclick="sub1()">Remove</button>';
}
function add2(){
    if(airVal<10)
    {
        airVal += 1;
    }
    document.getElementById("airloadded").innerHTML =  "Spaceship: " + airVal + " " + 
    '<button href="#" type="button" onclick="sub2()">Remove</button>';
}
function add3(){
    if(waterVal<10)
    {
        waterVal += 1;
    }
    document.getElementById("waterloadded").innerHTML =  "Pirate: " + waterVal + " " + 
    '<button href="#" type="button" onclick="sub3()">Remove</button>';
}
function add4(){
    if(ass1Val<10)
    {
        ass1Val += 1;
    }
    document.getElementById("ass1loadded").innerHTML =  "Extra Pirates: " + ass1Val + " " + 
    '<button href="#" type="button" onclick="sub4()">Remove</button>';
}
function add5(){
    if(ass2Val<10)
    {
        ass2Val += 1;
    }
    document.getElementById("ass2loadded").innerHTML =  "Misc. Men: " + ass2Val + " " + 
    '<button href="#" type="button" onclick="sub5()">Remove</button>';
}
function add6(){
    if(ass3Val<10)
    {
        ass3Val += 1;
    }
    document.getElementById("ass3loadded").innerHTML =  "Car: " + ass3Val + " " + 
    '<button href="#" type="button" onclick="sub6()">Remove</button>';
}

function sub1(){
    if(fireVal>0)
    {
        fireVal -= 1;
    }
    document.getElementById("marioloadded").innerHTML =  "Fire Truck: " + fireVal + " " + 
    '<button href="#" type="button" onclick="sub1()">Remove</button>';
    if(fireVal == 0)
    {
        document.getElementById("marioloadded").innerHTML = "";
    }
}

function sub2(){
    if(airVal>0)
    {
        airVal -= 1;
    }
    document.getElementById("airloadded").innerHTML =  "Spaceship: " + airVal + " " + 
    '<button href="#" type="button" onclick="sub2()">Remove</button>';
    if(airVal == 0)
    {
        document.getElementById("airloadded").innerHTML = "";
    }
}

function sub3(){
    if(waterVal>0)
    {
        waterVal -= 1;
    }
    document.getElementById("waterloadded").innerHTML =  "Pirate: " + waterVal + " " + 
    '<button href="#" type="button" onclick="sub3()">Remove</button>';
    if(waterVal == 0)
    {
        document.getElementById("waterloadded").innerHTML = "";
    }
}

function sub4(){
    if(ass1Val>0)
    {
        ass1Val -= 1;
    }
    document.getElementById("ass1loadded").innerHTML =  "Extra Pirates: " + ass1Val + " " + 
    '<button href="#" type="button" onclick="sub4()">Remove</button>';
    if(ass1Val == 0)
    {
        document.getElementById("ass1loadded").innerHTML = "";
    }
}

function sub5(){
    if(ass2Val>0)
    {
        ass2Val -= 1;
    }
    document.getElementById("ass2loadded").innerHTML =  "Misc. Men: " + ass2Val + " " + 
    '<button href="#" type="button" onclick="sub5()">Remove</button>';
    if(ass2Val == 0)
    {
        document.getElementById("ass2loadded").innerHTML = "";
    }
}

function sub6(){
    if(ass3Val>0)
    {
        ass3Val -= 1;
    }
    document.getElementById("ass3loadded").innerHTML =  "Car: " + ass3Val + " " + 
    '<button href="#" type="button" onclick="sub6()">Remove</button>';
    if(ass3Val == 0)
    {
        document.getElementById("ass3loadded").innerHTML = "";
    }
}