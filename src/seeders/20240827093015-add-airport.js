'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */

    await queryInterface.bulkInsert('Airports',[
      {
        name: 'Kempegowda Internation Airport',
        cityId:25,
        createdAt:new Date(),
        updatedAt:new Date(),
      },
      {
        name: 'Mysuru Internation Airport',
        cityId:25,
        createdAt:new Date(),
        updatedAt:new Date(),
      },
      {
        name: 'Mengaluru Internation Airport',
        cityId:25,
        createdAt:new Date(),
        updatedAt:new Date(),
      },
      {
        name: 'Indragathi Internation Airport',
        cityId:25,
        createdAt:new Date(),
        updatedAt:new Date(),
      },
      {
        name: 'Indragadhi Internation Airport',
        cityId:24,
        createdAt:new Date(),
        updatedAt:new Date(),
      }
    ],{})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
