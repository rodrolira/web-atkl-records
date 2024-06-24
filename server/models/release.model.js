// models/release.model.js
import { DataTypes } from "sequelize";
import sequelize from '../db/sequelize.js';

const Release = sequelize.define("Release", {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  releaseYear: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
  bandcampLink: DataTypes.STRING,
  beatportLink: DataTypes.STRING,
  spotifyLink: DataTypes.STRING,
  appleMusicLink: DataTypes.STRING,
  youtubeLink: DataTypes.STRING,
  soundcloudLink: DataTypes.STRING,
}, {
  timestamps: true,
  tableName:'releases',
});

export default Release;
