import dayjs from  "dayjs"


const form = document.querySelector ("form")
const clientName = document.getElementById("client")
const selectedDate = document.getElementById ("date")

//carrega data atual
selectedDate.value = dayjs(new Date()).format("YYYY-MM-DD")

//define data minima/atual
selectedDate.min = dayjs (new Date()).format ("YYYY-MM-DD")

form.onsubmit = (event) => {
    //previne o comportamento padrão
    event.preventDefault()


 try{

    //recupera o nome do cliente
    const name = clienteName.value.trim()
    if (!name) {
        return alert ("Informe o nome do cliente")
    }

    //recupera o horario selecionado
    const hourSelected = documento.querySelector(".hour-selected")

    //recuperando horario selecionado
    if (!hourSelected) {
        return alert ("Selecione a hora")
    }

    //recuperar somente a hora
    const hour = hourSelected.innerText.split(":")

    //inserir a hora na data
    const when = dayjs(selectedDate.value).add(hour,"hour")

    //gerando id
    const id = new Date().getTime()

    console.log ({
        id,
        name,
        when,
    })

 } catch(error) {
    alert ("Não foi possivel realizar o agendamento")
 }
}