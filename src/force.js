var strings = {
   dialogTitle: "Erőhasználat",
   dialogContent: "",
   forceButton: "Velem van az erő",
   redemptionButton: "A világos ösvényre lépek",
   darksideButton: "A sötét oldalhoz fordulok segítségért",
   forceStatement: "Velem van az erő",
   redemtionStatement: "A világos ösvényre lépek",
   darksideStatement: "A sötét oldalhoz fordulok segítségért"
};

fetch("modules/swsw/src/force_0_start.js")
  .then(function(response) {
    return response.text();
  }).then(function(loadedFunctionBody) {
    new Function("params", loadedFunctionBody)(strings);
});
