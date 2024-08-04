import { DataSource } from "typeorm";
import { Chapters, MangaMetadata } from "./entities";
import { config } from "dotenv";

const env = config().parsed;
console.log(env);
export const AppDataSource = new DataSource({
  type: "postgres",
  host: env.DB_HOST || "localhost",
  port: Number(env.DB_PORT) || 5432,
  username: env.DB_USERNAME || "postgres",
  password: env.DB_PASSWORD || "postgres",
  database: env.DB_NAME || "postgres",
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
