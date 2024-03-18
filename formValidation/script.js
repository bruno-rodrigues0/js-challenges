// valores de teste
const users = [
    {
        name: "Bruno Rodrigues",
        email: "brunofzn@gmail.com",
        key: "123",
    },
    {
        name: "Fzn Fizene",
        email: "fznmtv0@gmail.com",
        key: "123",
    },
    {
        name: "Gabriel Montalvão",
        email: "bielzin@gmail.com",
        key: "123",
    }
]
//valores de teste

const form = document.querySelector("form")
let currentUser

const findEmail = (email) => {
    return users.find(user => user.email == email)
}

const validationLogin = (key, name) =>
    key == currentUser.key && name == currentUser.name

form.addEventListener("submit", (event) => {
    
    event.preventDefault()
    
    const [name, email, key] = [...document.querySelectorAll("#name, #email, #key")]    
    
    if(name && email && key){
        
        currentUser = findEmail(email)

        if(currentUser){
          if(validationLogin(key, name)){
            alert("Login Aproved")
          }else{
            alert("Login Rejected")
          }
        }else{
            alert("Email não encontrado")
        }     

    }else {
        alert("Preencha os campos")
    }

})


