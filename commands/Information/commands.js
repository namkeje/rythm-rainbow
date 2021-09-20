const { MessageEmbed, Message } = require("discord.js");
const config = require("../../botconfig/config.json");
const ee = require("../../botconfig/embed.json");
const { paginationEmbed } = require("../../handlers/functions");
module.exports = {
    name: "commands",
    category: "Information",
    aliases: ["cmd", "cmds"],
    cooldown: 4,
    usage: "commands",
    description: "Shows all available Commands",
    run: async (client, message, args, user, text, prefix) => {
      try{
       
        //Lệnh nhạc
let string1 = `\`\`\`fix
=disconnect -- ngắt kết nối
=forward    -- đéo biết
=grab       -- đéo biết
=loop       -- lúp
=lyrics     -- mở lai rịch
=nowplaying -- bài đang phát
=pause      -- dừng khoảng chừng là 2 giây
=play       -- lên nhạc
=playskip   -- qua nhạc
=playtop    -- on the top nhạc
=replay     -- chơi lại
=resume     -- tiếp tiếp
=rewind     -- đéo biết
=search     -- Sợt
=seek       -- đéo biết
=skip       -- bỏ qua nhạc
=soundcloud -- đéo biết
\`\`\``
//Lệnh hàng chờ
let string2 = `\`\`\`fix
=clear      -- xóa hết con mẹ nó hàng chờ
=loopqueue  -- lúp hết con mẹ nó hàng chờ
=shuffle    -- phát ngẫu nhiên nguyên cái hàng chờ
\`\`\``
//Lệnh phụ
let string3 = `\`\`\`fix
=commands   -- xem lệnh nhé anh em
=aliases    -- mấy cái dưới này đéo quan tâm nhé anh em
=help       -- 
=ping       -- 
=uptime     -- 
\`\`\``     
        let pages = [
          {"title": "Lệnh nhạc", "msg": string1},
          {"title": "Lệnh hàng chờ", "msg": string2},
          {"title": "Lệnh thông tin", "msg": string3},
        ]
        paginationEmbed(message, pages, ['⏪', '⏩', "⏹"], 60000)

    } catch (e) {
        console.log(String(e.stack).bgRed)
        return message.channel.send(new MessageEmbed()
            .setColor(ee.wrongcolor)
            .setFooter(ee.footertext, ee.footericon)
            .setTitle(`❌ ERROR | An error occurred`)
            .setDescription(`\`\`\`${e.stack}\`\`\``)
        );
    }
  }
}
/**
  * @INFO
  * Bot Coded by Tomato#6966 | https://github.com/Tomato6966/Discord-Js-Handler-Template
  * @INFO
  * Work for Milrato Development | https://milrato.eu
  * @INFO
  * Please mention Him / Milrato Development, when using this Code=
  * @INFO
*/
