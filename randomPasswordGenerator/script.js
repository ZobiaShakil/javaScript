
const passwordBox = document.getElementById("password");
const button = document.getElementById("btn")
const copyButton = document.getElementById("copy");

const generatePassword = ()=>{
    const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijlmnopqrstuvwxyz0123456789@#$%^&*+_=";

    let password= "";
    const lengthofPassword = 8; //loop 


    for(let i = 0;i<lengthofPassword; i++){
        password += chars.charAt(Math.floor(Math.random() * chars.length))
        //console.log(password);
    }
    passwordBox.value = password;
};




button.addEventListener("click",generatePassword);
   
copyButton.addEventListener("click",()=>{

const passwordCopy = passwordBox.value.trim();
if(!passwordCopy){
    alert("no password to copy!,please generate a password first.");
    return;
}
  navigator.clipboard.writeText(passwordCopy)
  .then(()=>{
    alert("password copied to clipboard");
  });
  });
