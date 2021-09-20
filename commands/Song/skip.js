module.exports = {
  name: `skip`,
  category: `Song`,
  aliases: [`next`, `sk`],
  description: `Votes to skip the current playing song`,
  usage: `skip`,
  run: async (client, message, args, cmduser, text, prefix) => {
    //get the voice channel of the member
    const {
      channel
    } = message.member.voice;
    //if he is not connected to a vc return error
    if (!channel) return message.channel.send(`:x: **Mày phải trong phòng**`);
    //send error if member is Deafed
    if (message.member.voice.selfDeaf) return message.channel.send(`:x: **Mày không thể gọi tao khi bị điếc**`);
    //get voice channel of the bot
    const botchannel = message.guild.me.voice.channel;
    //get the music player
    const player = client.manager.players.get(message.guild.id);
    //if no player or no botchannel return error
    if (!player || !botchannel) return message.channel.send(`**:x: Nothing playing in this server**`);
    //if queue size too small return error
    if (!player.queue || !player.queue.current) return message.channel.send(`**:x: Nothing playing in this server**`);
    //if user is not in the right channel as bot, then return error
    if (player && channel.id !== player.voiceChannel)
      return message.channel.send(`**:x: Mày với tao phải cùng phòng**`);
    //if bot connected bot not with the lavalink player then try to delete the player
    if (player && botchannel && channel.id !== botchannel.id) {
      player.destroy();
    }
    player.stop();
    //return success message
    return message.channel.send(`**:fast_forward: Đã sờ kiếp :thumbsup:**`);

  }
};
/**
 * @INFO
 * Bot Coded by Tomato#6966 | https://github.com/Tomato6966/discord-js-lavalink-Music-Bot-erela-js
 * @INFO
 * Work for Milrato Development | https://milrato.eu
 * @INFO
 * Please mention Him / Milrato Development, when using this Code!
 * @INFO
 */
