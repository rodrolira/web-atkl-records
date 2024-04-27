import { Router } from 'express';
import { register, login, logout, profile, verifyToken } from '../controllers/auth.controller.js';
import { registerAdmin, loginAdmin, logoutAdmin, profileAdmin, verifyAdminToken } from '../controllers/admin.controller.js';
import { authRequired } from '../middlewares/validateToken.js';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { registerSchema, loginSchema } from '../schemas/auth.schema.js';
import { adminRegisterSchema, adminLoginSchema } from '../schemas/admin.schema.js';

const router = Router();

router.post('/admin/register', validateSchema(adminRegisterSchema), registerAdmin);
router.post('/admin/login', validateSchema(adminLoginSchema), loginAdmin);
router.post('/admin/logout', logoutAdmin);

router.get('/admin/verify', verifyAdminToken);
router.get('/admin/profile', authRequired, profileAdmin);

router.post('/register', validateSchema(registerSchema), register);
router.post('/login', validateSchema(loginSchema), login);
router.post('/logout', logout);

router.get('/verify', verifyToken)
router.get('/profile', authRequired, profile)
export default router

