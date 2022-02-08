import engine from "express-engine-jsx";
import router from "../routes/routes";
import api from "../routes/api";
import  express from 'express' ;

 class Bootstrap {
    app = null;
    port = 3000;
    constructor(app) {
        this.app = app;
    }

    init(port = 3000){
        this.port = port;
        this.app.set('views', './views/jsx');
        this.app.set('view engine', 'jsx');
        this.app.engine('jsx', engine);

        this.app.use(express.static("public"));

        // initiate api route
        this.app.use('/api/', api );

        // initiate  route
        this.app.use( router );

        this.app.listen(this.port, () => {
            console.log(`App running on port ` + this.port)
        })

    }


}

export default Bootstrap;
