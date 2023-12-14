import express from "express";
import { moviesController } from "../../controller/movieController.js";
export const MoviesRoutes = express.Router();

MoviesRoutes.get('/movie', moviesController.moviesDiscover);
MoviesRoutes.get('/movie/search/:name', moviesController.searchMovie)
MoviesRoutes.get('/movie/recommendations/:id', moviesController.recommendationsMovie);
MoviesRoutes.get('/movie/similar/:id', moviesController.similarMovie);
MoviesRoutes.get("/movie/video/:id", moviesController.videoMovies);
MoviesRoutes.get("/movie/credits/:id", moviesController.creditsMovies);
MoviesRoutes.get('/movie/popular', moviesController.moviesPopular);
MoviesRoutes.get('/movie/topRated', moviesController.topRatedMovies);
MoviesRoutes.get('/movie/upcoming', moviesController.upcomingMovies);
MoviesRoutes.get('/movie/:id', moviesController.moviesId);