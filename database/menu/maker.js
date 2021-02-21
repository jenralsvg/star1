const maker = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🔰 -----[ *MAKER MENU* ]----- 🔰
Haiii,  ${pushname} 👋
  User Bot =  ${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ NAMA : ${pushname}
┃│➸ LEVEL : ${getLevelingLevel(sender)}
┃│➸ USER ${botName} : ${_registered.length}
┃╰───────────────────
┃╭───────────────────
┃│➸ *${prefix}Tahta*
┃│➸ *${prefix}GtaWasted*
┃│➸ *${prefix}Text8Bit*
┃│➸ *${prefix}TextPro*
┃│➸ *${prefix}YoutubeText*
┃│➸ *${prefix}Gemboktext*
┃│➸ *${prefix}Silktext*
┃│➸ *${prefix}Neontext*
┃│➸ *${prefix}Ninjalogo*
┃│➸ *${prefix}Halloweentext*
┃│➸ *${prefix}Pornhub*
┃│➸ *${prefix}Glitchtext*
┃│➸ *${prefix}Blackpink*
┃│➸ *${prefix}Cloudtext*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
Jika Anda Ingin Request Fiture Baru Untuk Bot Ini,
Silahkan Ketik ${prefix}Request  _Text Anda_`
}
exports.maker = maker