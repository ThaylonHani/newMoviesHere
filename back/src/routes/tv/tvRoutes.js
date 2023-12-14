import express from "express";
import { tvController } from "../../controller/tvController.js";

export const TvRoutes = express.Router();

TvRoutes.get("/tv", tvController.discoverTv);
TvRoutes.get("/tv/search/:name", tvController.searchTv);
TvRoutes.get("/tv/recommendations/:id", tvController.recommendationsTv);
TvRoutes.get("/tv/similar/:id", tvController.similarTv);
TvRoutes.get("/tv/popular", tvController.popularTv);
TvRoutes.get("/tv/topRated", tvController.topRatedTV);
TvRoutes.get("/tv/onTheAir", tvController.onTheAir);
TvRoutes.get("/tv/genres", tvController.tvGenres);
TvRoutes.get("/tv/genres/:id", tvController.tvGenresId);
TvRoutes.get("/tv/:id", tvController.tvId);