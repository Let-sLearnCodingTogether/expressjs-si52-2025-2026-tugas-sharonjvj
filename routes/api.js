import express from "express"
import * as favSongController from "../controllers/favSongController.js"

const api = express.Router()

api.get("/music", favSongController.favSongList)
api.post("/music", favSongController.tambahLaguFav)
api.put("/music/:id", favSongController.updateFavSong)
api.delete("/music/:id", favSongController.removeFavSong)

export default api;