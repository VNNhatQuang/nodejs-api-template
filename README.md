1. Create .env from .env.example:
    `cp .env.example .env`

2. Run command to download dependencies:
    `npm install`

3. Serve application:
    `npm run dev`


Migrations and Seeders:

    1. Create migrations:
        `npx sequelize-cli migration:generate --name <migration_name>`
    2. Run all migrations:
        `npx sequelize-cli db:migrate`

    3. Create seeders:
        `npx sequelize-cli seeder:generate --name <seeder_name>`
    4. Run all seeders:
        `npx sequelize-cli db:seed:all`
    5. Others:
        `npx sequelize-cli`