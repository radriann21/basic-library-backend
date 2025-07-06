# Basic Library Backend

This repository contains the backend service for a basic library management system. It is built with Node.js, Express, and PostgreSQL, providing a RESTful API for managing books, users, and loans.

## Features

*   **Book Management**: Full CRUD (Create, Read, Update, Delete) operations for books.
*   **User Management**: Full CRUD operations for library users.
*   **Loan Management**: Full CRUD operations for book loans, linking users and books.
*   **Database Integration**: Uses Sequelize ORM for interacting with a PostgreSQL database.
*   **API Rate Limiting**: Implemented to prevent abuse and ensure service stability.
*   **Structured Project**: Organized into services, controllers, routes, and models for maintainability.

## Tech Stack

*   **Backend**: Node.js, Express.js
*   **Database**: PostgreSQL
*   **ORM**: Sequelize
*   **Middleware**: CORS, Express Rate Limit
*   **Environment Variables**: Dotenv

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

*   [Node.js](https://nodejs.org/en/) (v14 or later)
*   [npm](https://www.npmjs.com/)
*   A running instance of [PostgreSQL](https://www.postgresql.org/)

### Installation

1.  **Clone the repository:**
    ```sh
    git clone https://github.com/radriann21/basic-library-backend.git
    cd basic-library-backend
    ```

2.  **Install dependencies:**
    ```sh
    npm install
    ```

3.  **Set up environment variables:**
    Create a `.env` file in the root of the project and add the following configuration variables. Replace the values with your PostgreSQL database credentials.

    ```env
    DB_USER=postgres
    DB_PASSWORD=your_password
    DB_NAME=library_database
    DB_HOST=localhost
    DB_PORT=5432
    ```

4.  **Set up the database:**
    Connect to your PostgreSQL instance and run the SQL script located in `queries/create_tables.sql` to create the necessary tables (`libros`, `usuarios`, `prestamos`).

    ```sql
    -- queries/create_tables.sql

    CREATE TABLE libros (
      id SERIAL PRIMARY KEY,
      titulo VARCHAR(255) NOT NULL,
      autor VARCHAR(255) NOT NULL,
      genero VARCHAR(100) NOT NULL,
      fecha_publicacion DATE NOT NULL,
      isbn VARCHAR(20) UNIQUE NOT NULL,
      paginas INT NOT NULL,
      disponible BOOLEAN DEFAULT TRUE
    );

    CREATE TABLE usuarios (
      id SERIAL PRIMARY KEY,
      nombre VARCHAR(255) NOT NULL,
      apellido VARCHAR(255) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      direccion VARCHAR(255),
      fecha_registro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );

    CREATE TABLE prestamos (
      id SERIAL PRIMARY KEY,
      libro_id INT NOT NULL,
      usuario_id INT NOT NULL,
      fecha_prestamo TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      fecha_devolucion DATE DEFAULT NULL,
      FOREIGN KEY (libro_id) REFERENCES libros(id) ON DELETE RESTRICT,
      FOREIGN KEY (usuario_id) REFERENCES usuarios(id) ON DELETE RESTRICT
    );
    ```

### Running the Server

*   **Development mode** (with auto-reloading using nodemon):
    ```sh
    npm run dev
    ```

*   **Production mode:**
    ```sh
    npm run start
    ```

The server will start on `http://localhost:3001` by default.

## API Endpoints

All endpoints are prefixed with `/api`.

### Books (`/libros`)

| Method | Endpoint              | Description               |
| :----- | :-------------------- | :------------------------ |
| `GET`  | `/`                   | Get all books             |
| `GET`  | `/:id`                | Get a single book by ID   |
| `GET`  | `/genre/:genre`       | Get books by genre        |
| `POST` | `/`                   | Create a new book         |
| `PUT`  | `/:id`                | Update an existing book   |
| `DELETE`| `/:id`               | Delete a book             |

### Users (`/usuarios`)

| Method | Endpoint | Description                 |
| :----- | :------- | :-------------------------- |
| `GET`  | `/`      | Get all users               |
| `GET`  | `/:id`   | Get a single user by ID     |
| `POST` | `/`      | Create a new user           |
| `PUT`  | `/:id`   | Update an existing user     |
| `DELETE`| `/:id`  | Delete a user               |

### Loans (`/prestamos`)

| Method | Endpoint | Description                                         |
| :----- | :------- | :-------------------------------------------------- |
| `GET`  | `/`      | Get all loans with associated book and user details |
| `GET`  | `/:id`   | Get a single loan by ID                             |
| `POST` | `/`      | Create a new loan                                   |
| `PUT`  | `/:id`   | Update an existing loan                             |
| `DELETE`| `/:id`  | Delete a loan                                       |
