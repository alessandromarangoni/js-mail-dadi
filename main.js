    const bottone = document.getElementById("bottone")
    bottone.addEventListener("click", function(){
    const mail = document.getElementById("mail").value
    const users = ["mariorossi@gmail.com", "marioverdi@gmail.com", "mariogialli@gmail.com", "marioneri@gmail.com", "mariobianchi@gmail.com","marioazzurri@gmail.com"]

    for (let c = 0; c < users.length; c++) {
        console.log(users[c]);
        if(mail == users[c]){
            var risultato = ("login effettuato")

        }
        else{
            var risultato = ("mail non trovata registrarsi")
        }
        let print = document.getElementById("span")
        print.innerHTML =`${risultato}`
}
    }
)