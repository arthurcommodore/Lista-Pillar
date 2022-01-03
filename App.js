
class App extends PiApp {
    routes = {
        "default"() {
            app.loadHomePage();
        }
    }

    loadHomePage() {
        yum.download([PiUrl.create("pages/Home.js")], () => {
            this.setPage(new Home());
        });
    }
}


PiExport("App", App)