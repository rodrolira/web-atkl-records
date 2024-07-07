"use strict";

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.addColumn("releases", "genre_id", {
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
  await queryInterface.removeColumn("releases", "genre_id");
}
