import axios from "axios";
import dotenv from "dotenv";
dotenv.config();
export const authorization = {
  headers: {
    Authorization: `Bearer ${process.env.tokenApi} `,
  },
};

export class moviesController {
  static async moviesDiscover(req, res) {
    const moviesDiscover = await axios(
      "https://api.themoviedb.org/3/discover/movie",
      authorization
    ).then((resp) => resp.data);
    res.status(200).json({ moviesDiscover });
  }
  static async moviesPopular(req, res) {
    try {
      const popularMovies = await axios(
        "https://api.themoviedb.org/3/movie/popular?page=2",
        authorization
      ).then((resp) => resp.data);
      res.status(200).json({ popularMovies });
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }
  static async topRatedMovies(req, res) {
    try {
      const topRatedMovies = await axios(
        "https://api.themoviedb.org/3/movie/top_rated",
        authorization
      ).then((resp) => resp.data);
      res.status(200).json({ topRatedMovies });
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }
  static async videoMovies(req, res) {
    try {
      const movieId = req.params.id;
      const videoMovies = await axios(
        `https://api.themoviedb.org/3/movie/${movieId}/videos?language=en-US`,
        authorization
      ).then((resp) => resp.data);
      res.status(200).json({ videoMovies });
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }

  static async upcomingMovies(req, res) {
    try {
      const upcomingMovies = await axios(
        `https://api.themoviedb.org/3/movie/upcoming`,
        authorization
      ).then((resp) => resp.data);
      res.status(200).json({ upcomingMovies });
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }
  static async creditsMovies(req,res) {
    try {
      const creditsMovies = await axios(
        `https://api.themoviedb.org/3/movie/${req.params.id}/credits`,
        authorization
      ).then((resp) => resp.data);
      res.status(200).json({ creditsMovies });
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }
  static async moviesId(req, res) {
    try {
      const movieId = req.params.id;
      const movie = await axios(
        `https://api.themoviedb.org/3/movie/${movieId}`,
        authorization
      ).then((resp) => resp.data);
      res.status(200).json({ movie });
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }
  static async recommendationsMovie(req, res) {
    try {
      const recommendationsMovie = await axios(
        `https://api.themoviedb.org/3/movie/${req.params.id}/recommendations`,
        authorization
      ).then((resp) => resp.data);
      res.status(200).json({ recommendationsMovie });
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }
  static async similarMovie(req, res) {
    try {
      const similarMovie = await axios(
        `https://api.themoviedb.org/3/movie/${req.params.id}/similar`,
        authorization
      ).then((resp) => resp.data);
      res.status(200).json({ similarMovie });
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }
  static async searchMovie(req, res) {
    try {
      const searchMovie = await axios(
        `https://api.themoviedb.org/3/search/movie?query=${req.params.name}`,
        authorization
      ).then((resp) => resp.data);
      res.status(200).json({ searchMovie });
    } catch (error) {
      res.status(500).json({ erro: error.message });
    }
  }
}
