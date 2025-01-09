const {Router} = require('express') 
const router = Router();

const {getOrders, saveOrder} = require('../controllers/orderController')

router.get('/orders', getOrders)
router.post('/saveOrder', saveOrder)

module.exports = router