const limit = (prefix, botName, ownerName) => {
        return `
「 *${botName}* 」

◪ *INFO*
  ❏ Prefix: 「  ${prefix}  」
  ❏ Creator: LEOREO
  ❏ Version: 0.0.4
◪ *SOBRE...*
  │
  ├─ ❏ ${prefix}info
  ├─ ❏ ${prefix}blocklista
  ├─ ❏ ${prefix}chatlista
  ├─ ❏ ${prefix}ping
  └─ ❏ ${prefix}bugreportar
◪ *LIMITE*
  │
  ├─ ❏ ${prefix}limite
  ├─ ❏ ${prefix}bal
  └─ ❏ ${prefix}comprarlimite
--------------------------------
Note: Puedes comprar un límite recolectando dinero primero. Verifique su dinero escribiendo el comando *${prefix}bal* , harga 1 limit = 1000 uang.`
}
exports.limit = limit
