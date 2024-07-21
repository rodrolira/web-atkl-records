// associations.js
import Artist from './artist.model.js'
import Release from './release.model.js'
import User from './user.model.js'
import Genre from './genre.model.js'

// Define associations

// Definir la asociación entre Artist y User (one-to-one)
Artist.belongsTo(User, { foreignKey: 'user_id', targetKey: 'id' })
User.hasOne(Artist, { foreignKey: 'user_id', sourceKey: 'id' })

// Definir la relación entre Release y Genre (many-to-one)
Release.belongsTo(Genre, { foreignKey: 'genre_id', as: 'genre' })
Genre.hasMany(Release, { foreignKey: 'genre_id', as: 'releases' })

// Definir la asociación entre Release y Artist (many-to-many)
Release.belongsToMany(Artist, { through: 'ReleaseArtist', foreignKey: 'release_id', as: 'artist_id' })
Artist.belongsToMany(Release, { through: 'ReleaseArtist', foreignKey: 'artist_id', as: 'releases' })
