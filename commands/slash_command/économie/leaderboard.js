const { ApplicationCommandOptionType } = require("discord.js")
const Discord = require("discord.js")

module.exports = {
    name: "leaderboard" ,
    category: "économie" ,
    description: "classement de l'économie" ,
    exemples: ["leaderboard server" , "leaderboard général" ] ,
    options: [
        {
            name: "server" ,
            description: "classement du serveur" ,
            type: ApplicationCommandOptionType.Subcommand 
        } ,
        {
            name: "général" ,
            description: "classement général" ,
            type: ApplicationCommandOptionType.Subcommand
        } 
    ] , 

    async run(interaction , currency , server_account) {
        const color = Discord.Colors.Gold
        if (interaction.options.getSubcommand() === "général") {
            
            let emb1 = currency.sort((a , b) => b.balance_gen - a.balance_gen)
            //    .filter(user => Client.users.cache.has(user.user_id))
               .first(5)
               .map((user , position) => `(${position + 1})  ${user.user_tag}:  ${user.balance_gen} 💰`)
               .join('\n')
        
            const embed_leaderboard = new Discord.EmbedBuilder()
            .setTitle("Classement général")
            .setColor(color)
            .addFields (
                {name: "Economie" , value: emb1} ,
            )
            .setTimestamp()
            interaction.reply({embeds:[embed_leaderboard]})
        }
        if (interaction.options.getSubcommand() === "server") {
            let emb1 = server_account.sort((a , b) => b.balance_serv - a.balance_serv)
            .filter(user => user.server_id === interaction.guild.id)
            .first(5)
            .map((user , position) => `(${position + 1})  ${user.user_tag}:  ${user.balance_serv} 💰`)
            .join('\n')
            
            let emb2 = server_account.sort((a , b) => b.server_xp - a.server_xp)
            .filter(user => user.server_id === interaction.guild.id)
            .first(5)
            .map((user , position) => `(${position + 1})  ${user.user_tag}:  ${user.server_xp} XP`)
            .join('\n')
        
            const embed_leaderboard = new Discord.EmbedBuilder()
            .setTitle("Classement du serveur")
            .setColor(color)
            .addFields (
                {name: "Economie" , value: emb1} ,
                {name: "Level" , value: emb2}
            )
            .setTimestamp()
            interaction.reply({embeds:[embed_leaderboard]})
        }
    }
}

        //         if (interaction.commandName === "leaderboard") {