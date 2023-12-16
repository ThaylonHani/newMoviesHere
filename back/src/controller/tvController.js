import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
export const authorization = {
  headers: {
    "Authorization": `Bearer ${process.env.tokenApi}`
  }
}

export class tvController { 
  static async discoverTv(req,res) {
    try {
      const tvDiscover = await axios(`https://api.themoviedb.org/3/discover/tv?include_adult=true&include_null_first_air_dates=false`, authorization).then((resp) => resp.data);
      res.status(200).json({tvDiscover});
    } catch (error) {
      res.status(500).json({erro:error.message})
    }
  }
  static async popularTv(req, res) {
    try {
      const popularTv = await axios(`https://api.themoviedb.org/3/tv/popular?page=2`, authorization).then((resp) => resp.data);
      res.status(200).json({popularTv});
    } catch (error) {
      res.status(500).json({erro:error.message})
    }
    
  }
  static async tvId(req,res) {
    try {
      const tvId = await axios(`https://api.themoviedb.org/3/tv/${req.params.id}`, authorization).then((resp) => resp.data);
      res.status(200).json({tvId});
    } catch (error) {
      res.status(500).json({erro:error.message})
    }
  }
  static async topRatedTV(req, res) {
    try {
      const topRatedTv = await axios(`https://api.themoviedb.org/3/tv/top_rated`, authorization).then((resp) => resp.data);
      res.status(200).json({topRatedTv});
    } catch (error) {
      res.status(500).json({erro:error.message})
    }
  }

  static async creditsTv(req,res) {
    try {
      const creditsTv = await axios(
        `https://api.themoviedb.org/3/tv/${req.params.id}/credits`,
        authorization
      ).then((resp) => resp.data);
      res.status(200).json({ creditsTv });
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }
  
  static async onTheAir(req, res) {
    try {
      const onTheAir = await axios(`https://api.themoviedb.org/3/tv/on_the_air`, authorization).then((resp) => resp.data);
      res.status(200).json({onTheAir});
    } catch (error) {
      res.status(500).json({erro:error.message})
    }
  }
  static async tvGenres(req, res) {
    try {
      const tvGenres = await axios(`https://api.themoviedb.org/3/genre/tv/list`, authorization).then((resp) => resp.data);
      res.status(200).json({tvGenres});
    } catch (error) {
      res.status(500).json({erro:error.message})
    }
  }
  static async tvGenresId(req, res) {
    try {
      const tvGenreId = await axios(`https://api.themoviedb.org/3/discover/tv?with_genres=${req.params.id}`, authorization).then((resp) => resp.data);
      res.status(200).json({tvGenreId});
    } catch (error) {
      res.status(500).json({erro:error.message})
    }
  }
  static async recommendationsTv(req, res) {
    try {
      const recommendationsTv = await axios(`https://api.themoviedb.org/3/tv/${req.params.id}/recommendations`, authorization).then((resp) => resp.data);
      res.status(200).json({recommendationsTv});
    } catch (error) {
      res.status(500).json({erro:error.message})
    }
  }
  static async similarTv(req, res) {
    try {
      const similarTv = await axios(`https://api.themoviedb.org/3/tv/${req.params.id}/similar`, authorization).then((resp) => resp.data);
      res.status(200).json({similarTv});
    } catch (error) {
      res.status(500).json({erro:error.message})
    }
  }
  static async searchTv(req, res) {
    try {
      const searchTv = await axios(`https://api.themoviedb.org/3/search/tv?query=${req.params.name}`, authorization).then((resp) => resp.data);
      res.status(200).json({searchTv});
    } catch (error) {
      res.status(500).json({erro:error.message})
    }
  }
}
  
