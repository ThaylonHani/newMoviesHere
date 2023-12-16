import axios from "axios";
import { authorization } from "./movieController.js";

export class actorController{
  static async getActor(req,res){
    const actor = await axios(
      `https://api.themoviedb.org/3/person/${req.params.id}`,
      authorization
    ).then((resp) => resp.data);
    res.status(200).json({ actor });
  }
  static async getActorMovies(req,res){
    const actorMovies = await axios(
      `https://api.themoviedb.org/3/person/${req.params.id}/movie_credits`,
      authorization
    ).then((resp) => resp.data);
    res.status(200).json({ actorMovies });
  }
  static async getActorTv(req,res){
    const actorTv = await axios(
      `https://api.themoviedb.org/3/person/${req.params.id}/tv_credits`,
      authorization
    ).then((resp) => resp.data);
    res.status(200).json({ actorTv });
  }
  
}