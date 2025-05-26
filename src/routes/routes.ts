import { Router } from "express";
import customerRoutes from '@/routes/v1/customer.routes.js'
import userRoutes from '@/routes/v1/user.routes.js'
import stageRoutes from '@/routes/v1/stage.routes.js'
import serviceOrderRoutes from '@/routes/v1/service-order.routes.js'

const router = Router();

router.use('/v1/cliente', customerRoutes)
router.use('/v1/usuario', userRoutes)
router.use('/v1/etapa', stageRoutes)
router.use('/v1/os', serviceOrderRoutes)

export default router;