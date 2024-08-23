
document.addEventListener('DOMContentLoaded', () => {
   
    const passwordInput = document.getElementById('password');
    const eyeIcon = document.getElementById('eyeicon');
    
 
    eyeIcon.addEventListener('click', () => {
      
        if (passwordInput.type === 'password') {
           
            passwordInput.type = 'text';
           
            eyeIcon.classList.remove('fa-eye-slash');
            eyeIcon.classList.add('fa-eye');
        } else {
         
            passwordInput.type = 'password';
          
            eyeIcon.classList.remove('fa-eye');
            eyeIcon.classList.add('fa-eye-slash');
        }
    });
});
