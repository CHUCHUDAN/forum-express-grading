const express = require('express')
const router = express.Router()
const adminController = require('../../controllers/admin-controller')
const upload = require('../../middleware/multer')

// 新增餐廳頁面
router.get('/restaurants/create', adminController.createRestaurant)
// 編輯餐廳頁面
router.get('/restaurants/:id/edit', adminController.editRestaurant)
// 編輯餐廳功能
router.put('/restaurants/:id', upload.single('image'), adminController.putRestaurant)
// 瀏覽單一餐廳
router.get('/restaurants/:id', adminController.getRestaurant)
// 刪除餐廳功能
router.delete('/restaurants/:id', adminController.deleteRestaurant)
// 修改管理員權限
router.patch('/users/:id', adminController.patchUser)
// 新增餐廳功能
router.post('/restaurants', upload.single('image'), adminController.postRestaurant)
// 瀏覽全部頁面
router.get('/restaurants', adminController.getRestaurants)
// 瀏覽全部使用者
router.get('/users', adminController.getUsers)
// 無法匹配路由皆會丟到這
router.use('/', (req, res) => res.redirect('/admin/restaurants'))

module.exports = router
