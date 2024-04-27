import { Router } from 'express';
import { registerAdmin, loginAdmin, logoutAdmin, profileAdmin, verifyToken } from '../controllers/admin.controller.js';
import { authRequired } from '../middlewares/validateToken.js';
import { validateSchema } from '../middlewares/validator.middleware.js';
import { adminRegisterSchema, adminLoginSchema } from '../schemas/admin.schema.js';

const router = Router();

router.post('/admin/register', validateSchema(adminRegisterSchema), registerAdmin);
router.post('/admin/login', validateSchema(adminLoginSchema), loginAdmin);
router.post('/admin/logout', logoutAdmin);

router.get('/admin/verify', verifyToken);
router.get('/admin/profile', authRequired, profileAdmin);

// Agrega más rutas según tus necesidades aquí...

export default router;

