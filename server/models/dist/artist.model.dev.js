"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _sequelize = require("sequelize");

var _sequelize2 = _interopRequireDefault(require("../db/sequelize.js"));

var _release_artistModel = _interopRequireDefault(require("./release_artist.model.js"));

var _releaseModel = _interopRequireDefault(require("./release.model.js"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// models/artist.model.js
var Artist = _sequelize2["default"].define('Artist', {
  artist_name: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false,
    field: 'artist_name'
  },
  user_id: {
    type: _sequelize.DataTypes.INTEGER,
    allowNull: false,
    field: 'user_id'
  },
  email: {
    type: _sequelize.DataTypes.STRING,
    allowNull: false
  },
  bio: {
    type: _sequelize.DataTypes.TEXT,
    allowNull: true
  },
  image: {
    type: _sequelize.DataTypes.TEXT,
    allowNull: true
  },
  role: {
    type: _sequelize.DataTypes.ENUM('Dj', 'Producer'),
    allowNull: false
  },
  bandcamp_link: {
    type: _sequelize.DataTypes.STRING(255),
    field: 'bandcamp_link'
  },
  facebook_link: {
    type: _sequelize.DataTypes.STRING(255),
    field: 'facebook_link'
  },
  instagram_link: {
    type: _sequelize.DataTypes.STRING(255),
    field: 'instagram_link'
  },
  soundcloud_link: {
    type: _sequelize.DataTypes.STRING(255),
    field: 'soundcloud_link'
  },
  twitter_link: {
    type: _sequelize.DataTypes.STRING(255),
    field: 'twitter_link'
  },
  youtube_link: {
    type: _sequelize.DataTypes.STRING(255),
    field: 'youtube_link'
  },
  spotify_link: {
    type: _sequelize.DataTypes.STRING(255),
    field: 'spotify_link'
  },
  apple_music_link: {
    type: _sequelize.DataTypes.STRING(255)
  },
  beatport_link: {
    type: _sequelize.DataTypes.STRING(255),
    field: 'beatport_link'
  }
}, {
  timestamps: true,
  tableName: 'artists'
}); // Importa Release si es necesario aquí


Artist.belongsToMany(_releaseModel["default"], {
  through: _release_artistModel["default"],
  foreignKey: 'artist_id'
});
var _default = Artist;
exports["default"] = _default;