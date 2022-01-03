yum.define([PiUrl.create("components/Form.html")], function(html) {
    PiExport("Form", class extends PiComponent {
        instances() {
            this.view = html;
        }
    })
})