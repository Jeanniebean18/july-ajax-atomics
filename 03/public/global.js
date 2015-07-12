var myLink = document.getElementById("clicker");

var handleTheClick = function(event){
  var link = this;
  var req = new XMLHttpRequest();

  req.open("get", link.getAttribute("href"));

  req.addEventListener("load", function(){
    link.innerHTML = req.response;
  });

  req.send();
  // ?????????
  
  // Prevent the link from refreshing the DOM.
  event.preventDefault();
}

myLink.addEventListener("click", handleTheClick);

// When the link is clicked, run the above code.




