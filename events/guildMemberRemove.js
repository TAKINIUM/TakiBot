module.exports = async (member , Client) => {
    Client.guilds.cache.get(member.guild.id).systemChannel.send("<@" + member.id + "> est parti de " + member.guild.name)
}
