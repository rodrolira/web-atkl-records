"use strict";

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.addColumn("releases", "bandcamp_link", {
    type: Sequelize.STRING,
    allowNull: true,
  });

  await queryInterface.addColumn("releases", "beatport_link", {
    type: Sequelize.STRING,
    allowNull: true,
  });

  await queryInterface.addColumn("releases", "spotify_link", {
    type: Sequelize.STRING,
    allowNull: true,
  });

  await queryInterface.addColumn("releases", "apple_music_link", {
    type: Sequelize.STRING,
    allowNull: true,
  });

  await queryInterface.addColumn("releases", "youtube_link", {
    type: Sequelize.STRING,
    allowNull: true,
  });

  await queryInterface.addColumn("releases", "soundcloud_link", {
    type: Sequelize.STRING,
    allowNull: true,
  });

  await queryInterface.addColumn("releases", "facebook_link", {
    type: Sequelize.STRING,
    allowNull: true,
  });

  await queryInterface.addColumn("releases", "instagram_link", {
    type: Sequelize.STRING,
    allowNull: true,
  });

  await queryInterface.addColumn("releases", "twitter_link", {
    type: Sequelize.STRING,
    allowNull: true,
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.removeColumn("releases", "bandcamp_link");
  await queryInterface.removeColumn("releases", "beatport_link");
  await queryInterface.removeColumn("releases", "spotify_link");
  await queryInterface.removeColumn("releases", "apple_music_link");
  await queryInterface.removeColumn("releases", "youtube_link");
  await queryInterface.removeColumn("releases", "soundcloud_link");
  await queryInterface.removeColumn("releases", "facebook_link");
  await queryInterface.removeColumn("releases", "instagram_link");
  await queryInterface.removeColumn("releases", "twitter_link");
}
