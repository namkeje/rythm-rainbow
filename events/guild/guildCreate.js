module.exports = async (client, guild) => {
  let channel = guild.channels.cache.find(
    channel =>
    channel.type === "text" &&
    channel.permissionsFor(guild.me).has("SEND_MESSAGES")
  );
  channel.send(`**Lấy đì en gién tơ mần :white_check_mark:**
     \`-\` Chơi bằng dấu \`=\`
     \`-\` Xem thông tin người làm và các lệnh tại \`=help\` / \`=commands\`
     \`-\` Nếu cần liên hệ ib Volkas`);
  /**
   * @INFO
   * Bot Coded by Tomato#6966 | https://github.com/Tomato6966/Discord-Js-Handler-Template
   * @INFO
   * Work for Milrato Development | https://milrato.eu
   * @INFO
   * Please mention Him / Milrato Development, when using this Code!
   * @INFO
   */
}
