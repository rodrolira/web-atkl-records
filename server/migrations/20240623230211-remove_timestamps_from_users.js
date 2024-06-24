"use strict";

export async function up(queryInterface, Sequelize) {
  await queryInterface.removeColumn("users", "created_at");
  await queryInterface.removeColumn("users", "updated_at");
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.addColumn("users", "created_at", {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
  });
  await queryInterface.addColumn("users", "updated_at", {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal("CURRENT_TIMESTAMP"),
  });
}
