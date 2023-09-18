const xmpp = require("simple-xmpp");

xmpp.on("online", data => {
    console.log("Hey you are online! ")
    console.log(`Connected as ${data.jid.user}`)
    send();
})

function send() {
    setTimeout(send, 5000);
    xmpp.send("amjad@tigase.chat.server.edyou.io", `hi! ${Date.now()}`)
}
xmpp.on("error", error => {
    console.log(error);
    console.log(`something went wrong!${error} `)
});


xmpp.on("chat", (from, message) => {
    console.log(`Got a message! ${message} from ${from}`)
})

xmpp.connect({
    "jid": "admin@tigase.chat.server.edyou.io",
    "password": "tigase",
    "host": "tigase.chat.server.edyou.io",
    "port": 5222
})