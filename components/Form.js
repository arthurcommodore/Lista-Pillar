yum.define([
    PiUrl.create("components/Form.html"),
    PiUrl.create("components/FormModel.js"),
], function(html) {
    PiExport("Form", class extends PiComponent {
        instances() {
            this.view = html;
            this.form = new FormModel();
        }

        sendContato(e) {
       
        }

        teste() {
            e.preventDefault();

            const erros = this.form.inject(this);
            if(erros.length > 0) {
                return;
            }

            const event = this.event;
            this.form.save().ok(() => {
                event.trigger("updateTable");
            })
        }
    })
})