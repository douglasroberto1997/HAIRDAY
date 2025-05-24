import dayjs from  "dayjs"
const form = document.querySelector ("form")
const selectedDate = document.getElementById ("date")

//carrega data atual
selectedDate.value = dayjs(new Date()).format("YYYY-MM-DD")

//define data minima/atual
selectedDate.min = dayjs (new Date()).format ("YYYY-MM-DD")

form.onsubmit = (event) => {
    //previne o comportamento padrão
    event.preventDefault()

}