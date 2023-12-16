import  express  from "express";
import { actorController } from "../../controller/actorController.js";
export const ActorRoutes = express.Router();

ActorRoutes.get("/actor/:id", actorController.getActor);
ActorRoutes.get("/actor/:id/movies", actorController.getActorMovies);
ActorRoutes.get("/actor/:id/tv", actorController.getActorTv);