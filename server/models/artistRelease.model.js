// artistRelease.model.js
import { DataTypes } from "sequelize";
import sequelize from "../db/sequelize.js";
import Artist from "./artist.model.js";
import Release from "./release.model.js";

const ArtistRelease = sequelize.define("ArtistRelease", {
  artistId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  releaseId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default ArtistRelease;

// Define las asociaciones si es necesario
Artist.belongsToMany(Release, { through: ArtistRelease });
Release.belongsToMany(Artist, { through: ArtistRelease });
