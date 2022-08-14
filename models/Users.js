module.exports = (sequelize, DataTypes) => {
	return sequelize.define('users', {
		user_id: {
			type: DataTypes.STRING ,
			primaryKey: true,
		},
		balance_gen: {
			type: DataTypes.INTEGER ,
			defaultValue: 0,
			allowNull: false,
		},
		user_tag: {
			type: DataTypes.STRING ,
			primaryKey: true,
		},
		user_point: {
			type: DataTypes.INTEGER ,
			defaultValue: 0,
			allowNull: false,
		}
	}, {
		timestamps: false,
	});
};