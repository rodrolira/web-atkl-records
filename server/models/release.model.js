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
    releaseDate: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    genreId: {
      type: DataTypes.INTEGER,
      references: {
        model: Genre,
        key: "id",
      },
      allowNull: true, // Adjust this as per your schema
    },
    artistId: {
      type: DataTypes.INTEGER,
      references: {
        model: Artist,
        key: "id",
      },
      allowNull: true, // Adjust this as per your schema
    },
    isExplicit: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    coverImageUrl: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    releaseType: {
      type: DataTypes.ENUM("Album", "EP", "Single", "V.A"),
      allowNull: false,
    },
    bandcampLink: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    beatportLink: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    spotifyLink: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    appleMusicLink: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    youtubeLink: {
      type: DataTypes.STRING,
      allowNull: true,
    },
    soundcloudLink: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  },
  {
    timestamps: true,
    tableName: "releases",
  }
);

// Define la relación entre Release y Artist si es necesaria
Release.belongsTo(Artist, { foreignKey: "artistId" });

export default Release;
