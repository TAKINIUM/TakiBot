module.exports = (message , server_account , Discord , prefix) => {

    if (message.author.bot) return

    server_account.add_serv(message.author.id , message.guild.id , message.author.tag , message.guild.name)
    
    if (message.content === prefix + "help") {
        const command_help = require("../commands/prefix_command/help")
        command_help.run( Discord , message , prefix)
    }

    // 999028670243024987 sossur
    // 908453265165930496 emmental
    // 998965610090340412 new
    // 998950360838311997 au pif
}