// Bonus:
// 1- oltre al click sul pulsante per la aggiunta del task, intercettare anche il tasto ENTER per aggiungere il todo alla lista
// 2- cliccando sul testo dell'item, invertire il valore della proprietà done del to-do corrispondente (se done era uguale a false, impostare true e viceversa)

const {createApp} = Vue;

createApp({
    data() {
        return {
            
            newTask: '',

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
        },

        addTask() {

            const newTask = {
                text: this.newTask,
                done: false,
            }

            this.tasks.push(newTask)

            this.newTask = '';
        },

    },

}).mount("#app");

// v-if="tasks.done = true ? 'del': '' "
