import fs from 'fs';

const filePath = './data/productos.json';

export function getTodos(req, res) {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    const productos = JSON.parse(data);

    if (!Array.isArray(productos)) {
      return res.status(500).json({ mensaje: 'El archivo no contiene una lista válida de productos.' });
    }

    res.json(productos);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al leer los productos.' });
  }
}

export function getDisponibles(req, res) {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    const productos = JSON.parse(data);

    if (!Array.isArray(productos)) {
      return res.status(500).json({ mensaje: 'El archivo no contiene una lista válida de productos.' });
    }

    const disponibles = productos.filter(p =>
      p && typeof p.disponible === 'boolean' && p.disponible === true
    );

    res.json(disponibles);
  } catch (error) {
    res.status(500).json({ mensaje: 'Error al leer o procesar los productos.' });
  }
}