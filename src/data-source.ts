import { DataSource } from "typeorm";
import { Chapters, MangaMetadata } from "./entities";
import { config } from "dotenv";
const env = config().parsed;

export const AppDataSource = new DataSource({
  type: "postgres",
  host: env.DB_HOST,
  port: Number(env.DB_PORT),
  username: env.DB_USER,
  password: env.DB_PASS,
  database: env.DB_NAME,
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
