module.exports = async (Client , Users , ServerAccount , server_account , currency ) => {

    await Client.application.commands.create(require("../commands/slash_command/info/ping"))
    await Client.application.commands.create(require("../commands/slash_command/économie/balance"))
    await Client.application.commands.create(require("../commands/slash_command/économie/leaderboard"))
    await Client.application.commands.create(require("../commands/slash_command/admin/clear.js"))


    const storedBalances = await Users.findAll()
    const storedBalances_serv = await ServerAccount.findAll()
	storedBalances.forEach(b => currency.set(b.user_id , b))
	storedBalances_serv.forEach(x => server_account.set((x.user_id + x.server_id) , x))

    console.log("tabernak calice le bot fonctionne")
    console.log(`Connecter en tant que ${Client.user.tag}!`)

    console.log(ServerAccount.findAll())
    console.log(server_account)
}