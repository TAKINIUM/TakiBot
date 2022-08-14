const Sequelize = require('sequelize');

const sequelize = new Sequelize('database', 'username', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	storage: 'database.sqlite',
});

const Users = require('./models/Users.js')(sequelize, Sequelize.DataTypes);
const ServerAccount = require('./models/ServerAccount.js')(sequelize, Sequelize.DataTypes);

const force = process.argv.includes('-f')

sequelize.sync({force}).then(async () => {

	console.log('Database synchronisé')

}).catch(console.error)