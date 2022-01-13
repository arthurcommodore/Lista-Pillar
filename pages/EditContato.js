yum.define([
    PiUrl.create("pages/EditContato.html"),
    PiUrl.create("pages/EditContato.css"),
    PiUrl.create("pages/EditContatoModel.js")
], function(html) {

    PiExport("EditContato", class extends PiComponent {
        instances() {
            this.view = html;
            this.editContato = new EditContatoModel();
            this.contato = app.contato;
        }


        viewDidLoad() {
        }


        sendContato(e) {
            e.preventDefault();

            this.event.listen("recebedId", (id) => {
                this.id = id;
            })

            const erros = this.editContato.inject(this);
            if(erros.length > 0) {
                return;
            }

            const event = this.event;
            this.editContato.update().ok(() => {
                event.trigger("updateTable");
            });
        }
    });
})

