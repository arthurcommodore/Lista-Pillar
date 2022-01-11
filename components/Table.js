yum.define([
    PiUrl.create("components/Table.html"),
    PiUrl.create("components/Table.css"),
    PiUrl.create("components/TableModel.js")
], function(html) {
    PiExport("Table", class extends PiComponent {
        
        static contatosValue = []
        instances() {
            this.view = html;
            this.contatos = [];

            this.table = new TableModel();
        }

        viewDidLoad() {
            this.updateTable();
        }

       updateTable() {
            this.table.inject(this)
            const contatos = this.contatos


            this.table.get()
                .ok(function(data) {
                    contatos.clear();
                    contatos.load(data.contatos);
                })
        }

        deleteContato(contato) {
            this.table.remove(contato.id).ok( () => {
                this.updateTable()
            })
        }
    })
})