import express from 'express';
import { getTodos, getDisponibles, getPorId, crearProducto } from '../controllers/Controller.js';

const router = express.Router();

router.get('/', getTodos);
router.get('/disponibles', getDisponibles);
router.get('/:id', getPorId);
router.post('/', crearProducto);

export default router;
