"use strict";

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.addColumn("artists", "bandcamp_link", {
    type: Sequelize.STRING,
    allowNull: true, // Opcional: depende de tus requisitos
  });

  await queryInterface.addColumn("artists", "beatport_link", {
    type: Sequelize.STRING,
    allowNull: true,
  });

  await queryInterface.addColumn("artists", "spotify_link", {
    type: Sequelize.STRING,
    allowNull: true,
  });

  await queryInterface.addColumn("artists", "apple_music_link", {
    type: Sequelize.STRING,
    allowNull: true,
  });

  await queryInterface.addColumn("artists", "youtube_link", {
    type: Sequelize.STRING,
    allowNull: true,
  });

  await queryInterface.addColumn("artists", "soundcloud_link", {
    type: Sequelize.STRING,
    allowNull: true,
  });

  await queryInterface.addColumn("artists", "facebook_link", {
    type: Sequelize.STRING,
    allowNull: true,
  });

  await queryInterface.addColumn("artists", "instagram_link", {
    type: Sequelize.STRING,
    allowNull: true,
  });

  await queryInterface.addColumn("artists", "twitter_link", {
    type: Sequelize.STRING,
    allowNull: true,
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.removeColumn("artists", "bandcamp_link");
  await queryInterface.removeColumn("artists", "beatport_link");
  await queryInterface.removeColumn("artists", "spotify_link");
  await queryInterface.removeColumn("artists", "apple_music_link");
  await queryInterface.removeColumn("artists", "youtube_link");
  await queryInterface.removeColumn("artists", "soundcloud_link");
  await queryInterface.removeColumn("artists", "facebook_link");
  await queryInterface.removeColumn("artists", "instagram_link");
  await queryInterface.removeColumn("artists", "twitter_link");
}
