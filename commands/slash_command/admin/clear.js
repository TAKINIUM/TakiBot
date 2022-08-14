const { ApplicationCommandOptionType, PermissionFlagsBits } = require("discord.js")

module.exports = {
    name: "clear" ,
    description: "efface les messages souhaités" ,
    options: [
        {
            name: "number" ,
            description: "nombre de message à effacer" ,
            type: ApplicationCommandOptionType.Integer ,
            required: true
        }
    ] ,

    async run(interaction) {
        let number = interaction.options.getInteger("number")
        if (interaction.member.permissions.has([PermissionFlagsBits.ManageMessages])) {
            if (number >= 1 && number <= 100) {
                await interaction.channel.bulkDelete(number)
                interaction.reply({content: number + " messages ont correctement été supprimer"})
            } else {
                interaction.reply({content: number + " ne se situe pas entre 1 et 100" , ephemeral: true})
            }
        } else {
            interaction.reply("vous n'avez pas la permission requise")
        }
    }
}