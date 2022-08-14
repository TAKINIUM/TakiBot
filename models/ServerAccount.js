module.exports = (sequelize, DataTypes) => {
	return sequelize.define("server_account", {
		user_id: {
			type: DataTypes.STRING ,
			primaryKey: true,
		},
		balance_serv: {
			type: DataTypes.INTEGER ,
			defaultValue: 0,
			allowNull: false,
		},
		user_tag: {
			type: DataTypes.STRING ,
			primaryKey: true,
		},
		server_id: {
            type: DataTypes.STRING ,
            primaryKey: true ,
        },
        server_name: {
            type: DataTypes.STRING ,
            primaryKey: true ,
        },
		server_xp: {
			type: DataTypes.INTEGER ,
			defaultValue: 0,
			allowNull: false,
		},
		server_lvl: {
			type: DataTypes.INTEGER ,
			defaultValue: 0,
			allowNull: false,
		}
    } , {
		timestamps: false,
	})
}