import mongoose from "mongoose";

const MusicSchema = new mongoose.Schema(
    {
        songTitle: {
            type: String,
            required: true,
            trim : true,
        },
        artist: {
            type: String,
            required: true,
            trim : true,
        },
        album: {
            type: String,
            required: true,
            trim : true,
        },
    },
    {
        timestamps: true
    }
);

const MusicModel = new mongoose.model("music", MusicSchema);

export default MusicModel