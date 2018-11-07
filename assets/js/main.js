var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3000);
}

function showPage() {
  document.getElementById("spinner").style.display = "none";
  document.getElementById("welcome").style.display = "block";
}