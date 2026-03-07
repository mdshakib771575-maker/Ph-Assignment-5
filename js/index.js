const inputUserName = document.getElementById('usernameInput')
const Inputpassword = document.getElementById(' Inputpassword')
const btn = document.getElementById('btn');
btn.addEventListener('click',()=>{
 const   inputUserNameValue = inputUserName.value.trim();
 const InputpasswordValue = Inputpassword.value.trim();
//  console.log(inputUserNameValue)
if(inputUserNameValue !== "admin"){
alert('UsearName is Invalid')
return
}else{

}
if(InputpasswordValue === 'admin123'){
    alert('Login success')
    window.location.assign('home-page.html')
}else{
    alert('pin is invalid')
}


})