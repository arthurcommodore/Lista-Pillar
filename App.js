
class App extends PiApp {
    routes = {
        "default"() {
            app.loadHomePage();
        },

        "edit"() {
            app.loadEditContato();
        }
    }

    loadHomePage() {
        yum.download([PiUrl.create("pages/Home.js")], () => {
            const home = new Home();
            home.render(app.$element)
            //this.setPage(new Home());
        });
    }

    loadEditContato() {
        yum.download([PiUrl.create("pages/EditContato.js")], () => {
            const editContato = new EditContato();

            editContato.render(app.$element);
        })
    }
}


PiExport("App", App)