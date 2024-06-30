import Artist from "./artist.model.js";
import Release from "./release.model.js";
import ArtistRelease from "./artistRelease.model.js";
import User from "./user.model.js";
import Genre from "./genre.model.js";

// Define associations

// Definir la asociación entre Artist y Release (many-to-many)
Artist.belongsToMany(Release, {
  through: ArtistRelease,
  foreignKey: "ArtistId",
});

// Definir la asociación entre Release y Artist (many-to-many)
Release.belongsToMany(Artist, {
  through: ArtistRelease,
  foreignKey: "ReleaseId",
});

// Definir la asociación entre Artist y User (one-to-one)
Artist.belongsTo(User, { foreignKey: "userId", targetKey: "id" });
User.hasOne(Artist, { foreignKey: "userId", sourceKey: "id" });

// Definir la relación entre Release y Genre (many-to-one)
Release.belongsTo(Genre, { foreignKey: "genreId", as: "genre" });
Genre.hasMany(Release, { foreignKey: "genreId", as: "releases" });
