const xmpp = require("simple-xmpp");
//hussein
xmpp.on ("online", data => {
    console.log("Hey you are online! ")
    console.log(`Connected as ${data.jid.user}`)
    send();
})

function send () {
    setTimeout(send, 5000);
    xmpp.send("admin@ejabberd.server.edyou.io", `hi! ${Date.now()}`)
}
xmpp.on("error", error => 
    console.log(`something went wrong!${error} `))

xmpp.on("chat", (from, message)=>{
    console.log(`Got a message! ${message} from ${from}`)
})

xmpp.connect({
    "jid": "admin@ejabberd.server.edyou.io",
    "password": "tigase",
    "host": "ejabberd.server.edyou.io",
    "port": 5222
})


// ./scripts/tigase start etc/tigase.conf
// chmod u+x ./scripts/tigase.sh