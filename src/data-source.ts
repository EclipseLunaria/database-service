import { DataSource } from "typeorm";
import { Chapters, MangaMetadata } from "./entities";
import { config } from "dotenv";
import DB_CONFIG from "../db.config.json";
const env = config().parsed;

export const AppDataSource = new DataSource({
  type: "postgres",
  host: DB_CONFIG.DB_HOST,
  port: Number(DB_CONFIG.DB_PORT),
  username: DB_CONFIG.DB_USER,
  password: DB_CONFIG.DB_PASS,
  database: DB_CONFIG.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [Chapters, MangaMetadata],
  subscribers: [],
  migrations: [],
});

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected successfully");
    // here you can start to work with your database
  })
  .catch((error) => console.log(error));
