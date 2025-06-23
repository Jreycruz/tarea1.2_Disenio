import express from 'express';
import { getTodos, getDisponibles, getPorId, crearProducto, actualizarProducto, eliminarProducto } from '../controllers/Controller.js';

const router = express.Router();

router.get('/', getTodos);
router.get('/disponibles', getDisponibles);
router.get('/:id', getPorId);
router.post('/', crearProducto);
router.put('/:id', actualizarProducto);
router.delete('/:id', eliminarProducto);

export default router;
