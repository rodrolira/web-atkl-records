// models/artist.model.js
import { DataTypes } from "sequelize";
import User from "./user.model.js";
import sequelize from "../db/sequelize.js";

const Artist = sequelize.define(
  "Artist",
  {
    artistName: {
      type: DataTypes.STRING,
      allowNull: false,
      field: "artist_name",
    },
    userId: {
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
    bandcampLink: {
      type: DataTypes.STRING(255),
      field: "bandcamp_link",
    },
    facebookLink: {
      type: DataTypes.STRING(255),
      field: "facebook_link",
    },
    instagramLink: {
      type: DataTypes.STRING(255),
      field: "instagram_link",
    },
    soundcloudLink: {
      type: DataTypes.STRING(255),
      field: "soundcloud_link",
    },
    twitterLink: {
      type: DataTypes.STRING(255),
      field: "twitter_link",
    },
    youtubeLink: {
      type: DataTypes.STRING(255),
      field: "youtube_link",
    },
    spotifyLink: {
      type: DataTypes.STRING(255),
      field: "spotify_link",
    },
  },
  {
    timestamps: true,
    tableName: "artists",
  }
);

// Define the relationship with User
Artist.belongsTo(User, { foreignKey: "userId", targetKey: "id" });
User.hasOne(Artist, { foreignKey: "userId", sourceKey: "id" });

export default Artist;
