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
            content: "Biztos, hogy elköltesz egy Conviction pontot?",
            buttons: {
                yes: {
                    label: "Igen",
                    callback: async (html) => {
                        params.currentActor.data.data.details.conviction.value--;
                    }
                },
                no: {
                    label: "Nem"
                },
            },
        }, { width: 400 }).render(true);
    } else {
        console.log("asdf");
    }
}

async function redemptionForm() {
    console.log("redemption", params);
}

async function darksideForm() {
    console.log("darkside", params);
}