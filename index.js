const {Client , GatewayIntentBits , EmbedBuilder} = require('discord.js');
const dotenv = require('dotenv');
const chalk = require('chalk');
dotenv.config();

const bot = new Client({ intents: [ GatewayIntentBits.GuildMembers, GatewayIntentBits.Guilds, GatewayIntentBits.MessageContent, GatewayIntentBits.GuildMessages, GatewayIntentBits.GuildPresences ] });

bot.on('ready',()=>{
    console.log(chalk.yellow("Bot is ready"));
    
});

const welcome_ch = '1155566274466824393';
const bye_ch = '1168910259444789349';
const roles_ch = '1155568961774166138';


bot.on('guildMemberAdd',async(members)=>{
    const ch = members.guild.channels.cache.get(welcome_ch);
    const welcome = new EmbedBuilder();
    welcome.setColor(0xfa1919);
    welcome.setDescription(`
    ยินดีต้อนรับ ${members.user.username} เข้าสู่เซิร์ฟเวอร์ ${members.guild.name}\n\nกด <#${roles_ch}> เพื่อรับยศ`)
    welcome.setAuthor({iconURL:`${members.user.displayAvatarURL()}`,name:`${members.user.username}`});
    welcome.setImage('https://media.tenor.com/30TFXsJZzLgAAAAC/happy-anya-spy-x-family.gif');
    welcome.setFooter({text:`จำนวนผู้ใช้ทั้งหมด ${members.guild.memberCount} คน`});
    welcome.setTimestamp();
    welcome.setThumbnail('https://media.tenor.com/O2rjmEEhDE8AAAAi/tonton-tonton-friends.gif');
    ch.send(`สวัสดี <@${members.user.id}> 🤍`)
    await ch.send({embeds:[welcome]});
    
});

bot.on('guildMemberRemove',async(members)=>{
    const ch = members.guild.channels.cache.get(bye_ch);
    const bye = new EmbedBuilder();
    bye.setColor(0xfa1919);
    bye.setAuthor({iconURL:`${members.user.displayAvatarURL()}`,name:`${members.user.username}`});
    bye.setDescription(`▰▱▰▱▰▱  𝙶𝚘𝚘𝚍𝚋𝚢𝚎  ▰▱▰▱▰▱\n\n${members.user.username} ได้ออกจากเซิร์ฟเวอร์ ${members.guild.name} แล้ว 🥹 \n\𝚂𝚎𝚎 𝚢𝚘𝚞 𝚜𝚘𝚘𝚗. `);
    bye.setImage('https://media.tenor.com/LVx85PQ6ZzkAAAAC/anya-sad.gif');
    bye.setFooter({text:`จำนวนผู้ใช้ทั้งหมด ${members.guild.memberCount} คน`});
    bye.setTimestamp();
    bye.setThumbnail('https://media.tenor.com/wJ1f-nu2nggAAAAj/wave-bye.gif');
    ch.send(`ไว้มาใหม่น้า <@${members.user.id}> 🤍
    `)
    ch.send({embeds:[bye]});
});

bot.on('messageCreate',async(members)=>{
    const res = new EmbedBuilder();
    res.setColor(0xfa1919);
    res.setDescription(`ㅤㅤㅤㅤㅤㅤ𝙲𝙷𝙰𝙾𝙶𝚄𝙰𝚈 𝚂𝚃𝚄𝙳𝙸𝙾\n\n
    โอนแล้วส่งสลิปห้องนี้ได้เลย <#1190981809442402354>
    `);
    res.setImage('https://img2.pic.in.th/pic/_20231204223802.png');
    res.setTimestamp();
    if(members.content === "-p"){
        members.channel.send({embeds:[res]});
        await members.delete();
    }
});

