// models/artist.model.js
import { DataTypes } from "sequelize";
import sequelize from "../db/sequelize.js";
import ReleaseArtist from "./release_artist.model.js";

const Artist = sequelize.define(
  "Artist",
  {
    artist_name: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "artist_name",
    },
    user_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      field: "user_id",
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    image: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    role: {
      type: DataTypes.ENUM("Dj", "Producer"),
      allowNull: false,
    },
    bandcamp_link: {
      type: DataTypes.STRING(255),
      field: "bandcamp_link",
    },
    facebook_link: {
      type: DataTypes.STRING(255),
      field: "facebook_link",
    },
    instagram_link: {
      type: DataTypes.STRING(255),
      field: "instagram_link",
    },
    soundcloud_link: {
      type: DataTypes.STRING(255),
      field: "soundcloud_link",
    },
    twitter_link: {
      type: DataTypes.STRING(255),
      field: "twitter_link",
    },
    youtube_link: {
      type: DataTypes.STRING(255),
      field: "youtube_link",
    },
    spotify_link: {
      type: DataTypes.STRING(255),
      field: "spotify_link",
    },
    apple_music_link: {
      type: DataTypes.STRING(255),
    },
    beatport_link: {
      type: DataTypes.STRING(255),
      field: "beatport_link",
    },
  },
  {
    timestamps: true,
    tableName: "artists",
  }
);
import Release from "./release.model.js"; // Importa Release si es necesario aquí

Artist.belongsToMany(Release, {
  through: ReleaseArtist,
  foreignKey: "artist_id",
});

export default Artist;
