const simple = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *SIMPLE MENU* ]----- 🔰
Hallo, ${pushname} 👋
  User Bot =  ${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ NAMA : ${pushname}
┃│➸ LEVEL : ${getLevelingLevel(sender)}
┃│➸ USER ${botName} : ${_registered.length}
┃╰───────────────────
┃╭───────────────────
┃│➸ *${prefix}Sticker*
┃│➸ *${prefix}Ttp*
┃│➸ *${prefix}Attp*
┃│➸ *${prefix}Tts*
┃│➸ *${prefix}Toimg*
┃│➸ *${prefix}Nulis*
┃│➸ *${prefix}Nulis1*
┃│➸ *${prefix}Nulis2*
┃│➸ *${prefix}Stalkig*
┃│➸ *${prefix}Quotes*
┃│➸ *${prefix}Bikinquote*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
Berikut Adalah Fitur Yang Ada Pada Bot Kami!👻 
Jika Tidak Paham Ketik *${prefix}Panduan*`
}
exports.simple = simple