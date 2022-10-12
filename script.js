function openPage(pageName, elmnt, color) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("tablink");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].style.borderColor = "";
  }

  document.getElementById(pageName).style.display = "block";

}
document.getElementById("defaultOpen").click();

var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
  acc[i].addEventListener("click", function () {
    /* Toggle between adding and removing the "active" class,
    to highlight the button that controls the panel */
    this.classList.toggle("active");

    /* Toggle between hiding and showing the active panel */
    var panel = this.nextElementSibling;
    if (panel.style.display === "block") {
      panel.style.display = "none";
    } else {
      panel.style.display = "block";
    }
  });
}

function openNav() {
  document.getElementById("sidePanel").style.width = "500px";
}
function closeNav() {
  document.getElementById("sidePanel").style.width = "0";
}


function validateEmail(email) {
  var returnValue = true;
  var rxEmail = /^\w(\.?[\w-])*@\w(\.?[\w-])*\.[a-z]{2,6}(\.[a-z]{2})?$/i;
  var email = document.getElementById("txtEmail");
  var error = document.getElementById("error").innerHTML;

  if (email.value.match(rxEmail)) {
    document.getElementById("error").innerHTML = "Success!";
    document.getElementById("error").style.color = "Green";
    return true;
  } else {
    returnValue = false;
    document.getElementById("error").innerHTML =
      "Whoops, make sure it's an email ";
    document.getElementById("error").style.color = "white";
    

  }
}
