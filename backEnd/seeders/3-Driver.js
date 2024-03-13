"use strict";

const faker = require('faker');

module.exports = {
    async up(queryInterface, Sequelize) {
        // Tạo dữ liệu mẫu cho bảng Tài xế
        const drivers = [];
        for (let i = 0; i < 10; i++) {
            drivers.push({
                name: faker.name.findName(),
                phone: faker.phone.phoneNumber(),
                currentLocation: Sequelize.literal(`POINT(${faker.address.longitude()} ${faker.address.latitude()})`),
                workStatus: 'available',
                createdAt: new Date(),
                updatedAt: new Date()
            });
        }
        // Thực hiện chèn dữ liệu vào cơ sở dữ liệu
        await queryInterface.bulkInsert("Drivers", drivers, {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Drivers", null, {});
    }
};
