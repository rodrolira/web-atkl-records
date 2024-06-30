import { DataTypes } from "sequelize";
import sequelize from "../db/sequelize.js";

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
    isExplicit: {
      type: DataTypes.BOOLEAN,
      allowNull: true,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    genre: {
      type: DataTypes.ENUM(
        "Techno",
        "Industrial Techno",
        "Hard Techno",
        "Acid Techno",
        "Hardcore",
        "Schranz"
      ),
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

export default Release;
