// Converting html elements into javascript variables.
//Using the "document.getElementById(element id); to identify an html element using its assigned id"

var legoButton = document.getElementById("Lego-button");        //lego button 
var legoPopup = document.getElementById("lego_popup");          //lego popup

var hazards_button = document.getElementById("Hazards-button"); //hazards button
var hazards_popup = document.getElementById("hazards_popup");   //hazard popup

var refund_button = document.getElementById("Refund-button");   //refund button
var refund_popup = document.getElementById("refund_popup");     //refund popup

var overlay = document.getElementById("overlay");               // overlay

//using the document.querySelector(element identifier); to identify the first element that matches the element identifier, these identifiers can either be the element id, class name or type.
// to use .querySelector to identify an element using its name, for example a paragraph would be document.querySelector("p[name = given name]");
// to use .querySelector to identify an element using its class, for example a paragraph with a class = para_class would be document.querySelector(".para_class");
// to use .querySelector to identify an element using its id, for example a paragraph with id para_id would be document.querySelector("para_id");
// to use .querySelector to identify an element using its type, for example a paragraph, would be .querySelector("p") or .querySelector('p')

//remember, .querySelector only identifies the first element with the matching criteria, to select ALL ELEMENTS with the matching criteria use .querySelectorAll();

var closeButton = document.querySelector(".close-button1");   //identifying the close buttons (1,2 and 3) using .querySelector and their class.
var closeButton2 = document.querySelector(".close-button2");
var closeButton3 = document.querySelector(".close-button3");

var iframe = document.querySelector("iframe");  //identifying, and converting this html element to a javascript variable, iframe is a tag used to embed an external element (like a video) within an html, in this case the video in lego_popup

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Convert the Lego Tutorials paragraph into a button.
// This was really fun so, legoButton.outerHTML (where legoButton is the para element with id Lego-button) is the entirety of the html element (all of it)")
// legoButton.innerHTML is the inner contents of that same html element.
// "<button id = 'Lego-button'>" is the opening button tag for the same element (identified by id = Lego-button). and "</button>" is the closing tag.

//Basically this line of code is converting the para html element(Lego-button) into an actual button by saying that: 
//The entirety of the para element is = the inner elements of the para being a button (represented by "<button class = 'clickable_elements' id = 'class of the html para element'>" + legoButton.innerHTML + "</button>";).
//REMEMBER THOUGH, IF YOU WANT TO KEEP THE CSS STYLING OF YOUR HTML ELEMENT, INCLUDE THE CLASS IN THE BUTTON OPENING TAG (in this case, class = 'clickable_elements').
legoButton.outerHTML = "<button class = 'clickable_elements' id ='Lego-button'>" + legoButton.innerHTML + "</button>";

// Update the legoButton variable to the new button element. Basically every time I use or reference the LegoButton variable it uses the updated button element instead of the previously made html element.
legoButton = document.getElementById("Lego-button");

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//doing the same for the rest of the html paras with class "clickable_elements" i.e, Important hazards, and refunds.
hazards_button.outerHTML = '<button class = "clickable_elements" id = "Hazards-button">' + hazards_button.innerHTML + '</button>';

hazards_button = document.getElementById("Hazards-button");

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
refund_button.outerHTML = '<button class = "clickable_elements" id = "Refund-button">' + refund_button.innerHTML + '</button>';

refund_button = document.getElementById("Refund-button");
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Associating the buttons with opening popups
// making the legoButton open the legoPopup
legoButton.addEventListener('click', function() {                       //document.addEventListener() adds a eventlistener to a variable, in this case the eventlistener is listening for a 'click'
// When the button is clicked, add 'active' class to the popup          //so when you click on the legoButton, then you activate whatever code is inside the function{}
    legoPopup.classList.add('active');                                  //In this case, the code in the function is that legoPopup is now assigned an active class via document.classList.add('active') function;
    iframe.src = "https://www.youtube.com/embed/MM9WRbPD51w";           //the video source is set to the same video in the html div (lego_popup_body classed div element), this is done to ensure that the video keeps opening when the user closes and opens the lego button popup.
    overlay.classList.add('active');                                    //overlay is also assigned the class active.
    
//since both legoPopup (which is lego_popup html element) and overlay have active classes, they will now get associated with the lego_popup.active and overlay.active css changes, i.e the overlay would get
// activated NOT BECAUSE THEY ARE ASSOCIATED WITH AN ACTIVE CLASS, BUT BECAUSE I HAVE CONFIGURED THE lego_popup.active and overlay.active elements in CSS with the appropriate styles to look Active.
});

//The same is done for the hazards_button.
hazards_button.addEventListener('click', function() {
// When the button is clicked, add 'active' class to the popup
    hazards_popup.classList.add('active');
    overlay.classList.add('active');

});

//The same is done for the refund_button.
refund_button.addEventListener('click', function() {
// When the button is clicked, add 'active' class to the popup
    refund_popup.classList.add('active');
    overlay.classList.add('active');
});
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
// Associating the close-buttons with closing said popups

// Add event listener to the close button
closeButton.addEventListener('click', function() {
    // When the close button is clicked, remove 'active' class from the popup
    legoPopup.classList.remove('active');                                             //document.classList.remove('active') removes the active class from whatever element you have associated.
    overlay.classList.remove('active');
    iframe.src = "";
    //basically the closing button1, when clicked removes the active classes from both overlay.active and lego_popup.active css elements making them fall back to their original invisible state.
    //iframe.src = "" makes the video stop as well as the source is not gone, this prevents the video from continuously  playing even when the user exits from the popup.
    //both hazard and refund popups don't have videos so iframe src = "" only happens here.
});

//The same is done for close-button2.
closeButton2.addEventListener('click', function() {
    // When the close button is clicked, remove 'active' class from the popup
    hazards_popup.classList.remove('active');
    overlay.classList.remove('active');
});

//The same is done for close-button3.
closeButton3.addEventListener('click', function() {
    // When the close button is clicked, remove 'active' class from the popup
    refund_popup.classList.remove('active');
    overlay.classList.remove('active');
});
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//Making the checkbox(named check) enable or disable the textarea(named CustomComment)

//Identifying the relevant html elements and converting them to javascript variables.
var checkbox = document.querySelector('input[name="check"]');
var textbox = document.querySelector('textarea[name="CustomComment"]');

// Disable the textbox initially
textbox.disabled = true;

// Add event listener to the checkbox that only runs the function when the status of the checkbox (also known as this.checked) has changed.
//Basically when the checkbox is checked, this.checked = true, when the checkbox is unchecked, this.checked = false.
checkbox.addEventListener('change', function() {
//textbox.disabled = !this.checked; means that the textarea is disabled when this.checked is false (i.e the checkbox is unchecked). Hence, when the checkbox is checked, the textarea is enabled.
textbox.disabled = !this.checked;
textbox.value = " ";
});
//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------




