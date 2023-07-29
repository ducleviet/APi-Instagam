var express = require('express');
const router = express.Router();

//Router 
router.get('', async (req, res, next) => {
   res.send('Welcome')
});


module.exports = router;