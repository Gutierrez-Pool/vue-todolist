// MILESTONE 3
// Predisporre un campo di input testuale e un pulsante "aggiungi": cliccando sul pulsante, il testo digitato viene letto e utilizzato per creare un nuovo to-do, che quindi viene aggiunto alla lista dei to-do esistenti.
// Bonus:
// 1- oltre al click sul pulsante per la aggiunta del task, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell'item, invertire il valore della proprietà done del to-do corrispondente (se done era uguale a false, impostare true e viceversa)

const {createApp} = Vue;

createApp({
    data() {
        return {
            
            tasks: [
                {
                  text: "Comprare latte",
                  done: false,
                },
                {
                  text: "Chiamare l'elettricista",
                  done: false,
                },
                {
                  text: "Preparare la presentazione",
                  done: false,
                },
                {
                  text: "Fare la spesa",
                  done: false,
                },
                {
                  text: "Pagare le bollette",
                  done: false,
                },
                {
                  text: "Portare l'auto dal meccanico",
                  done: false,
                }
              ],





        }
    },

    methods: {
    
        taskDone(index) {
            this.tasks[index].done = true;
        },

        deleteTask(taskIndex) {
            this.tasks.splice(taskIndex, 1);
        }


    },

}).mount("#app");

// v-if="tasks.done = true ? 'del': '' "
