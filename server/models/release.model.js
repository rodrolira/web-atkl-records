import { DataTypes } from "sequelize";
import sequelize from "../db/sequelize.js";

const Release = sequelize.define(
  "Release",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    releaseYear: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    genre: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    coverImageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    duration: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    artistId: {
      type: DataTypes.INTEGER,
      references: {
        model: "Artists", // Nombre de la tabla del modelo de Artista
        key: "id",
      },
      allowNull: false,
    },
    releaseType: {
      type: DataTypes.ENUM("Album", "EP", "Single"),
      allowNull: false,
    },
    trackCount: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    bandcampLink: DataTypes.STRING,
    beatportLink: DataTypes.STRING,
    spotifyLink: DataTypes.STRING,
    appleMusicLink: DataTypes.STRING,
    youtubeLink: DataTypes.STRING,
    soundcloudLink: DataTypes.STRING,
  },
  {
    timestamps: true,
    tableName: "releases",
  }
);

export default Release;
