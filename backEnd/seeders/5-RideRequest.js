"use strict";

const faker = require('faker');

module.exports = {
    async up(queryInterface, Sequelize) {

        // Tạo dữ liệu mẫu cho bảng Cuộc đặt xe
        const rideRequests = [];
        for (let i = 0; i < 20; i++) {
            const pickupLocation = Sequelize.literal(`POINT(${faker.address.longitude()} ${faker.address.latitude()})`);
            const dropoffLocation = Sequelize.literal(`POINT(${faker.address.longitude()} ${faker.address.latitude()})`);
            rideRequests.push({
                customerId: faker.random.number({ min: 1, max: 10 }), // Chọn ngẫu nhiên một khách hàng từ ID 1 đến 10
                pickupLocation: pickupLocation,
                dropoffLocation: dropoffLocation,
                status: 'pending',
                createdAt: new Date(),
                updatedAt: new Date()
            });
        }

        // Thực hiện chèn dữ liệu vào cơ sở dữ liệu

        await queryInterface.bulkInsert("RideRequests", rideRequests, {});
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.bulkDelete("RideRequests", null, {});
    }
};
