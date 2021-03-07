// This code snippet invokes another js code and even passes (returns?) parameters
var egySzoveg = "ez egy szöveg";
var masikSzoveg = "ez meg egy másik";
var ft = 42;

var complexData = {
   egyik: egySzoveg,
   masik: masikSzoveg,
   inline: "inline szöveg",
   answer: ft
};

console.log("előtte:", complexData);

// This code-snippet invokes another js code
fetch("modules/swsw/src/explore.js")
  .then(function(response) {
    return response.text();
  }).then(function(loadedFunctionBody) {
//    console.log(loadedFunctionBody); // this will be a string

//    var myFunc =  new Function("params", loadedFunctionBody);
//    myFunc(complexData);

    new Function("params", loadedFunctionBody)(complexData);
});

console.log("utána:", complexData);