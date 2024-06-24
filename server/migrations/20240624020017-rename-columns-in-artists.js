'use strict';

/** @type {import('sequelize-cli').Migration} */
export async function up(queryInterface, Sequelize) {
  await queryInterface.renameColumn("artists", "created_at", "createdAt");
  await queryInterface.renameColumn("artists", "updated_at", "updatedAt");
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.renameColumn("artists", "createdAt", "created_at");
  await queryInterface.renameColumn("artists", "updatedAt", "updated_at");

}
