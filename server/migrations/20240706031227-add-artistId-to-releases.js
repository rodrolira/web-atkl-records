"use strict";

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.addColumn("releases", "artistId", {
    type: Sequelize.INTEGER,
    allowNull: false,
    references: {
      model: "artists", // Nombre de la tabla de artistas
      key: "id",
    },
    onUpdate: "CASCADE",
    onDelete: "CASCADE",
  });
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.removeColumn("releases", "artistId");
}
