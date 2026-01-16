import express from 'express';
import getProductsController from '../Controllers/getProductsController.js';
import getSingleProductController from '../Controllers/getSingleProductController.js';
import searchController from '../Controllers/searchController.js';
import categoriesController from '../Controllers/categoriesController.js';
import getUserCartController from '../Controllers/getUserCartController.js';
import getUserWishlistController from '../Controllers/getUserWishlistController.js';
import storeCartItemsController from '../Controllers/storeCartItemsController.js';
import storeWishlistItemsController from '../Controllers/storeWishlistItemsController.js';
import updateCartItemController from '../Controllers/updateCartItemController.js';
import updateWishlistItemsController from '../Controllers/updateWishlistItemsController.js';
import removeCartItemController from '../Controllers/removeCartItemController.js';
import removeWishlistItemController from '../Controllers/removeWishlistItemController.js';
import storeUserOrderController from '../Controllers/storeUserOrderController.js';
import registerUserController from '../Controllers/registerUserController.js';
import loginUserController from '../Controllers/loginUserController.js';
import logoutUserController from '../Controllers/logoutUserController.js';
import getUserProfileController from '../Controllers/getUserProfileController.js';
import getOrderHistoryController from '../Controllers/getOrderHistoryController.js';
import updateUserInfoController from '../Controllers/updateUserInfoController.js';
import storeProductsController from '../Controllers/storeProductsController.js';
import authenticateTokenMiddleware from '../Middleware/authenticateTokenMiddleware.js';
import multer from 'multer';
import removeProductController from '../Controllers/removeProductController.js';
import updateProductInfoController from '../Controllers/updateProductInfoController.js';
export const router = express.Router();
export const multerUpload = multer({ dest: 'multerUploads/' });
 
//Product related endpoints 
router.get('/products', getProductsController);

router.post('/products', authenticateTokenMiddleware, multerUpload.array('photos'), storeProductsController);

router.delete('/products/:id', authenticateTokenMiddleware, removeProductController);

router.patch('/products/:id', authenticateTokenMiddleware, multerUpload.array('photos'), updateProductInfoController);

router.get('/products/:id', getSingleProductController);

router.get('/search/:query', searchController);

router.get('/categories/:category', categoriesController);

//Cart and wishlist endpoints
router.get('/cart', authenticateTokenMiddleware, getUserCartController);
router.get('/wishlist', authenticateTokenMiddleware, getUserWishlistController);

router.post('/cart/items', authenticateTokenMiddleware, storeCartItemsController);
router.post('/wishlist/items', authenticateTokenMiddleware, storeWishlistItemsController);
router.patch('/cart/items', authenticateTokenMiddleware, updateCartItemController);//updates item quantity
router.patch('/wishlist/items', authenticateTokenMiddleware, updateWishlistItemsController);//updates wishlist items

router.delete('/cart/items', authenticateTokenMiddleware, removeCartItemController);
router.delete('/wishlist/items', authenticateTokenMiddleware, removeWishlistItemController);
router.post('/cart/orders', authenticateTokenMiddleware, storeUserOrderController);//posting order history

//User authentication endpoints
router.post('/auth/register', registerUserController);

router.post('/auth/login', loginUserController);

router.post('/auth/logout', logoutUserController);

router.get('/auth/profile', authenticateTokenMiddleware, getUserProfileController);

router.patch('/auth/profile', authenticateTokenMiddleware, updateUserInfoController);

//Order related endpoints
router.get('/orders', authenticateTokenMiddleware, getOrderHistoryController);// get user order history