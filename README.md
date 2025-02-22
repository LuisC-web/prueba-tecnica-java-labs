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
git clone https://github.com/LuisC-web/prueba-tecnica-java-labs
cd prueba-tecnica-java-labs
```

### 2️⃣ Instalar Dependencias frontend y backend

```bash
cd frontend
npm install
cd ../backend
npm install
```

### 3️⃣ Ejecutar el Proyecto

```bash
cd frontend
ng serve --open
cd ../backend
npm run dev
```

## 📂 Estructura del Proyecto frontend

---

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

## 📂 Estructura del Proyecto backend

---

```sh
backend/
├── src/
│   ├── config/         # Configuración (CORS, conexión a la base de datos)
│   │   ├── cors.ts
│   │   ├── db.ts
│   ├── controllers/    # Controladores para manejar la lógica de negocio
│   │   ├── TransactionsController.ts
│   │   ├── UsersController.ts
│   ├── middleware/     # Middlewares (validaciones, autenticación, etc.)
│   │   ├── validation.ts
│   ├── models/         # Modelos de la base de datos
│   │   ├── Transactions.ts
│   │   ├── Users.ts
│   ├── routes/         # Definición de rutas
│   │   ├── transactionsRoutes.ts
│   │   ├── usersRoutes.ts
│   │   ├── index.ts
│   ├── server.ts       # Archivo principal del servidor
├── .env                # Variables de entorno
├── .gitignore          # Archivos ignorados en Git
├── package.json        # Dependencias del proyecto
├── tsconfig.json       # Configuración de TypeScript
```

Para la solucion se crean 2 controladoores los cuales son:

- TransactionsController.ts
  Permite crear la transacion si existe el usuario y hay fondos suficientes. Para poder
  implementar la validación se usa un bucle donde se consulta las transacciones del usuario y se suma o resta dependiendo si es retiro o deposito.

  ```js
  const sumTransactionTotal = transactions.reduce(
    (accumulator, transaction) =>
      accumulator +
      (transaction.get("type") === "withdrawal"
        ? -+transaction.get("amount")
        : +transaction.get("amount")),
    0
  );
  console.log(`Saldo actual: ${sumTransactionTotal}`);

  if (sumTransactionTotal < amount) {
    res.status(402).json({ msg: "Fondos insuficientes" });
    return;
  }
  ```

- UsersController.ts

### Validaciones

Esta se usó la libería de **express-validator** que hace la implementacion mas sencilla

```js
//User
usersRoutes.post(
  "/",
  body("name").notEmpty().withMessage("No puede ir vacio"),
  body("email").isEmail().withMessage("No es un email válido"),
  handleInputError,
  UsersController.createUser
);
usersRoutes.get("/", UsersController.getUsers);
//transactionsRoutes
transactionsRoutes.post(
  "/",
  body("user_id").isInt().withMessage("El id no es válido"),
  body("amount")
    .isNumeric()
    .isFloat({ gt: 0 })
    .withMessage("El monto no es válido"),
  body("type")
    .notEmpty()
    .withMessage("La descripción del proyecto es requerido"),

  body("type")
    .isIn(["deposit", "withdrawal"])
    .withMessage("El type no es un tipo válido"),
  handleInputError,
  TransactionsController.createTransaction
);

transactionsRoutes.get(
  "/:id",
  param("id").isInt().withMessage("ID no válido"),
  handleInputError,
  TransactionsController.getTransaction
);
```

Se hace mediante el uso de middleware, que en el caso dee quue no sea válido retorna los errores.

```js
const handleInputError = (req: Request, res: Response, next: NextFunction) => {
  let errors = validationResult(req);
  if (!errors.isEmpty()) {
    res.status(400).json({ errors: errors.array() });
    return;
  }
  next();
};
```

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
