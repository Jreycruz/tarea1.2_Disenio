import express from 'express';
import { getTodos, getDisponibles } from '../controllers/controller.js';

const router = express.Router();

router.get('/', getTodos);
router.get('/disponibles', getDisponibles);

export default router;