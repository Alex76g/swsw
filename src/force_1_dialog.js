new Dialog({
    title: params.strings.dialogTitle,
    content: params.strings.dialogContent,
    buttons: {
        force: {
            label: params.strings.forceButton,
            callback: async (html) => {
                useConvictionForm(html);
            }
        },
        redemption: {
            label: params.strings.redemptionButton,
            callback: async (html) => {
                redemptionForm(html);
            }
        },
        darkside: {
            label: params.strings.darksideButton,
            callback: async (html) => {
                darksideForm(html);
            }
        }
    },
}, { width: 400 }).render(true);

async function useConvictionForm() {
    console.log("conviction", params);
}

async function redemptionForm() {
    console.log("redemption", params);
}

async function darksideForm() {
    console.log("darkside", params);
}