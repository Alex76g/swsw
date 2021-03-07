new Dialog({
    title: params.strings.dialogTitle,
    content: params.strings.dialogContent,
    buttons: {
        force: {
            label: params.strings.forceButton,
            callback: async (html) => {
                useConvictionForm();
            }
        },
        redemption: {
            label: params.strings.redemptionButton,
            callback: async (html) => {
                redemptionForm();
            }
        },
        darkside: {
            label: params.strings.darksideButton,
            callback: async (html) => {
                darksideForm();
            }
        }
    },
}, { width: 400 }).render(true);

async function useConvictionForm() {
    if(params.currentActor.data.data.details.conviction.value > 0){
        new Dialog({
            title: params.strings.dialogTitle + " - Conviction",
            content: "Biztos, hogy elköltesz egy Conviction pontot? (Jelenleg "
                + params.currentActor.data.data.details.conviction.value + " pontod van.)",
            buttons: {
                yes: {
                    label: "Igen",
                    callback: async (html) => {
                        params.currentActor.data.data.details.conviction.value--;
                        ChatMessage.create({
                            speaker: {
                                actor: params.currentActor,
                                alias: params.currentActor.name,
                            },
                            content: params.strings.forceStatement
                        }, {});
                    }
                },
                no: {
                    label: "Nem"
                },
            },
        }, { width: 400 }).render(true);
    } else {
        ui.notifications.warn("Nincs egy Conviction pontod sem, hogy ezt választhasd.");
    }
}

async function redemptionForm() {
    console.log("redemption", params);
}

async function darksideForm() {
    console.log("darkside", params);
}