bot.on('messageCreate',async message => {
    const thx = new EmbedBuilder();
    thx.setColor(0xfa1919);
    thx.setDescription(`🌟 ส่งงานงับ 🌟\n
    ❄️ เช็ครูปด้วยน้า 📸 รูปไหนไม่ถูกต้อง แจ้งภายใน 1 วันน้า 📢\n
    ติชมได้งับ จะได้แก้ไขในอนาคตงับ ขอบคุณงับ 🤍
    <#1155573037912031302>\n
    ส่งเลขกิจกรรมด้วยนะค้าบ
    <#1185237275697750056>
    `);
    thx.setTimestamp();

    const queue = new EmbedBuilder();
    queue.setColor(0xfa1919);
    queue.setDescription(`
    🌟 คิวปกติ รองาน 3-4วันค่ะ
    <#1156264598882758799>\n
    🌟 คิวx2 รองาน7-8ชั่วโมง\n
    🌟 คิวx3 รองาน5-6ชั่วโมง
    <#1156266007615242381>\n
    🌟 คิวx4 รองาน3-4ชั่วโมง
    <#1185183979545047163>\n
    หลังจากลงคิวค่ะ 🙏 ถ้าไม่ติดคิวอาจจะไวกว่านี้ 💌\n
    ติดตามกิจกรรมร้าน CHAOGUAY STUDIO
    <#1155568725878120598>
    `);
    queue.setTimestamp();

    const Close = new EmbedBuilder();
    Close.setColor(0xfa1919);
    Close.setDescription(`🌷 แจ้งเตือนปิด ticket 🌷
    💌 ระบบจะปิด ticket ทุกๆสิ้นเดือน 🌟
    รบกวนลูกค้าโหลดไดรฟ์รูปก่อนระบบ
    จะปิด ticket อีก2วันเมื่อได้รับแจ้งเตือนนี้
    
    📸 หากต้องการสั่งรูปอีกครั้ง สามารถกดticketใหม่ขึ้นมาได้เลยค่ะ 🌟
    
    🤍 ขอบคุณที่ใช้บริการค่ะ 🤍
       -CHAOGUAY STUDIO-
    `);
    Close.setTimestamp();

    const tagroom = new EmbedBuilder();
    tagroom.setColor(0xfa1919);
    tagroom.setDescription(`    
    🌟 วิธีการกรอก 🌟
    <#1156262935694417970>\n
    🌟 สีตา
    <#1164927040697417788>\n
    🌟 ทรงผม
    <#1156261825566998588>
    <#1156262571058405466>\n
    🌟 ท่าเดี่ยว
    <#1156263680762204221>
    <#1160052908226789386>\n
    🌟 ตัวอย่างที่ร้านทำ 🌟
    <#1156272827087978586>
    <#1180111799077572658>
    <#1180568266071085190>
    <#1180811021460439101>
    <#1180811097624805396>
    <#1156269697357074603>
    <#1156269928693911633>\n
    🌟 ท่าคู่
    <#1156263797066059796>
    ตัวอย่างที่ร้านทำ
    <#1180893776286322688>
    <#1181555684010102784>
    <#1156270197343277106>\n
    🌟 ท่ากลุ่ม
    <#1180961790553763901>\n
    🌟 ท่าแก๊ง
    <#1183346298288603216>\n
    💌 ท่าทุกท่า สามารถถ่ายได้ทั้งชายและหญิง จะเดี่ยวหรือคู่ได้ได้ค่ะ ลูกค้าบรีพได้เลย 🌟
    `);
    tagroom.setTimestamp();

    const TagPromotion = new EmbedBuilder();
    TagPromotion.setColor(0xfa1919);
    TagPromotion.setDescription(`
    🌟 ห้องโปรโมชั่น
    <#1155568912281391124>
    `);
    TagPromotion.setTimestamp();

    const Send_slip = new EmbedBuilder();
    Send_slip.setColor(0xfa1919);
    Send_slip.setDescription(`
    🌟 CHAOGUAY STUDIO 🌟
    📢 แจ้งส่งเลขกิจกรรมเพื่อรักษาสิทธิ์ของตัวเองงับ สามารถส่งได้ที่ห้องนี้ได้เลยค้าบ 🍃\n
    <#1185237275697750056>\n
    💌 แอดมินขอขอบคุณทุกคนที่เข้าร่วมกิจกรรมครับ 🎄
    `);
    Send_slip.setTimestamp();

    const slip = new EmbedBuilder();
    slip.setColor(0xfa1919);
    slip.setDescription(`
    🌟 โอนแล้วส่งสลิปได้ห้องนี้เลยคับ\n
    🌟 รอแอดมินแอดแต้มให้ค้าบ\n
    <#1190981809442402354>
    `);
    slip.setTimestamp();

    const close_ticket = new EmbedBuilder();
    close_ticket.setColor(0xfa1919);
    close_ticket.setDescription(`
    📢ㅤขออนุญาตปิด ticket นะคะ รบกวนเซฟไฟล์รูปไว้ด้วยน้า
    🎀ㅤหากใครไฟล์หายหรือยังไม่ได้เซฟ กด ticket มาขอใหม่ได้เลยค่ะ \n
    แจ้งเลขเดิมด้วยนะคะ
    ดูเลขได้ที่ห้องนี้เลย <#1185237275697750056>
    `);
    close_ticket.setTimestamp();



    if(message.content == "-tx"){
        message.channel.send({embeds:[thx]});
        await message.delete();
    }
    else if(message.content == "-q"){
        message.channel.send({embeds:[queue]});
        await message.delete();
    }
    else if(message.content == "-d"){
        message.channel.send({embeds:[Close]});
        await message.delete();
    }
    else if(message.content == "-tt"){
        message.channel.send({embeds:[tagroom]});
        await message.delete();
    }
    else if(message.content == "-po"){
        message.channel.send({embeds:[TagPromotion]});
        await message.delete();
    }
    else if(message.content == "-g"){
        message.channel.send({embeds:[Send_slip]});
        await message.delete();
    }
    else if(message.content == "-sl"){
        message.channel.send({embeds:[slip]});
        await message.delete();
    }
    else if(message.content == "-ct"){
        message.channel.send({embeds:[close_ticket]});
        await message.delete();
    }

});


bot.login(process.env.TOKEN);




