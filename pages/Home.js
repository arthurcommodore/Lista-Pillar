yum.define([
    PiUrl.create("pages/Home.html"),
    PiUrl.create("pages/Home.css"),
    PiUrl.create("components/Table.js"),
    PiUrl.create("components/Form.js")
], function(html) {

    PiExport("Home", class extends PiComponent {
        instances() {
            this.view = html;
        }
        viewDidLoad() {
            this.form.table = this.table
        }
    });
})

