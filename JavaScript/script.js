// getting dom Elements

const singUpform = document.getElementById(`singupForm`);
const names = document.getElementById(`name`);
const email = document.getElementById(`email`);
const password = document.getElementById(`password`);
const password2 = document.getElementById(`password2`);
const NamePopup = document.getElementById(`namePopup`);
const passwordPopup = document.getElementById(`passwordPopup`);
const closePopup = document.getElementById(`closePopup`);
const closePopup2 = document.getElementById(`closePopup2`);
const closePopup3 = document.getElementById(`closePopup3`);

function showPopup(el) {
    el.style.transform = "scale(1)";
}
closePopup.addEventListener(`click`, () => {
    location.reload();
});
closePopup2.addEventListener(`click`, () => {
    location.reload();
});
closePopup3.addEventListener(`click`, () => {
    location.reload();
});

// preventing the defualt behavure of the form

singUpform.addEventListener(`submit`, (e) => {
    e.preventDefault();

    if (names.value.trim() === "") {
        showPopup(NamePopup);
    } else {}

    passwordValidation(password, password2);
});

function passwordValidation(pass1, pass2) {
    let a = pass1.value.toString();
    let b = pass2.value.toString();
    if (!a.localeCompare(b) == 0) {
        showPopup(passwordPopup);
    }

    if (a.length < 4 || a.lenght > 12) {
        showPopup(passwordSortPopup);
    }
}