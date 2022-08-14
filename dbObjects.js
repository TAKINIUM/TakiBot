const Sequelize = require('sequelize');
const { Collection } = require('discord.js')

const sequelize = new Sequelize("database", 'username', 'password', {
	host: 'localhost',
	dialect: 'sqlite',
	logging: false,
	storage: 'database.sqlite',
});


const Users = require('./models/Users.js')(sequelize, Sequelize.DataTypes)
const ServerAccount = require("./models/ServerAccount")(sequelize , Sequelize.DataTypes)

const currency = new Collection()
const server_account = new Collection()

Reflect.defineProperty(currency , 'add', {
	value: async (id , amount_gen , tag) => {

		const user = currency.get(id)

		if (user) {
			user.balance_gen += Number(amount_gen)
			return user.save()
		}
 
		const newUser_global = await Users.create({user_id: id , balance_gen: amount_gen , user_tag: tag})

        currency.set(id , newUser_global)

		return newUser_global
	},
})
Reflect.defineProperty(server_account, "add_serv", {
	value: async (id , serv_id , tag , serv_name) => { 
        
        let xp_alea = Math.floor(Math.random() * 10 + 10)
        let money_alea = Math.floor(Math.random() * 10 + 10)
		const account = server_account.get(id + serv_id)
        currency.add(id , money_alea , tag)
        
		if (account) {
            account.balance_serv += money_alea
            account.server_xp += xp_alea
			return account.save()
		}
 
		const newUser_serv = await ServerAccount.create({user_id: id , balance_serv: money_alea , user_tag: tag , server_id: serv_id , server_name: serv_name , server_xp: xp_alea , server_lvl: 0})

        server_account.set(id + serv_id , newUser_serv)

        console.log("new account: " + tag + " on " + serv_name)
        console.log(newUser_serv)

		return newUser_serv
    }
});

Reflect.defineProperty(currency, 'getBalance', {
	value: id => {
		const user = currency.get(id);
		return user ? user.balance_gen : 0
	},
});

Reflect.defineProperty(server_account, 'getLevel_serv', {
	value:(id , serv_id) => {
		const serv_account = server_account.get(id + serv_id)
		return serv_account ? serv_account.server_lvl : 0
	},
})

Reflect.defineProperty(server_account, 'getXP_serv', {
	value:(id , serv_id) => {
		const serv_account = server_account.get(id + serv_id)
		return serv_account ? serv_account.server_xp : 0
	},
})

Reflect.defineProperty(server_account, 'getBalance_serv', {
	value:(id , serv_id) => {
		const serv_account = server_account.get(id + serv_id)
		return serv_account ? serv_account.balance_serv : 0;
	},
});

module.exports = { Users , ServerAccount , currency , server_account}