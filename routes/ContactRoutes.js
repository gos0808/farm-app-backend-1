const {Router} = require('express') 
const router = Router();

const {getContact, saveContact} = require('../controllers/contactController')

router.get('/contact', getContact)
router.post('/saveContact', saveContact)

module.exports = router