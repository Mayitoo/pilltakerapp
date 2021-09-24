const express = require('express')
const router = express.Router()

const pillController = require('../controllers/pillsController')

router.get('/',pillController.RenderPillView)

module.exports = router