import{hoursLoad} from "../hours-loud.js"
const schedule = []
//seleciona o input de data
const selectedDate = document.getElementById ("date")

export function schedulesDay() {

    //obtem a data do input
    const date = selectedDate.value
    
 // renderiza as horas disponiveis
    hoursLoad({ date })

}


export function addSchedule (name, hour) {

    const scheduleMorning = `<section class="schedule-period">
          <header>
            <img src="./src/assets/morning.svg" alt="Manhã" />
            <strong>Manhã</strong>
            <span>09h-12h</span>
          </header>
          <ul id="period-morning" class="period">
            <!-- Exemplo  -->
            <li>
              <strong>${hour}</strong>
              <span>${name}</span>
              <img
                src="./src/assets/cancel.svg"
                alt="Cancelar"
                class="cancel-icon"
              />
            </li>
          </ul>
        </section> `
    

        const scheduleAffternon = ` <section class="schedule-period">
          <header>
            <img src="./src/assets/afternoon.svg" alt="Tarde" />
            <strong>Tarde</strong>
            <span>13h-18h</span>
          </header>
          <ul id="period-afternoon" class="period">
            <!-- Exemplo -->
            <li>
              <strong>${hour}</strong>
              <span>${name}</span>
              <img
                src="./src/assets/cancel.svg"
                alt="Cancelar"
                class="cancel-icon"
              />
            </li>
          </ul>
        </section> `

        
        const scheduleNigth = `<section class="schedule-period">
          <header>
            <img src="./src/assets/night.svg" alt="noite" />
            <strong>noite</strong>
            <span>19h-21h</span>
          </header>
          <ul id="period-night" class="period">
            <!-- Exemplo -->
            <li>
              <strong>${hour}</strong>
              <span>${name}</span>
              <img
                src="./src/assets/cancel.svg"
                alt="Cancelar"
                class="cancel-icon"
              />
            </li>
          </ul>
        </section>`



            if (hour ==="9:00") {
                hourHeaderAdd("Manhã")
            } else if (hour ==="13:00") {
                hourHeaderAdd("Tarde")
            } else if (hour ==="18:00") {
              hourHeaderAdd("Noite")
        }
        
}