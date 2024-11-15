const express = require('express')

const { handleImageUploader,
    addProduct,
    editProduct,
    fetchAllProducts,
    deleteProduct,
    getProductDetail
} = require('../../controllers/admin/products-controler');

const { upload } = require('../../helpers/cloudinary')

const router = express.Router()

router.post('/upload-image', upload.single("my_file"), handleImageUploader);
router.post('/add', addProduct);
router.put('/edit/:id', editProduct);
router.get('/get', fetchAllProducts);
router.delete('/delete/:id', deleteProduct);
router.get('/:id',getProductDetail)

module.exports = router;
