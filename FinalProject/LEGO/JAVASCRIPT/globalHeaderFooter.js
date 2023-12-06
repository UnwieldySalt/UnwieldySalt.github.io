

function changeToProductPage()
{
    // similar behavior as an HTTP redirect
    window.location.replace("../HTML");
    //or
    // similar behavior as clicking on a link
    window.location.href = "../HTML/productPage.html";
}; 
function changeToHomePage()
{
    // similar behavior as an HTTP redirect
    window.location.replace("../HTML");
    //or
    // similar behavior as clicking on a link
    window.location.href = "../HTML/index.html";
}; 
function changeToAboutPage()
{
    // similar behavior as an HTTP redirect
    window.location.replace("../HTML");
    //or
    // similar behavior as clicking on a link
    window.location.href = "../HTML/aboutCompany.html";
}; 
function changeToContactPage()
{
    // similar behavior as an HTTP redirect
    window.location.replace("../HTML");
    //or
    // similar behavior as clicking on a link
    window.location.href = "../HTML/contactPage.html";
}; 

/* When the user clicks on the button,
toggle between hiding and showing the dropdown content */
function dropDownMenu() 
{
    document.getElementById("myDropdown").classList.toggle("show");
}
  


  // Close the dropdown menu if the user clicks outside of it
  window.onclick = function(event) 
  {
    if (!event.target.matches('.drop_button')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }