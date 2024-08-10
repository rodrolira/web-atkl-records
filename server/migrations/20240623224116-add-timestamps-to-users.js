'use strict'

export async function up(queryInterface, Sequelize) {
  await queryInterface.addColumn('users', 'createdAt', {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  })
  await queryInterface.addColumn('users', 'updatedAt', {
    type: Sequelize.DATE,
    allowNull: false,
    defaultValue: Sequelize.literal('CURRENT_TIMESTAMP'),
  })
}
export async function down(queryInterface, Sequelize) {
  await queryInterface.removeColumn('users', 'createdAt')
  await queryInterface.removeColumn('users', 'updatedAt')
}
