-- SQL statements

CREATE DATABASE `db_dev` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
CREATE DATABASE `db_test` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;
CREATE DATABASE `db_prod` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_general_ci;

USE db_dev;

SELECT * FROM users;

DROP DATABASE `db_dev`;
DROP DATABASE `db_test`;
DROP DATABASE `db_prod`;



/* Seuqlize commands

-- Initialize
sequelize init

-- Create a first model
sequelize model:generate --name User --attributes firstName:string,lastName:string,email:string

-- First migration
sequelize db:migrate --env development

-- Genrate a seed to populate the db
sequelize seed:generate --name demo-user

-- Run all seeds
sequelize db:seed:all

-- Reset de database table
sequelize db:migrate:undo:all
sequelize db:migrate

 */
