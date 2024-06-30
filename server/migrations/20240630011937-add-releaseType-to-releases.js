"use strict";

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.addColumn("releases", "releaseType", {
    type: Sequelize.ENUM("Album", "EP", "Single", "V.A"),
    allowNull: false,
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.removeColumn("releases", "releaseType");
}
