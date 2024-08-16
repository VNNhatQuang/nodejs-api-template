# Node.js API Application Template
A quick setup template for building Node.js API applications.



# Packages
This template uses several key packages in the Node.js ecosystem:
- [express]: Handles HTTP protocol, routing, and middleware.
- [jwt]: Manages authentication using JSON Web Tokens.
- [mysql2]: Provides MySQL database connectivity.
- [sequelize]: Implements Object-Relational Mapping (ORM) for MySQL.
- [swagger]: Generates API documentation.



## 1. Installation

### Prerequisites
- **Node.js version**: >= 20

### Setup Steps

1. Create file ".env"
    ```sh
    cp .env.example .env
    ```

2. Install packages
    ```sh
    npm i
    ```

3. Run app
    ```sh
    npm start       # For production
    npm run dev     # For development
    ```

## 2. Sequelize most used command
### Migrations
1. Create migration:
    ```sh
    npx sequelize-cli migration:generate --name <migration_name>
    ```
2. Run all migration:
    ```sh
    npx sequelize-cli db:migrate
    ```

### Seeders
1. Create seeder:
    ```sh
    npx sequelize-cli seeder:generate --name <seeder_name>
    ```
2. Run all seeder:
    ```sh
    npx sequelize-cli db:seed:all
    ```

### Others:
```sh
npx sequelize-cli
```












   [express]: <https://www.npmjs.com/package/express>
   [jwt]: <https://www.npmjs.com/package/jsonwebtoken>
   [mysql2]: <https://www.npmjs.com/package/mysql2>
   [sequelize]: <https://www.npmjs.com/package/sequelize>
   [swagger]: <https://swagger.io/>
   