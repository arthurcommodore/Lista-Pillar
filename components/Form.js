yum.define([
    PiUrl.create("components/Form.html"),
    PiUrl.create("components/FormModel.js")
], function(html) {
    PiExport("Form", class extends PiComponent {
        instances() {
            this.view = html;
            this.form = new FormModel();
        }

        sendContato(e) {
            e.preventDefault();

            const erros = this.form.inject(this);
            if(erros.length > 0) {
                return;
            }

            const table = this.table;
            this.form.save().ok(() => {

                this.event.trigger("updateTable");
                table.updateTable();
            })
        }
    })
})