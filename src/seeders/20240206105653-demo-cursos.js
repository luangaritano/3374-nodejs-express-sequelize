'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
     await queryInterface.bulkInsert('cursos', [
      {
        titulo: 'API com Express',
        descriçao: 'Curso de API com Express e MongoDB',
        data_inicio: '2023-01-01',
        categoria_id: 1,
        docente_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'SpringBoot',
        descriçao: 'Curso de Java com Spring Framework',
        data_inicio: '2023-01-01',
        categoria_id: 2,
        docente_id: 5,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'Python Web com Django',
        descriçao: 'Curso de aplicações web com Django',
        data_inicio: '2023-01-01',
        categoria_id: 3,
        docente_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        titulo: 'Orientação a Objetos com C#',
        descriçao: 'Curso de C#: coleções, arquivos e libs',
        data_inicio: '2023-01-01',
        categoria_id: 4,
        docente_id: 6,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('cursos', null, {});
  }
};
