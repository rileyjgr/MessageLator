const bodyParser = require('body-parser');
const path = require('path');

const servercontrollers = require('../controllers/servercontrollers');
const apicontrollers = require('../controllers/apicontrollers');
const appcontrollers = require('../controllers/appcontrollers');

require('dotenv');

module.exports ={

    html: async(app)=>{
        app.get('/api/feedback', (req, res)=> {
            appcontrollers.feedback(req, res);
        });
        app.use(express.static(`${__dirname}/../../dist`));
        app.use(express.static(`${__dirname}/../../dist/js/contact.js`));
        app.get('*', (req, res) => {
            res.sendFile(path.join(`${__dirname}/../../dist/index.html`));
        });
    },
    api: async(app)=>{
        app.get('/api/messagelator', (req, res)=>{
            apicontrollers.translate(req, res);
        });
    }
}