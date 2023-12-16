import express from 'express';
import { MoviesRoutes } from './movies/moviesRoutes.js';
import { TvRoutes } from './tv/tvRoutes.js';
import { ActorRoutes } from './actor/actorRoutes.js';

export const routes = (app) => {

  app.use(express.json(),MoviesRoutes,TvRoutes,ActorRoutes)
};
