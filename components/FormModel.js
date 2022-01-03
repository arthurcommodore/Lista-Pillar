yum.define([], function() {
    PiExport("FormModel", class extends PiModel {
        validators() {
            return {
                "number": new PiValidatorCallback("Informe o número de contato", (dt, label) => {
                    if(dt === "") {
                        return false;
                    }
                    return true;
                }),

                "name": new PiValidatorCallback("Informe o nome de contato", (dt, label) => {
                    if(dt === "") {
                        return false;
                    }
                    return true;
                })
            }
        }
    })
})