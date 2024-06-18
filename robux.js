const nickName = document.getElementById('exampleInputEmail1')
const robUx = document.getElementById('exampleInputPassword1')
const age = document.getElementById('exampleInputPassword2')
const bTn = document.getElementById('rb')
const vivEl = 'Робаксы успешно были отправлены на ваш аккаунт! Они появятся на вашем аккаунте через 24 часа!'

bTn.onclick = function(){

    iffer()

    if (age.value > 18){
        alert('Похоже вы ошиблись при написании данных своего аккаунта! Попробуйте ввести более корректные данные!')
    }

    if (robUx.value > 100) {
        alert('Похоже вы ошиблись при написании данных своего аккаунта или значения! Попробуйте ввести более корректные данные!')
    }

    alert(vivEl)

    // vivElement(vivEl)

}

function iffer(){
    if (nickName.value == ''){
        alert('Вы ввели не все данные своего акаунта! Введите все, чтобы отправить робаксы! ')
    } if (age.value == ''){
        alert('Вы ввели не все данные своего акаунта! Введите все, чтобы отправить робаксы!')
    } if (robUx.value == ''){
        alert('Вы ввели не все данные своего акаунта! Введите все, чтобы отправить робаксы!')
    } 
}

// function vivElement(title){

//     return`
//     <div id="emailHelp" class="form-text">${title}</div>
//     `

// }

