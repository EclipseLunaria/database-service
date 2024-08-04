import { SeriesInfo } from "../types/seriesInfo";
import { uploadSeries } from "../services/SeriesInfoServices";
import { Request, Response } from "express";

const uploadSeriesController = async (req: Request, res: Response) => {
  const seriesInfo: SeriesInfo = req.body;
  console.log(seriesInfo);
  try {
    await uploadSeries(seriesInfo);
    res.status(200).send("Series uploaded successfully");
  } catch (error) {
    console.log(error);
    res.status(500).send("Internal server error");
  }
};

export { uploadSeriesController };
