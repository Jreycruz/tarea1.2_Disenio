import express from 'express';
import { getTodos, getDisponibles, getPorId  } from '../controllers/controller.js';

const router = express.Router();

router.get('/', getTodos);
router.get('/disponibles', getDisponibles);
router.get('/:id', getPorId);

export default router;