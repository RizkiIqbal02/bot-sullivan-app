let handler = async (m, { conn, text, usedPrefix, command }) => {
await m.reply(`Pa pe pa pe kagak sopan lu`)
}

handler.customPrefix = /^(p)$/i
handler.command = new RegExp
export default handler

