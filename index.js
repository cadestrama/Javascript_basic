

const btn = document.querySelector("#btn");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const message = document.querySelector(".message");

// sfsfdsf
//hhjhjhczxczxczxczxczxcxz
/*sadsada */
!-- sadasd-
btn.addEventListener("click",function(e){
   e.preventDefault();
    if(email.value.length === 0 || password.value.length ===0){
        message.innerHTML = "<h3 class='error'>Please complete the credential!<h3>";

        setTimeout(() => {  
            document.querySelector(".error").remove();
        }, 3000);
    } else {
        console.log(true);
    }
});