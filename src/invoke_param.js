// This code snippet invokes another js code and even passes (returns?) parameters
var egySzoveg = "ez egy szöveg";
var masikSzoveg = "ez meg egy másik";
var szam = 3;

var complexData = {
   egyik: egySzoveg,
   masik: masikSzoveg,
   inline: "inline szöveg",
   sz: szam
};

var received;

// This code-snippet invokes another js code
fetch("modules/swsw/src/explore.js")
  .then(function(response) {
    return response.text();
  }).then(function(loadedFunctionBody) {
//    console.log(loadedFunctionBody); // this will be a string

//    var myFunc =  new Function("params", loadedFunctionBody);
//    myFunc(complexData);

    received = new Function("params", loadedFunctionBody)(complexData);
});

console.log(received);

console.log("kapott függvény felhasználva:", received.doubleFn(complexData.sz));