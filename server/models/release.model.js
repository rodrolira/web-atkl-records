import { DataTypes } from "sequelize";
import sequelize from "../db/sequelize.js";
import Genre from "./genre.model.js";
import Artist from "./artist.model.js";

const Release = sequelize.define(
  "Release",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    release_date: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    genre_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Genre,
        key: "id",
      },
      allowNull: true, // Adjust this as per your schema
    },
    artist_id: {
      type: DataTypes.INTEGER,
      references: {
        model: Artist,
        key: "id",
      },
      allowNull: true, // Adjust this as per your schema
    },
    is_explicit: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    cover_image_url: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    release_type: {
      type: DataTypes.ENUM("Album", "EP", "Single", "V.A"),
      allowNull: false,
    },
    bandcamp_link: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    beatport_link: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    spotify_link: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    apple_music_link: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    youtube_link: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    soundcloud_link: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    tableName: "releases",
  }
);

Release.belongsToMany(Artist, {
  through: "release_artists", // Nombre de la tabla que Sequelize creará automáticamente
  foreignKey: "release_id", // Nombre del campo en la tabla intermedia que referencia Release
});

export default Release;
