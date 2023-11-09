use('nike');
db.usuarios.insertMany([
    {
      nombre: "maria",
      apellido: "limpieza",
      correo: "hot@gmail.com",
      password: "963",
      rol: 'admin',
      permisos: {
          "/usuario": ["1.0.0","1.0.1","1.0.2","1.0.3,1.0.4","1.0.5","1.0.6","1.0.7"],
          "/admin": ["1.0.0","1.0.1","1.0.2","1.0.3,1.0.4","1.0.5","1.0.6","1.0.7"]
        }
    },
    {
      nombre: "damara",
      apellido: "cocina",
      correo: "cocina@gmail.com",
      password: "963",
      rol: 'usuario',
      permisos: {
          "/usuario": ["1.0.0","1.0.1","1.0.2","1.0.3,1.0.4","1.0.5","1.0.6","1.0.7"]
        }
    },
    {
      nombre: "pedro",
      apellido: "ramirez",
      correo: "pedro@gmail.com",
      password: "963",
      rol: 'usuario',
      permisos: {
          "/usuario": ["1.0.0","1.0.1","1.0.2","1.0.3,1.0.4","1.0.5","1.0.6","1.0.7"]
        }
    }
])

use('nike');
db.productos.insertMany([
    {
        nombre: 'nike ss1',
        imagen: 'sin imagen aun',
        categoria: 'deportivo',
        stock: 5,
        precio: 50.000
    },
    {
        nombre: 'nike ss2',
        imagen: 'sin imagen aun',
        categoria: 'deportivo',
        stock: 4,
        precio: 70.000
    },
    {
        nombre: 'nike ss3',
        imagen: 'sin imagen aun',
        categoria: 'informal',
        stock: 6,
        precio: 120.000
    },
    {
        nombre: 'nike ss4',
        imagen: 'sin imagen aun',
        categoria: 'informal',
        stock: 5,
        precio: 80.000
    },
    {
        nombre: 'nike ss5',
        imagen: 'sin imagen aun',
        categoria: 'deportivo',
        stock: 12,
        precio: 150.000
    }
])

use('nike');
db.carrito.insertMany([
    {
        email: 'pedro@gmail.com',
        nombre: 'nike ss1'
    },
    {
        email: 'pedro@gmail.com',
        nombre: 'nike ss2'
    },
    {
        email: 'cocina@gmail.com',
        nombre: 'nike ss4'
    },
    {
        email: 'cocina@gmail.com',
        nombre: 'nike ss1'
    }
])

use('nike');
db.solicitud.insertMany([
    {
        email: 'pedro@gmail.com',
        nombre: 'nike ss1',
        fechaSolicitud: '2023-01-01'
    },
    {
        email: 'pedro@gmail.com',
        nombre: 'nike ss2',
        fechaSolicitud: '2023-01-01'
    },
    {
        email: 'cocina@gmail.com',
        nombre: 'nike ss4',
        fechaSolicitud: '2023-03-01'
    },
    {
        email: 'cocina@gmail.com',
        nombre: 'nike ss1',
        fechaSolicitud: '2023-03-05'
    }
])
