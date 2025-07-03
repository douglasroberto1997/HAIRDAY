import dayjs from  "dayjs"

import { scheduleNew } from "../../services/schedule-new.js"
import{schedulesDay} from "../../modules/form/schedules/load.js"


const form = document.querySelector ("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById ("date")

//carrega data atual
selectedDate.value = dayjs(new Date()).format("YYYY-MM-DD")

//define data minima/atual
selectedDate.min = dayjs (new Date()).format ("YYYY-MM-DD")

form.onsubmit = async (event) => {
    //previne o comportamento padrão
    event.preventDefault()


 try{

    //recupera o nome do cliente
    const name = clientName.value.trim()
    
    if(!name) {
      return alert("Informe o nome do cliente!")
    }

    //recupera o horario selecionado
    const hourSelected = document.querySelector(".hour-selected")
    

    //recupera o horario selecionado
    if (!hourSelected) {
      return alert("Selecione a hora")
    }


    //recupera a hora
    const [hour] = hourSelected.innerText.split (":")
    

    //inserir a hora na data
    const when = dayjs(selectedDate.value).add(hour,"hour")
    
    //gera um ID
    const id = new Date().getTime()

    //fa z o agendamento
      await scheduleNew ({
         id,
         name,
         when
    })

    //recarregar o agendamentos
    await schedulesDay()

    //limpa o input de nome do cliente
    clientName.value = ""


 } catch(error) {
    console.log(error)
    alert ("Não foi possivel realizar o agendamento")

 }
}