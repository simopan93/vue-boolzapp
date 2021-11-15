// Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
// Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

const app = new Vue({
  el: "#app",

  data: {
    myUser: {
      name: "Simone",
      avatar: "img/avatar_1.jpg",
      message: ""
    },

    users: [
      {
        name: "Michele",
        avatar: "img/avatar_2.jpg",
        lastMessage: "Dipende da cosa",
        dateLastMessage: "10/01/2020 14:25:45"
      },

      {
        name: "Fabio",
        avatar: "img/avatar_3.jpg",
        lastMessage: "Sei ancora in",
        dateLastMessage: "10/04/2020 14:25:45"
      },

      {
        name: "Samuele",
        avatar: "img/avatar_4.jpg",
        lastMessage: "Non ti preoccupare della",
        dateLastMessage: "08/01/2020 14:50:45"
      },

      {
        name: "Luisa",
        avatar: "img/avatar_5.jpg",
        lastMessage: "",
        dateLastMessage: "30/01/2020 14:25:45"
      },
    ],
  }





})