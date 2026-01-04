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
export const router = express.Router();
export const multerUpload = multer({ dest: 'multerUploads/' });
 
//Product related endpoints 
router.get('/products', getProductsController);

router.post('/products', authenticateTokenMiddleware, multerUpload.array('photos'), storeProductsController);

router.get('/products/:id', getSingleProductController);

router.get('/search', searchController);

router.get('/categories', categoriesController);

//Cart and wishlist endpoints
router.get('/cart', getUserCartController);
router.get('/wishlist', getUserWishlistController);

router.post('/cart/items', storeCartItemsController);
router.post('/wishlist/items', storeWishlistItemsController);

router.patch('/cart/items/:itemId', updateCartItemController);//updates item quantity
router.patch('/wishlist/items', updateWishlistItemsController);//updates wishlist items

router.delete('/cart/items/:itemId', removeCartItemController);
router.delete('/wishlist/items/:itemId', removeWishlistItemController);

router.post('/cart/orders', storeUserOrderController);//posting order history

//User authentication endpoints
router.post('/auth/register', registerUserController);

router.post('/auth/login', loginUserController);

router.post('/auth/logout', logoutUserController)

router.get('/auth/profile', getUserProfileController);

router.patch('/auth/profile', updateUserInfoController);

//Order related endpoints
router.get('/orders', getOrderHistoryController);// get user order history