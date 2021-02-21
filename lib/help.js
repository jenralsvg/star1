const help = (pushname, prefix, botName, ownerName, reqXp, getLevelingLevel, sender, _registered, uangku) => {
        return `🎭 ~~~[ *${botName}* ]~~~ 🎭
Haiii,  ${pushname} 👋
  User Bot =  ${sender.split("@")[0]}
  
     Grup Enzet  :☟︎︎︎ Di Sunnahkan Gabung
https://chat.whatsapp.com/I0ASKkgD7hg9sOS4kc2kho
┏━━━━━━━━━━━━━━━━━━━━┓
┃╭───────────────────
┃│➸ NAMA : *_${pushname}_*
┃│➸ XP : *_${reqXp}_*
┃│➸ LEVEL : _*${getLevelingLevel(sender)}*_
┃│➸ USER *_${botName}_* : ${_registered.length}
┃╰───────────────────
┃╭───────────────────
┃│➸ *${prefix}Info*
┃│➸ *${prefix}Ping*
┃│➸ *${prefix}Donasi*
┃│➸ *${prefix}Owner*
┠────────────────────
┃│➸ *${prefix}IslamMenu*
┃│
┃│➸ *${prefix}MakerMenu*
┃│
┃│➸ *${prefix}OtherMenu*
┃│
┃│➸ *${prefix}HeppyMenu*
┃│
┃│➸ *${prefix}Groupmenu*
┃│
┃│➸ *${prefix}SoundMenu*
┃│
┃│➸ *${prefix}RandomMenu*
┃│
┃│➸ *${prefix}DownloadMenu*
┃│
┃│➸ *${prefix}DeveloperMenu*
┃╰───────────────────
┗━━━━━━━━━━━━━━━━━━━━┛
Di Atas Adalah Fitur Yang Ada Pada Bot Kami!👻 
Jika Tidak Paham Ketik *${prefix}Panduan*`
}
exports.help = help
