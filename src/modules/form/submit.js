import dayjs from "dayjs"

const form = document.querySelector ("form")
const selectedDate = document.getElementById ("date")

//data atual para o input
const inputToday = dayjs(new Date()).format(YYYY-MM-DD)

//carrega a data atual e define a data minima como sendo a data atual
selectedDate.value = inputToday
selectedDate.min = inputToday

form.onsubmit = (event) => {
    //previne o comportamento padrão de carregar a pagina
    event.preventDefault()
}