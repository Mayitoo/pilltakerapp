const express = require('express')
const router = express.Router()

const pillController = require('../controllers/pillsController')

router.get('/',pillController.RenderPillView)
router.post('/savepill',pillController.savePill)
router.post('/editpill/:id',pillController.editPill)
router.get('/deletepill/:id',pillController.deletePill)

module.exports = router