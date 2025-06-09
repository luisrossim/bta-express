import { Router } from "express";
import authRoutes from '@/routes/v1/auth.routes.js'
import customerRoutes from '@/routes/v1/customer.routes.js'
import userRoutes from '@/routes/v1/user.routes.js'
import stageRoutes from '@/routes/v1/stage.routes.js'
import orderRoutes from '@/routes/v1/order.routes.js'
import orderHistoryRoutes from '@/routes/v1/order-history.routes.js'

const router = Router();

router.use('/v1/auth', authRoutes)
router.use('/v1/customers', customerRoutes)
router.use('/v1/users', userRoutes)
router.use('/v1/stages', stageRoutes)
router.use('/v1/orders', orderRoutes)
router.use('/v1/orders/history', orderHistoryRoutes)

export default router;