const express = require('express');
const stuffCtrl = require('../controllers/stuff');
const auth = require('../middlewares/auth');
const multer = require('../middlewares/multer-config'); // le middleware qui nous permet de téléchager la photo de produit

const router = express.Router();


router.post('/', auth, multer ,stuffCtrl.createThing);
router.put('/:id', auth, multer, stuffCtrl.modifyThing);
router.delete('/:id', auth, stuffCtrl.deleteThing);
router.get('/:id', auth, stuffCtrl.getOneThing);
router.get('/', auth, stuffCtrl.getAllThing);

module.exports = router;