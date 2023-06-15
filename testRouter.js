const {Router} = require('express');

const testRouter = Router();

testRouter.get('/', async (req, res) => {
    try {
        res.json({links: [{
            f: 15
            }]});

    } catch (e) {
        console.log('catch in router', e.message);
        res.status(500).json({message: 'error'})
    }

});

module.exports = testRouter;




