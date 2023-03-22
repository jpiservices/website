let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
menu.classList.toggle('fa-times');
navbar.classList.toggle('active');


}
window.onscroll = () =>{

    menu.classList.remove('fa-times');
    navbar.classList.remove('active');
}
 


const form = document.querySelector("#form");
const button = document.querySelector(".button");
const emailInput = document.querySelector("#email");
const nameeInput = document.querySelector("#namee");
const subjectInput = document.querySelector("#subject");
const messageInput = document.querySelector("#message");

const publicKey = "_yGEJUunPyv1pUJ7O";
const serviceID = "service_r25gau9";
const templateID ="template_cknqn8s";

emailjs.init(publicKey);
form.addEventListener("submit", e => {
    e.preventDefault();

    button.innerText = " Just A Moment...";
    const inputFields = {
email: emailInput.value,
name: nameeInput.value,
subject: subjectInput.value,
message: messageInput.value,
    }

    emailjs.send(serviceID, templateID, inputFields)
    .then(() => {
button.innerText = "Message Sent Successfully";
nameeInput = "";
emailInput = "";
subjectInput = "";
messageInput = "";
    }, (error) => {
        console.log(error);

        button.innerText = "Something Went wrong";
    });
});
