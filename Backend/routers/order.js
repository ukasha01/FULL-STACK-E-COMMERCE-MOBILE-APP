const express = require('express')
const router = express.Router()
const orderController = require('../controller/orderController')
router.get('/order', orderController.getOrder)
router.get('/order/:id', orderController.getSpecificOrder)
router.post('/order', orderController.createOrder)
router.put('/order/:id', orderController.updateOrder)
router.delete('/order/:id', orderController.deleteOrder)
router.get('/get_total_sales', orderController.getSale)
router.get('/get/count', orderController.orderCount)


module.exports = router 