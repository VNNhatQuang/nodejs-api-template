# Node.js API Template
This is a starter template for building APIs using Node.js. It includes Express for the web server, Sequelize for the database ORM, and various other useful libraries for API development.


## Project Overview
- **Name**: nodejs_api
- **Version**: 1.0.0
- **Description**: A template for building APIs using Node.js.
- **Author**: [Vo Ngoc Nhat Quang](https://github.com/VNNhatQuang)


## Table of Contents
- Installation
- Project Structure
- Scripts
- Environment Variables
- Database Setup
- API Documentation


## Installation
To get started, clone this repository and install the dependencies:
```sh
git clone https://github.com/VNNhatQuang/nodejs-api-template.git        # Clone repository
cd nodejs_api_template                                                  # Into project folder
npm install                                                             # Install dependencies
```


## Project Structure
The project follows this structure:

    .
    ├── src
    │   ├── config
    │   │    ├── database.ts        # Database config
    │   │    ├── sequelize.js       # Sequelize config
    │   │    └── swagger.ts         # Swagger config
    │   ├── controllers             # Controllers for handling requests
    │   ├── database                
    │   │    ├── migrations         # Sequelize migrations
    │   │    └── seeders            # Sequelize seeders
    │   ├── helpers                 # Utility functions used across the application
    │   ├── middleware              # Custom middleware functions
    │   ├── models                  # Sequelize models
    │   ├── routes                  # Route definitions
    │   ├── services                # Business logic
    │   ├── validators              # Schema Joi to validate request
    │   ├── app.ts                  
    │   └── index.ts                        
    ├── .env.example                
    ├── .sequelizerc                # Sequelize configuration
    ├── package-lock.json           
    ├── package.json                
    └── README.md               


## Scripts
In the `package.json`, you can find various useful scripts:
- **Start the development server**:
    ```sh
    npm run dev
    ```
- **Start the production server**:  
    ```sh
    npm start
    ```
- **Run database migrations**:  
    ```sh
    npm run migrate
    ```
- **Run database seeders**:  
    ```sh
    npm run seeder
    ```


## Environment Variables
To configure the environment variables, create a `.env` file in the root directory. Example:
```sh
DB_HOST = localhost
DB_USER = root
DB_PASSWORD = password
DB_NAME = your_database_name
SECRET_KEY = your_secret_key
```
Make sure to replace these values with your actual settings.


## Database Setup
This template uses **Sequelize** with **MySQL** as the database. You can run migrations and seeders to set up the database schema and initial data:
- **Run migrations**:  
    ```sh
    npm run migrate
    ```
- **Run seeders**:  
    ```sh
    npm run seeder
    ```
Ensure you have set up your `.env` file correctly with your database credentials.


## Use Docker
- **Build**:  
    ```sh
    docker compose build
    ```
- **Run**:  
    ```sh
    docker compose up
    ```


## API Documentation
This template includes **Swagger** for API documentation. To access the documentation, start the server and navigate to:
```sh
http://localhost:3000/api-docs
```
Ensure you have set up your `.env` file correctly with your database credentials.