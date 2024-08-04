import { Router } from "express";
import { uploadSeriesController } from "../controllers/MangaInfoController";

const seriesInfoRouter = Router();

seriesInfoRouter.post("/upload", uploadSeriesController);

export default seriesInfoRouter;
