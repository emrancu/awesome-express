import  express from 'express' ;

const  api  = express.Router();

api.get('/test', (req, res) => {
    res.send('Hello World!')
})

export default api;
