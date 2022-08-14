const { ApplicationCommandOptionType } = require("discord.js")

module.exports = {
    name: "ping" ,
    category: "info" ,
    description: "renvoie pong" ,
    options:  [
        {
        name: "utilisateur" ,
        description: "utilisateur que vous voulez mentionner" ,
        type: ApplicationCommandOptionType.User ,
        required: false
        }
    ],
    async run(interaction) {
        let user = interaction.options.getUser("utilisateur")
        if (user != undefined) {
            interaction.reply("pong <@" + user.id + ">")
        } else {
            interaction.reply("pong")
        }
    }
}