const {Router} = require('express') 
const router = Router();

const {getEvents, saveEvents} = require('../controllers/eventController')

router.get('/events', getEvents)
router.post('/saveEvents', saveEvents)

module.exports = router