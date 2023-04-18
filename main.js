const mail = prompt("mail")
const users = ["mariorossi@gmail.com", "marioverdi@gmail.com", "mariogialli@gmail.com", "marioneri@gmail.com", "mariobianchi@gmail.com","marioazzurri@gmail.com"]
for (let c = 0; c < users.length; c++) {
    console.log(users[c]);
    if(mail == users[c]){
        alert("ok")
    }
}