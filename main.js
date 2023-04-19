
//esercizio svolto da me

// const bottone = document.getElementById("bottone")
// bottone.addEventListener("click", function(){
// const mail = document.getElementById("mail").value
// var users = ["mariorossi@gmail.com", "marioverdi@gmail.com", "mariogialli@gmail.com", "marioneri@gmail.com", "mariobianchi@gmail.com","marioazzurri@gmail.com"]

// for (let c = 0; c < users.length; c++) {
//     console.log(users[c]);
//     if(mail == users[c]){
//         const risultato = document.getElementById("risultato")
//         // alert("ok");
//         risultato.innerHTML="si"
//         break
//     }
//     else{
//         risultato.innerHTML="no"
//         // x = prompt("h")

//         // if(x != String ){
//         //     alert("G")
//         //     users += users.push=x
//         // }
//     }
// }
// }
// )


// correzione basic


// let mailAutorizzate = ["mariorossi@gmail.com", "marioverdi@gmail.com", "mariogialli@gmail.com", "marioneri@gmail.com", "mariobianchi@gmail.com","marioazzurri@gmail.com"]
// let mailUtente = prompt("mail")
// let mailAutorizzata;


// for (let c = 0; c < mailAutorizzate.length; c++) {
// const mailDaConfrontare = mailAutorizzate[c]
// if (mailUtente == mailDaConfrontare){
//     mailAutorizzata = true;
// }
// // else{console.log("mail non autorizzata")
// // }
// }

// if (mailAutorizzata == true){
// alert("ok")
// }
// else {
//     console.log("non autorizzata")
// }



// correzione con input


const bottone = document.getElementById("bottone")

bottone.addEventListener("click", function () {

    const mail = document.getElementById("mail").value
    let mailAutorizzate = ["mariorossi@gmail.com", "marioverdi@gmail.com", "mariogialli@gmail.com", "marioneri@gmail.com", "mariobianchi@gmail.com", "marioazzurri@gmail.com"]
    let mailAutorizzata;
    const risultato = document.getElementById("risultato")

    for (let c = 0; c < mailAutorizzate.length; c++) {
        const mailDaConfrontare = mailAutorizzate[c]
        if (mail == mailDaConfrontare) {
            mailAutorizzata = true;
        }
        // else {
        //     console.log("mail non autorizzata")
        // }
    }

    if (mailAutorizzata == true) {
        alert("ok")
        risultato.innerHTML = "si"
    }
    else {
        alert("no")
        console.log("non autorizzata")
        risultato.innerHTML = "no"
    }
}
)