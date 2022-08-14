const { ApplicationCommandOptionType } = require("discord.js")

module.exports = {
    name: "balance" ,
    category: "économie" ,
    description: "affiche la money d'un utilisateur" ,
    exemples: ["balance server" , "balance server @abcd#1234" , "balance général" , "balance général @abcd#1234" ] ,
    options: [
        {
            name: "server" ,
            description: "économie du serveur" ,
            type: ApplicationCommandOptionType.Subcommand ,
            options: [
                {
                name: "utilisateur" ,
                description: "utilisateur que vous voulez mentionner" ,
                type: ApplicationCommandOptionType.User ,
                required: false
                }
            ]
        } ,
        {
            name: "général" ,
            description: "économie général" ,
            type: ApplicationCommandOptionType.Subcommand ,
            options: [
                {
                name: "utilisateur" ,
                description: "utilisateur que vous voulez mentionner" ,
                type: ApplicationCommandOptionType.User ,
                required: false
                }
            ]
        } 
    ] , 

    async run(interaction , currency , server_account) {
        if (interaction.options.getSubcommand() === "général" ) {

            let user = interaction.options.getUser("utilisateur")
            if (user != undefined && interaction.member.id != user.id) {
                interaction.reply(user.tag + " possède " + currency.getBalance(user.id) + " 💰 tout serveurs confondues")
            } else {
                interaction.reply("<@" + interaction.member.id + ">" + "Vous possédez " + currency.getBalance(interaction.member.id) + " 💰 tout serveurs confondus")
            }
        }
        if (interaction.options.getSubcommand() === "server" ) {

             let user = interaction.options.getUser("utilisateur")
            if (user != undefined && interaction.member.id != user.id) {
                interaction.reply( user.tag + " possède " + server_account.getBalance_serv(user.id , interaction.guild.id) + " 💰 sur ce serveur" )
            } else {
                interaction.reply("<@" + interaction.member.id + ">" + "Vous possédez " + server_account.getBalance_serv(interaction.member.id , interaction.guild.id) + " 💰 sur ce serveur")
            }
        }
    }
}