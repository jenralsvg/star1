const random = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *RANDOM MENU* ]----- 🔰
Haiii,  ${pushname} 👋
  User Bot =  ${sender.split("@")[0]}
  
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ NAMA : ${pushname}
┃│➸ LEVEL : ${getLevelingLevel(sender)}
┃│➸ USER ${botName} : ${_registered.length}
┃╰───────────────────
┃╭───────────────────
┃│➸ *${prefix}Anjing*
┃│➸ *${prefix}Bokep*
┃│➸ *${prefix}Blowjob*
┃│➸ *${prefix}Darkjokes*
┃│➸ *${prefix}Nekonime*
┃│➸ *${prefix}RandomHentong
┃│➸ *${prefix}Wibu*
┃│➸ *${prefix}Loli*
┃│➸ *${prefix}Neko*
┃│➸ *${prefix}Husbu*
┃│➸ *${prefix}Kpop*
┃│➸ *${prefix}Pokemon*
┃│➸ *${prefix}Mutual*
┃│➸ *${prefix}Next*
┃│➸ *${prefix}Nangis*
┃│➸ *${prefix}Cium*
┃│➸ *${prefix}Peluk*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
Jika Anda Ingin Request Fiture Baru Untuk Bot Ini,
Silahkan Ketik ${prefix}Request  _Text Anda_`
}
exports.random = random