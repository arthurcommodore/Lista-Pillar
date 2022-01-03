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
            this.contatos.load(await this.fetchContatos());

            const erros = this.form.inject(this);

            if(erros.length > 0) {
                return;
            }
            this.form.save().ok()
        }
    })
})