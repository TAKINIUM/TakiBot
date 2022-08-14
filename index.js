const Discord = require("discord.js")
require("dotenv").config()
const { ServerAccount , Users } = require("./dbObjects")
const Canvas = require("@napi-rs/canvas")
const { token } = require('./config/config.json')
const { currency , server_account } = require("./dbObjects.js")

const Client = new Discord.Client({
    intents: [
        Discord.IntentsBitField.Flags.Guilds ,
        Discord.IntentsBitField.Flags.GuildMessages ,
        Discord.IntentsBitField.Flags.DirectMessages ,
        Discord.IntentsBitField.Flags.MessageContent ,
        Discord.IntentsBitField.Flags.GuildMembers ,
    ]
})

const color1 = Discord.Colors.Aqua
const color2 = Discord.Colors.Purple
const color3 = Discord.Colors.Gold

const prefix = "*"
    
Client.on("ready" , async () => require("./events/ready.js")(Client , Users , ServerAccount , server_account , currency ))

Client.on("guildMemberAdd" , async (member) => require ("./events/guildMemberAdd.js")(member , Canvas))

Client.on("guildMemberRemove" , async (member) => require("./events/guildMemberRemove.js")(member , Client) )

Client.on("messageCreate" , (message) => require("./events/messageCreate.js")(message , server_account , Discord , prefix) )

Client.on("interactionCreate" , async interaction => require("./events/interractionCreate.js")(interaction , currency , server_account))

//     if (interaction.isButton()) {

//         if (interaction.customId === "button1") {
//             interaction.reply({content: "vous avez cliquer sur le bouton" , ephemeral: true})
//         }
//     }

//     if (interaction.isSelectMenu()) {

//         if (interaction.customId === "menu1") {

//             if (interaction.values == "message") {
//                 interaction.reply({content: "vous avez choisis l'option message" , ephemeral: true})
//             }
//             else if (interaction.values == "bouton") {
//                 var row = new Discord.ActionRowBuilder()
//                 .addComponents( new Discord.ButtonBuilder()
//                     .setCustomId("button1")
//                     .setLabel("bouton")
//                     .setStyle(ButtonStyle.Primary)
//                 )

//             interaction.reply({content: "vous avez choisis l'option bouton" , components: [row] , ephemeral: true})

//             }
//         }
//     }

// })

Client.login(token)