"use strict";

const faker = require('faker');

module.exports = {
    async up(queryInterface, Sequelize) {
        // Tạo dữ liệu mẫu cho bảng Khách hàng
        const customers = [];
        for (let i = 0; i < 10; i++) {
            customers.push({
                name: faker.name.findName(),
                phone: faker.phone.phoneNumber(),
                email: faker.internet.email(),
                homeAddress: faker.address.streetAddress(),
                createdAt: new Date(),
                updatedAt: new Date()
            });
        }
        // Thực hiện chèn dữ liệu vào cơ sở dữ liệu
        await queryInterface.bulkInsert("Customers", customers, {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("Customers", null, {});
    }
};
