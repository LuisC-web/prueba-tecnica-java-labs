# Prueba Técnica - Full Stack Developer (Angular + Express.js + PostgreSQL)

## Descripción

Esta prueba técnica consiste en desarrollar una aplicación Full Stack con **Angular, Express.js y PostgreSQL** para gestionar usuarios y sus transacciones.  
El objetivo es evaluar la capacidad del candidato para trabajar con **APIs RESTful, bases de datos relacionales y frontend en Angular**.

## Tecnologías requeridas

- **Frontend:** Angular (última versión recomendada)
- **Backend:** Node.js con Express.js
- **Base de datos:** PostgreSQL

---

## Requisitos del Proyecto

### 1. Backend (Express.js + PostgreSQL)

Se debe desarrollar una API que permita:

- **Crear usuarios**
  - Endpoint: `POST /users`
  - Recibe un JSON con `name` y `email`
  - No debe permitir emails duplicados
- **Listar usuarios**
  - Endpoint: `GET /users`
  - Devuelve la lista de usuarios registrados
- **Registrar transacciones**
  - Endpoint: `POST /transactions`
  - Recibe `user_id`, `amount` y `type` (`deposit` o `withdrawal`)
  - No debe permitir transacciones con montos negativos
  - No debe permitir retiros si el usuario no tiene saldo suficiente
- **Obtener transacciones por usuario**
  - Endpoint: `GET /transactions/:user_id`
  - Devuelve el historial de transacciones del usuario

### 2. Frontend (Angular)

Se debe desarrollar una interfaz en Angular con:

- **Pantalla de Usuarios**
  - Formulario para agregar nuevos usuarios
  - Tabla que muestre la lista de usuarios y un botón para ver sus transacciones
- **Pantalla de Transacciones**
  - Formulario para registrar una nueva transacción (depósito o retiro)
  - Tabla que muestre el historial de transacciones del usuario seleccionado
- **Servicios en Angular**
  - Implementación de `HttpClient` para consumir la API del backend
  - Manejo de estado para evitar recargas innecesarias

---

## Modelo de Base de Datos

Antes de comenzar, importar la siguiente estructura en PostgreSQL:

```sql
CREATE TABLE users (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

CREATE TABLE transactions (
    id SERIAL PRIMARY KEY,
    user_id INT NOT NULL,
    amount DECIMAL(10,2) NOT NULL,
    type VARCHAR(10) CHECK (type IN ('deposit', 'withdrawal')),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE CASCADE
);
```

---

## Evaluación

Se evaluará:

- Correcta implementación de la conexión a PostgreSQL.
- Creación y uso adecuado de los endpoints en Express.js.
- Aplicación de validaciones en el backend.
- Integración funcional entre frontend y backend.
- Uso correcto de Angular, incluyendo modularización y servicios.
- Diseño simple pero funcional en el frontend.
- Uso adecuado de consultas SQL y relaciones entre tablas.

---

## Entrega

- Subir el código a un **repositorio público en GitHub**.
- Incluir este `README.md` con instrucciones claras.
- Enviar el enlace del repositorio junto con la documentación de su solución.
- Tiempo estimado: **4 a 6 horas**.
- Documentacion :Documentacion.md

---
