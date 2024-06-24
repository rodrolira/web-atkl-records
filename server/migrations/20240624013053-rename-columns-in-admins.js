"use strict";

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.renameColumn("admins", "created_at", "createdAt");
  await queryInterface.renameColumn("admins", "updated_at", "updatedAt");
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.renameColumn("admins", "createdAt", "created_at");
  await queryInterface.renameColumn("admins", "updatedAt", "updated_at");
}
