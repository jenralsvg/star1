const other = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *OTHER MENU* ]----- 🔰
Hallo, ${pushname} 👋
  User Bot =  ${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ NAMA : ${pushname}
┃│➸ LEVEL : ${getLevelingLevel(sender)}
┃│➸ USER ${botName} :   ${_registered.length}
┃╰───────────────────
┃╭───────────────────
┃│➸ *${prefix}Sticker*
┃│➸ *${prefix}StickerGif
┃│➸ *${prefix}KataIlham*
┃│➸ *${prefix}KataHacker*
┃│➸ *${prefix}Mining*
┃│➸ *${prefix}Ttp*
┃│➸ *${prefix}Attp*
┃│➸ *${prefix}Tts*
┃│➸ *${prefix}Toimg*
┃│➸ *${prefix}Brainly*
┃│➸ *${prefix}Pinterest*
┃│➸ *${prefix}Resepmakanan*
┃│➸ *${prefix}Beritahoax*
┃│➸ *${prefix}Timer*
┃│➸ *${prefix}Nulis1*
┃│➸ *${prefix}Nulis2*
┃│➸ *${prefix}Stalkig*
┃│➸ *${prefix}Quotes*
┃│➸ *${prefix}Bikinquote*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
Jika Anda Ingin Request Fiture Baru Untuk Bot Ini,
Silahkan Ketik ${prefix}Request  _Text Anda_`
}
exports.other = other