"use strict";

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.addColumn("releases", "genreId", {
    type: Sequelize.INTEGER,
    references: {
      model: "Genres",
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "SET NULL",
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.removeColumn("releases", "genreId");
}
