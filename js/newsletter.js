const popup = document.getElementById("popup");
const closePopup = document.getElementById("close-popup");
const popupForm = document.getElementById("popup-form");
const errorMsg = document.getElementById("popupErrorMessage");
const emailPopup = document.getElementById("emailPopup");

const showPopup = () => {
    if (!localStorage.getItem("popupClosed")) {
        popup.style.display = 'block';
    }
}

const closePop = () => {
    popup.style.display = 'none';
    localStorage.setItem('popupClosed', true);
}

closePopup.addEventListener('click', () => {
    closePop();
})

window.addEventListener('scroll', () => {
    let winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrolled = (winScroll / height) * 100;
    if (scrolled > 25) {
        showPopup();
    }
});

window.addEventListener('click', (event) => {
    if (event.target == popup) {
        closePop();
    }
})

window.addEventListener('click', (event) => {
    if (event.target == popup) {
        closePop();
    }
})

document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') {
        closePop();
    }
})

document.getElementById("popupForm").addEventListener("submit", (event) => {
    event.preventDefault();
    const emailRegex = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    const email = event.target.email.value;

    if (email) {
        if (emailRegex.test(email)) {
            const emailData = {
                "email": email,
            };
            errorMsg.style.display = 'none';
            emailPopup.style.borderBottom = "1px solid #ccc";
            event.target.email.value = "";
            closePop();
            sendForm(emailData);
        } else {
            errorMsg.style.display = 'block';
            emailPopup.style.borderBottom = "1px solid red"
            errorMsg.textContent = "Introduzca el correo correctamente.";
        }
    } else {
        errorMsg.style.display = 'block';
        emailPopup.style.borderBottom = "1px solid red";
        errorMsg.textContent = "Introduzca un correo.";
    }
})
setTimeout(showPopup, 5000);