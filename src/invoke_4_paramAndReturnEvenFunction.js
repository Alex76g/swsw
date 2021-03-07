// This code snippet invokes another js code and even passes parameters (we don't care about returning anyhing yet)
var egySzoveg = "ez egy szöveg";
var masikSzoveg = "ez meg egy másik";
var szam = 3;

var complexData = {
   egyik: egySzoveg,
   masik: masikSzoveg,
   inline: "inline szöveg",
   sz: szam
};

fetch("modules/swsw/src/invoke_4inside.js")
  .then(function(response) {
    return response.text();
  }).then(function(loadedFunctionBody) {
//    console.log(loadedFunctionBody); // this will be a string

//    var myFunc =  new Function("params", loadedFunctionBody);
//    myFunc(complexData);

    return new Function("params", loadedFunctionBody)(complexData);
  }).then(function(response) {
    console.log("fv alkalmazása után:", response.doubleFn(complexData.sz));
});