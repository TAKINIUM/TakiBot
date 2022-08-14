module.exports = (interaction , currency , server_account) => {
    if (interaction.isChatInputCommand()) {
		if (interaction.commandName === "ping") {
			const command_ping = require("../commands/slash_command/info/ping")
			command_ping.run(interaction)
		}
		if (interaction.commandName === "balance") {
			const command_balance = require("../commands/slash_command/économie/balance")
			command_balance.run(interaction , currency , server_account)
		}
		if (interaction.commandName === "leaderboard") {
			const command_leaderboard = require("../commands/slash_command/économie/leaderboard")
			command_leaderboard.run(interaction , currency , server_account)
		}
		if(interaction.commandName === "clear") {
			const command_clear = require("../commands/slash_command/admin/clear.js")
			command_clear.run(interaction)
		}
	}
}