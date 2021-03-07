var strings = {
   dialogTitle: params.dialogTitle || "Erőhasználat",
   dialogContent: params.dialogContent || "",
   forceButton: params.forceButton || "Velem van az erő",
   redemptionButton: params.redemptionButton || "A világos ösvényre lépek",
   darksideButton: params.darksideButton || "A sötét oldalhoz fordulok segítségért",
   forceStatement: params.forceStatement || "Velem van az erő",
   redemtionStatement: params.redemtionStatement || "A világos ösvényre lépek",
   darksideStatement: params.darksideStatement || "A sötét oldalhoz fordulok segítségért"
};

if (canvas.tokens.controlled.length != 1) {
    ui.notifications.warn("Ki kell választani a karaktered, hogy ezt a makrót futtasd!");
} else {
    fetch("modules/swsw/src/force_1_dialog.js")
      .then(function(response) {
        return response.text();
      }).then(function(loadedFunctionBody) {
        new Function("params", loadedFunctionBody)({
            strings: strings,
            currentActor: canvas.tokens.controlled[0].actor
        });
    });
}
