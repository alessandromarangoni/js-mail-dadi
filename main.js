const bottone = document.getElementById("bottone")
bottone.addEventListener("click", function(){
const mail = document.getElementById("mail").value
const users = ["mariorossi@gmail.com", "marioverdi@gmail.com", "mariogialli@gmail.com", "marioneri@gmail.com", "mariobianchi@gmail.com","marioazzurri@gmail.com"]

for (let c = 0; c < users.length; c++) {
    console.log(users[c]);
    if(mail == users[c]){
        const risultato = document.getElementById("risultato")

        // alert("ok");
        risultato.innerHTML="si"
        break
    }
    else{
        risultato.innerHTML="no"
    }
    // let print = document.getElementById("span")
    // print.innerHTML =`${risultato}`
    }
}
)
