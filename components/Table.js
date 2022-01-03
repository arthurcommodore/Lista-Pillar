yum.define([PiUrl.create("components/Table.html")], function(html) {
    PiExport("Table", class extends PiComponent {
        instances() {
            this.view = html;
            this.contatos = [];
        }

        async viewDidLoad() {
            this.contatos.load(await this.fetchContatos());
        }

        async fetchContatos() {
            const response = await fetch("contatos");
            const dataContatos = await response.json();

            return dataContatos.contatos;
        }
    })
})