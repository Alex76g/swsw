// This code-snippet invokes another js code
fetch("modules/swsw/src/attack.js")
  .then(function(response) {
    return response.text();
  }).then(function(data) {
//    console.log(data); // this will be a string
    new Function(data)();
});
