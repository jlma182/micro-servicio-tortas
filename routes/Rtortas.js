const router = require('express').Router();

const micTortasRouter =  require('./mic/tortas');



router.use('/tortas', micTortasRouter);



module.exports = router;
