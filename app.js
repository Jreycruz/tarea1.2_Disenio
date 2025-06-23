import express from 'express';
import disponiblesRoutes from './routes/Routes.js';

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/productos', disponiblesRoutes);

app.listen(PORT, () => {
  console.log(`Servidor en http://localhost:${PORT}`);
});
