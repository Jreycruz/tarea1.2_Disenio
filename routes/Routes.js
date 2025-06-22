import express from 'express';
import { getProductosDisponibles } from '../controllers/controller.js';

const router = express.Router();

router.get('/', getProductosDisponibles);

export default router;
