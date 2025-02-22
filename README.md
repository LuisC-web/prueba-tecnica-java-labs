# Prueba Técnica

Esta es la solución desarrollada con **Angular** y **Nodejs** para prueba técnica
[🔗 https://gist.github.com/rojasjuniore/1b321789ed0e6d4c3fb5055a3dd629b6].

## 📌 Tecnologías Utilizadas

- **Frontend:** Angular (Última versión) + Bootstrap
- **Backend:** API REST con expressjs.
- **Base de Datos:** PostgreSQL con sequelize

---

## 🚀 Instalación y Configuración

### 1️⃣ Clonar el Repositorio

```bash
git clone https://github.com/usuario/proyecto.git
cd proyecto
```

### 2️⃣ Instalar Dependencias

```bash
npm install
```

### 3️⃣ Ejecutar el Proyecto

```bash
ng serve --open
```

Esto abrirá el navegador en `http://localhost:4200/`

---

## 📂 Estructura del Proyecto

```
📦 src/app
 ┣ 📂 users             # Módulo de Usuarios
 ┃ ┣ 📜 user-list.component.ts
 ┃ ┣ 📜 user-form.component.ts
 ┃ ┗ 📜 users.module.ts
 ┣ 📂 transactions      # Módulo de Transacciones
 ┃ ┣ 📜 transaction-list.component.ts
 ┃ ┣ 📜 transaction-form.component.ts
 ┃ ┗ 📜 transactions.module.ts
 ┣ 📂 services          # Servicios HTTP
 ┃ ┣ 📜 user.service.ts
 ┃ ┗ 📜 transaction.service.ts
 ┣ 📂 types             # Definición de Interfaces
 ┃ ┣ 📜 user.ts
 ┃ ┗ 📜 transaction.ts
 ┣ 📜 app.routes.ts     # Definición de rutas
 ┣ 📜 app.module.ts     # Módulo principal
 ┗ 📜 main.ts           # Punto de entrada
```

---

## 📌 API del Backend

La API expone los siguientes endpoints:

### 🔹 **Usuarios**

- **Obtener todos los usuarios**  
  `GET /users`
- **Obtener usuario por ID**  
  `GET /users/{id}`
- **Crear un usuario**  
  `POST /users`
  ```json
  {
    "name": "Luis",
    "email": "luis@gmail.com"
  }
  ```

### 🔹 **Transacciones**

- **Obtener transacciones de un usuario**  
  `GET /users/{id}/transactions`
- **Registrar una transacción**  
  `POST /transactions`
  ```json
  {
    "user_id": 1,
    "amount": "50.00",
    "type": "deposit"
  }
  ```

---

## 📌 Uso del Frontend

### 🔹 **Pantalla de Usuarios**

- Lista de usuarios con opción para ver transacciones
- Formulario para agregar nuevos usuarios

### 🔹 **Pantalla de Transacciones**

- Lista de transacciones de un usuario
- Formulario para agregar depósitos y retiros

---

## 📌 Notas

- Asegúrate de configurar la URL de la API en los servicios Angular (`user.service.ts` y `transaction.service.ts`).
- Puedes modificar el diseño con Bootstrap según tus necesidades.
- Si encuentras errores, revisa la consola del navegador (`F12 > Console`).

---

### 📌 Autor

👤 **Tu Nombre**  
📧 Contacto: tuemail@gmail.com
