const nickName = document.getElementById('exampleInputEmail1')
const robUx = document.getElementById('exampleInputPassword1')
const age = document.getElementById('exampleInputPassword2')
const bTn = document.getElementById('rb')

const vivEl = 'Робаксы успешно были отправлены на ваш аккаунт! Они появятся на вашем аккаунте через 24 часа!'

bTn.onclick = function(){
    if ((nickName.value == '') ||  (age.value == '') || (robUx.value == '') || age.value > 18 || robUx.value > 100 ){
        alert('Вы ввели не все данные своего акаунта или ошиблись при их записи! Перепроверьте все, чтобы отправить робаксы! ')
    }else{
        alert(vivEl)
    } 
}

