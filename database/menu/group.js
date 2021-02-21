const groupm = (pushname, prefix, botName, ownerName, getLevelingLevel, sender, _registered) => {
	return `🎭 ~~~[ *GROUP MENU* ]~~~ 🎭
Haiiii, ${pushname} 👋
  User Bot =  ${sender.split("@")[0]}
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ NAMA : ${pushname}
┃│➸ LEVEL : ${getLevelingLevel(sender)}
┃│➸ USER ${botName} : ${_registered.length}
┃╰───────────────────
┃╭───────────────────
┃│➸ *${prefix}Welcome* 「 1/0 」
┃│➸ *${prefix}Leveling* 「 1/0 」
┃│➸ *${prefix}Simih* 「 1/0 」
┃│➸ *${prefix}Nsfw* 「 1/0 」
┃│➸ *${prefix}Antilinkgrup* 「 1/0 」
┃│➸ *${prefix}Grup* 「 buka/tutup 」
┃│➸ *${prefix}Add*
┃│➸ *${prefix}Kick*
┃│➸ *${prefix}Hedsot*
┃│➸ *${prefix}Linkgrup*
┃│➸ *${prefix}Promote*
┃│➸ *${prefix}Demote*
┃│➸ *${prefix}Setname*
┃│➸ *${prefix}Setdesc*
┃│➸ *${prefix}Leave*
┃│➸ *${prefix}Tagall*
┃│➸ *${prefix}Admin*
┃│➸ *${prefix}Level*
┃│➸ *${prefix}Fitnah*
┃│➸ *${prefix}Hidetag*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
Jika Anda Ingin Request Fiture Baru Untuk Bot Ini,
Silahkan Ketik ${prefix}Request  _Text Anda_`
}
exports.groupm = groupm