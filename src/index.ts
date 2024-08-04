import { AppDataSource } from "./data-source";
import express from "express";
import seriesInfoRouter from "./routes/SeriesInfoRoutes";
AppDataSource.initialize()
  .then(() => {
    console.log("Database connected successfully");

    const app = express();
    app.use(express.json());
    const PORT = (process.env.SERVER_PORT = "3000");
    app.get("/", (req, res) => {
      res.send("Hello World");
    });

    app.use("/series", seriesInfoRouter);

    app.listen(PORT, () => {
      console.log(`Server is running on port http://localhost:${PORT}`);
    });
    // here you can start to work with your database
  })
  .catch((error) => console.log(error));