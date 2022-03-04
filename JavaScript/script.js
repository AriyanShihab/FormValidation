// getting dom Elements

const singUpform = document.getElementById(`singupForm`);
const names = document.getElementById(`name`);
const email = document.getElementById(`email`);
const password = document.getElementById(`password`);
const password2 = document.getElementById(`password2`);
const NamePopup = document.getElementById(`namePopup`);
const thanksPopup = document.getElementById(`ThankYou`);
const passwordPopup = document.getElementById(`passwordPopup`);
const closePopup = document.getElementById(`closePopup`);
const closePopup2 = document.getElementById(`closePopup2`);
const closePopup3 = document.getElementById(`closePopup3`);
const thanks = document.getElementById(`Thanks`);
const light = document.getElementById(`light`);
const dark = document.getElementById(`dark`);

dark.addEventListener(`click`, () => {
    document.documentElement.setAttribute("data-theme", "dark");
});
light.addEventListener(`click`, () => {
    document.documentElement.removeAttribute("data-theme", "dark");
});

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
thanks.addEventListener(`click`, () => {
    location.reload();
});
let t1, t2, t3;

function nameValidator() {
    if (names.value.trim() === "") {
        showPopup(NamePopup);
    } else {
        t1 = true;
    }
}

function passwordValidation(pass1, pass2) {
    let a = pass1.value.toString();
    let b = pass2.value.toString();
    if (!a.localeCompare(b) == 0) {
        showPopup(passwordPopup);
    } else {
        return (t2 = true);
    }
}

function passwordLenghtChecker(pass1, pass2) {
    let a = pass1.value.toString();
    let b = pass2.value.toString();
    if (a.length < 4 || a.lenght > 12) {
        showPopup(passwordSortPopup);
    } else {
        t3 = true;
    }
}

singUpform.addEventListener(`submit`, (e) => {
    e.preventDefault();
    nameValidator();
    passwordLenghtChecker(password, password2);
    passwordValidation(password, password2);

    if (t1 === true && t2 === true && t3 === true) {
        showPopup(thanksPopup);
    }
});