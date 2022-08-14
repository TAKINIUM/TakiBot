module.exports = async (member , Canvas) => {
    Client.guilds.cache.get(member.guild.id).systemChannel.send("Bienvenue <@" + member.id + "> sur " + member.guild.name)

    let canvas = Canvas.createCanvas(750 , 250)
    let ctx = canvas.getContext("2d")
    let background = await Canvas.loadImage("./canvas-preview.30c4fe9e.png")
    ctx.drawImage(background , 0 , 0 , canvas.width , canvas.height)
    
    ctx.font = "50px impact"
    ctx.fillStyle = "#ffffff"
    ctx.textAlign = "center"
    ctx.fillText(member.user.tag.toUpperCase() , 410 , 150)

    ctx.beginPath()
    ctx.arc(125 , 125 , 100 , 0 , Math.PI * 2)
    ctx.closePath()
    ctx.clip()

    let avatar = await Canvas.loadImage(member.user.displayAvatarURL({
        format: "png" ,
        size: 1024
    }))
    
    ctx.drawImage(avatar , 25 , 25 , 200 , 200 )

    let attachement = new Discord.AttachmentBuilder(canvas.toBuffer("image/png") , "background-welcome")

    Client.guilds.cache.get(member.guild.id).systemChannel.send( {files: [attachement] } )
}