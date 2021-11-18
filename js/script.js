// Replica della grafica con la possibilità di avere messaggi scritti dall’utente (verdi) e dall’interlocutore (bianco) assegnando due classi CSS diverse
// Visualizzazione dinamica della lista contatti: tramite la direttiva v-for, visualizzare nome e immagine di ogni contatto

// Visualizzazione dinamica dei messaggi: tramite la direttiva v-for, visualizzare tutti i messaggi relativi al contatto attivo all’interno del pannello della conversazione

// Aggiunta di un messaggio: l’utente scrive un testo nella parte bassa e digitando “enter” il testo viene aggiunto al thread sopra, come messaggio verde
// Risposta dall’interlocutore: ad ogni inserimento di un messaggio, l’utente riceverà un “ok” come risposta, che apparirà dopo 1 secondo.

// Milestone 4
// Ricerca utenti: scrivendo qualcosa nell’input a sinistra, vengono visualizzati solo i contatti il cui nome contiene le lettere inserite (es, Marco, Matteo Martina -> Scrivo “mar” rimangono solo Marco e Martina)
// Milestone 5 - opzionale
// Cancella messaggio: cliccando sul messaggio appare un menu a tendina che permette di cancellare il messaggio selezionato

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
        visible: true,

        messages: [
          {
          date: '10/01/2020 15:30:55',
          message: 'Hai portato a spasso il cane?',
          status: 'sent'
          },
          
          {
              date: '10/01/2020 15:50:00',
              message: 'Ricordati di dargli da mangiare',
              status: 'sent'
          },

          {
              date: '10/01/2020 16:15:22',
              message: 'Tutto fatto!',
              status: 'received'
          }
        ],
      },


      {
        name: "Fabio",
        avatar: "img/avatar_3.jpg",
        visible: true,

        messages: [{
            date: '20/03/2020 16:30:00',
            message: 'Ciao come stai?',
            status: 'sent'
          },

          {
            date: '20/03/2020 16:30:55',
            message: 'Bene grazie! Stasera ci vediamo?',
            status: 'received',
          },

          {
            date: '20/03/2020 16:35:00',
            message: 'Mi piacerebbe ma devo andare a fare la spesa.',
            status: 'received'
          }
        ],
      },


      {
        name: "Samuele",
        avatar: "img/avatar_4.jpg",
        visible: true,

        messages: [{
            date: '28/03/2020 10:10:40',
            message: 'La Marianna va in campagna',
            status: 'received'
            },

            {
            date: '28/03/2020 10:20:10',
            message: 'Sicuro di non aver sbagliato chat?',
            status: 'sent'
            },

            {
              date: '28/03/2020 16:15:22',
              message: 'Ah scusa!',
              status: 'received'
          }
        ],
      },


        {
        name: "Luisa",
        avatar: "img/avatar_5.jpg",
        visible: true,

        messages: [{
          date: '10/01/2020 15:30:55',
          message: 'Lo sai che ha aperto una nuova pizzeria?',
          status: 'sent'
            },

            {
              date: '10/01/2020 15:50:00',
              message: 'Si, ma preferirei andare al cinema',
              status: 'received'
          }
        ],
      },
    ],
    activeChat: 0,
    searchUser:'',
  },


  methods: {


    //Funzione per far inviare il messaggio automatico
    pushMessage(text){
      console.log("Prova Invio");

      if (!text.length == 0) {

        let messageToPush = {
          date: '15/20/2020 22:50:00',
          message: text,
          status: 'sent'
        }
        this.users[this.activeChat].messages.push(messageToPush);
        this.myUser.message="";

        document.querySelector('.chat').scrollTop = 999999999999; 

        setTimeout(() => {
          console.log("Prova TimeOut");
          this.autoMessage();
        },1000);

        document.querySelector('.chat').scrollTop = 999999999999; 

      }
    },


    //Funzione per messaggio automatico
    autoMessage() {
      let messageToPush = {
        date: '15/20/2020 22:50:00',
        message: "ok",
        status: 'received'
      }
      this.users[this.activeChat].messages.push(messageToPush);
        this.myUser.message="";
    },



    /**Funzione per l'input per cercare il nome di un utente */
    compareName() {
      for (let user of this.users){
        
      if (!user.name.toLowerCase().includes(this.searchUser.toLowerCase())) {
        user.visible = false;
      } else
      {
        user.visible = true;
      };
    };
    },
  },



})




