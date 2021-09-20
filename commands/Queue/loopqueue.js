module.exports = {
  name: `loopqueue`,
  category: `Queue`,
  aliases: [`qloop`, "lq", "queueloop", "loopqu", "loopq"],
  description: `Toggles looping for the whole queue.`,
  usage: `loopqueue`,
  run: async (client, message, args, cmduser, text, prefix) => {
      //get the voice channel of the member
      const { channel } = message.member.voice;
      //if he is not connected to a vc return error
      if (!channel)  return message.channel.send(`:x: **Mày phải ở trong phòng**`);
      //send error if member is Deafed
      if(message.member.voice.selfDeaf) return message.channel.send(`:x: **Mày không thể gọi tao khi bị điếc**`);
      //get voice channel of the bot
      const botchannel = message.guild.me.voice.channel;
      //get the music player
      const player = client.manager.players.get(message.guild.id);
      //if no player or no botchannel return error
      if(!player || !botchannel) return message.channel.send(`**:x: Nothing playing in this server**`);
      //if queue size too small return error
      if(!player.current < 1) return message.channel.send(`**:x: Nothing playing in this server**`);
      //if user is not in the right channel as bot, then return error
      if(player && channel.id !== player.voiceChannel)
        return message.channel.send(`**:x: Mày phải ở cùng phòng với tao**`);
      //if bot connected bot not with the lavalink player then try to delete the player
      if(player && botchannel && channel.id !== botchannel.id){
        player.destroy();
      }
      //change Queue Mode
      player.setQueueRepeat(!player.queueRepeat);
      //Send Success Message
      return message.channel.send(`**${player.queueRepeat ? `:repeat: Lúp nguyên hàng chờ` : `:no_entry_sign: Địt sơ bồ lúp`}**`);
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
