module.exports = {   
    
    run: (Discord , message , prefix) => {
        const color = Discord.Colors.Aqua
        const embed_help = new Discord.EmbedBuilder()
        .setTitle("commandes")
        .setColor(color)
        .setURL("https://discord.gg/SC2N8RcY")
        .setAuthor({name: message.author.username})
        .setDescription("voici la listes des commandes" )
        .setFields(
            {name: "le prefix est " , value: prefix},
            {name: "help" , value: "vous donnes les commandes"},
            )
            .setTimestamp()
        message.channel.send( {embeds: [embed_help]} )
    }    
}