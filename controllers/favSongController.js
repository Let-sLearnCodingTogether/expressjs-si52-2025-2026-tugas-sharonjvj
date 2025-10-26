import MusicModel from "../models/musicModel.js";

//CREATE
export const tambahLaguFav = async (req,res) => {
    try {
        const newSong = await MusicModel.create(req.body);

        res.status(201).json({
        message: "Berhasil menambahkan lagu ke daftar favorit",
        data: newSong,
        });
    } catch (error) {
        res.status(500).json({
        message: error.message,
        data: null,
        });
    }
};

//READ
export const favSongList = async (req,res) => {
    try {
        const data = await MusicModel.find({})

        res.status(200).json({
            message : "Favorite Song List",
            data : data
        })
    } catch (error) {
        res.status(500).json({
            message : error.message,
            data : null
        })
    }
}


//UPDATE
export const updateFavSong = async (req,res) => {
    try {
        const id = req.params?.id
        const request = req.body

        if(!id){
            return res.status(500).json({
                message : "Id wajib diisi",
                data : null
            })
        }

        const response = await MusicModel.findByIdAndUpdate(id, {
            songTitle : request.songTitle,
            artist : request.artist,
            album : request.album
         })

        if(!response){
            return res.status(500).json({
                message : "Data gagal diupdate",
                data : null
            })
        }

        return res.status(200).json({
            message: "Data berhasil diupdate"
        })

    } catch (error) {
        res.status(500).json({
            message : error,
            data : null
        })
    }
}


//DELETE
export const removeFavSong = async (req,res) => {
    try {
        const id = req.params.id

        if(!id){
            return res.status(500).json({
                message : "Id wajib diisi",
                data : null
            })
        }

        const response = await MusicModel.findByIdAndDelete(id);

        if(response){
            return res.status(200).json({
                message : "Data berhasil dihapus",
                data : null
            })
        }

        return res.status(404).json({
                message : "Data tidak ditemukan!",
                data : null
            })

    } catch (error) {
        res.status(500).json({
            message : error.message,
            data : null
        })
    }
}