var req = new XMLHttpRequest();

// For 'Exercise 2', you will modify this line:
req.open("get", "/path2");

req.addEventListener("loadstart", function(){
  console.log("loadstart");
});

req.addEventListener("load", function(){
  // alert(this.response);
  if (this.response === "yes") {
    alert("yay!");
  }
  else {
    alert("Aw, shucks!");
  }
});

req.send();
