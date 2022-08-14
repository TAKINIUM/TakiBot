const data_level = new SlashCommandBuilder()
    .setName("level")
    .setDescription("affiche le niveau d'un utilisateur")
    .addUserOption(option => 
        option
        .setName("utilisateur")
        .setDescription("destinataire")
        .setRequired(false)
    )

    //         if (interaction.commandName === "level") {
//             let user = interaction.options.getUser("utilisateur")
//             if (user != undefined && interaction.member.id != user.id) {
//                 interaction.reply( user.tag + " est niveau " + server_account.getLevel_serv(user.id , interaction.guild.id) + " avec " +  server_account.getXP_serv(user.id , interaction.guild.id) +" XP sur ce serveur" )
//             } else {
//                 interaction.reply("<@" + interaction.member.id + "> Vous êtes niveau " + server_account.getLevel_serv(interaction.member.id , interaction.guild.id) + " avec " +  server_account.getXP_serv(interaction.member.id , interaction.guild.id) +" XP sur ce serveur")
//             }
//         }