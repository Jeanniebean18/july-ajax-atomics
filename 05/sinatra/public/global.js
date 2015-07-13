var finishLinks = document.getElementsByClassName("done_link");
var notfinishLinks = document.getElementsByClassName("undone_link");

var mark_as_done = function(event){
 
  var thisLink = this;
  
  var req = new XMLHttpRequest();

  req.open("get", thisLink.getAttribute("href"));

  req.addEventListener("load", function(){
    thisLink.parentElement.classList.add("finished");
    // var child_to_remove = thisLink.parentNode.childNodes[1];
    // thisLink.parentNode.removeChild(child_to_remove);
  });
  
  req.addEventListener("load", function(){
    
  });

  req.send();

  // Prevent the link from refreshing the DOM.
  event.preventDefault();
}

var mark_as_undone = function(event){
 
  var unLink = this;
  
  var req = new XMLHttpRequest();

  req.open("get", unLink.getAttribute("href"));

  req.addEventListener("load", function(){
    unLink.parentElement.classList.remove("finished");
    // var child_to_add = unLink.parentNode.childNodes[1];
    //    unLink.parentNode.appendChild(child_to_add);
  });

  req.send();

  // Prevent the link from refreshing the DOM.
  event.preventDefault();
}


// When the link is clicked, run the above code.

for (var i=0; i < finishLinks.length; i++) {
  // finishLinks[i] represents each of the items in `finishLinks`.
  finishLinks[i].addEventListener("click", mark_as_done)
}

for (var i=0; i < notfinishLinks.length; i++) {
  // finishLinks[i] represents each of the items in `finishLinks`.
  notfinishLinks[i].addEventListener("click", mark_as_undone)
}