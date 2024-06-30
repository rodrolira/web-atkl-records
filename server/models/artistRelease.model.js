// artistRelease.model.js
import { DataTypes } from "sequelize";
import sequelize from "../db/sequelize.js";

const ArtistRelease = sequelize.define("ArtistRelease", {
  ArtistId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  ReleaseId: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

export default ArtistRelease;
