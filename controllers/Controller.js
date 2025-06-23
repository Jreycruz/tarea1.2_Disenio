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

export function getPorId(req, res) {
  const id = Number(req.params.id);
  if (!id) return res.status(400).json({ mensaje: 'ID inválido.' });

  const data = fs.readFileSync(filePath, 'utf-8');
  const productos = JSON.parse(data);

  const producto = productos.find(p => p.id === id);
  if (!producto) return res.status(404).json({ mensaje: 'Producto no encontrado.' });

  res.json(producto);
}

export function crearProducto(req, res) {
  const productos = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const nuevo = req.body;

  if (!nuevo.nombre || nuevo.precio <= 0 || !nuevo.descripcion || nuevo.descripcion.length < 10 || typeof nuevo.disponible !== 'boolean') {
    return res.status(400).json({ mensaje: 'Datos inválidos.' });
  }

  nuevo.id = productos.length > 0 ? productos[productos.length - 1].id + 1 : 1;
  nuevo.fecha_ingreso = new Date().toISOString();

  productos.push(nuevo);
  fs.writeFileSync(filePath, JSON.stringify(productos, null, 2));

  res.status(201).json(nuevo);
}

export function actualizarProducto(req, res) {
  const productos = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const id = parseInt(req.params.id);
  const producto = productos.find(p => p.id === id);

  if (!producto) {
    return res.status(404).json({ mensaje: 'Producto no encontrado.' });
  }

  const nuevo = req.body;

  if (!nuevo.nombre || nuevo.precio <= 0 || !nuevo.descripcion || nuevo.descripcion.length < 10 || typeof nuevo.disponible !== 'boolean') {
    return res.status(400).json({ mensaje: 'Datos inválidos.' });
  }

  producto.nombre = nuevo.nombre;
  producto.precio = nuevo.precio;
  producto.descripcion = nuevo.descripcion;
  producto.disponible = nuevo.disponible;

  fs.writeFileSync(filePath, JSON.stringify(productos, null, 2));
  res.json(producto);
}

export function eliminarProducto(req, res) {
  const productos = JSON.parse(fs.readFileSync(filePath, 'utf-8'));
  const id = parseInt(req.params.id);
  const index = productos.findIndex(p => p.id === id);

  if (index === -1) {
    return res.status(404).json({ mensaje: 'Producto no encontrado.' });
  }

  const eliminado = productos.splice(index, 1)[0];
  fs.writeFileSync(filePath, JSON.stringify(productos, null, 2));

  res.json({ mensaje: 'Producto eliminado.', producto: eliminado });
}
