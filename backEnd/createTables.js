const models = require('./models/sqModels');

models.sequelize.sync().then(() => {
console.log("tables created!");
});