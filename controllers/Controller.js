import fs from 'fs';

const filePath = './data/productos.json';

export function getProductosDisponibles(req, res) {
  const data = fs.readFileSync(filePath, 'utf-8');
  const productos = JSON.parse(data);
  const disponibles = productos.filter(p => p.disponible === true);
  res.json(disponibles);
}
