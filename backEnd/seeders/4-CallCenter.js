"use strict";

const faker = require('faker');

module.exports = {
    async up(queryInterface, Sequelize) {
        // Tạo dữ liệu mẫu cho bảng Tổng đài
        const callCenterCalls = [];
        for (let i = 0; i < 20; i++) {
            const pickupLocation = Sequelize.literal(`POINT(${faker.address.longitude()} ${faker.address.latitude()})`);
            const dropoffLocation = Sequelize.literal(`POINT(${faker.address.longitude()} ${faker.address.latitude()})`);
            callCenterCalls.push({
                customerId: faker.random.number({ min: 1, max: 10 }), // Chọn ngẫu nhiên một khách hàng từ ID 1 đến 10
                pickupLocation: pickupLocation,
                dropoffLocation: dropoffLocation,
                status: 'processing',
                createdAt: new Date(),
                updatedAt: new Date()
            });
        }

        // Thực hiện chèn dữ liệu vào cơ sở dữ liệu
        await queryInterface.bulkInsert("CallCenter", callCenterCalls, {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("CallCenter", null, {});
    }
};
