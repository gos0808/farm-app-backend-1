const {Router} = require('express') 
const router = Router();

const {getProducts, saveProducts} = require('../controllers/productController')

router.get('/products', getProducts)
router.post('/saveProducts', saveProducts)

module.exports = router