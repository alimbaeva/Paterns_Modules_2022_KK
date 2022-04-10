//  mediator Посредник

const User = function (name) {
    this.name = name;
    this.chatroom = null;
};

User.prototype = {
    send: function (messege, to) {
        this.chatroom.send(messege, this, to);
    },

    receive: function (messege, from) {
        console.log(`${from.name} to ${this.name}: ${messege}`)
    },
};


const ChatRoom = function () {
    let users = {};

    return {
        register: function (user) {
            users[user.name] = user;
            user.chatroom = this;
        },

        send: function (messege, from, to) {
            if (to) {
                to.receive(messege, from)
            } else {
                for (key in users) {
                    if (users[key] !== from) {
                        users[key].receive(messege, from)
                    }
                }
            }
        }
    };
};

const jone = new User('Jone')
const asel = new User('Asel')
const lena = new User('Lena')

const chatroom = new ChatRoom();

chatroom.register(jone);
chatroom.register(asel);
chatroom.register(lena);

jone.send("Hello Asel", asel);
asel.send("Hello Jone", jone);
lena.send('Hello everyone');