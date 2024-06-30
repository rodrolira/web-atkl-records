"use strict";

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.createTable("releases", {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    title: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    releaseDate: {
      type: Sequelize.DATE,
      allowNull: true,
    },
    isExplicit: {
      type: Sequelize.BOOLEAN,
      allowNull: true,
    },
    description: {
      type: Sequelize.TEXT,
      allowNull: true,
    },
    genre: {
      type: Sequelize.ENUM(
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
      type: Sequelize.STRING,
      allowNull: true,
    },
    releaseType: {
      type: Sequelize.ENUM("Album", "EP", "Single", "V.A"),
      allowNull: false,
    },
    bandcampLink: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    beatportLink: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    spotifyLink: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    appleMusicLink: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    youtubeLink: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    soundcloudLink: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    createdAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
    updatedAt: {
      allowNull: false,
      type: Sequelize.DATE,
      defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
    },
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.dropTable("releases");
}
