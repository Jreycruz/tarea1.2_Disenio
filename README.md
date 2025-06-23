
Esta es una API desarrollada con Node.js y Express que permite gestionar un listado de productos. 
Los datos se almacenan en un archivo `productos.json` ubicado en la carpeta `data`.

# Instalación

para intalar las dependencias necesarias utiliza el comando: 
npm install


# Para iniciar el servidor:
npm run dev

Esto iniciará la API en: http://localhost:3000

# Formato de un producto
{
  "id": 1,
  "nombre": "Ejemplo de producto",
  "precio": 49.99,
  "descripcion": "Una descripción válida del producto.",
  "disponible": true,
  "fecha_ingreso": "2025-06-22T15:00:00.000Z"
}

# validaciones
nombre: obligatorio (texto).
precio: obligatorio (número mayor a 0).
descripcion: mínimo 10 caracteres.
disponible: booleano (true o false).

Puedes usar api.http para probar los endpoints.