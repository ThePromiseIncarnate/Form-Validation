function tooShort(firstName) {
    if(firstName.length < 6) {
        return true;
    } else {
        return false;
    }
}

function hasAnI(firstName) {
    let firstNameHasI = firstName;
    if(firstNameHasI.includes("i")) {
        return true;
    } else {
        return false;
    }
}

let marryEarlyElm = document.getElementById("marryEarly");
let marryNowElm = document.getElementById("marryNow");
let firstNameInput = document.getElementById("firstName");

function handleChangeInMarryEarly() {
    console.log("Hello world");
    let input = firstName.value;
    console.log(input);
    let isShort = tooShort(input);
    if (isShort) {
        marryEarlyElm.style.color = "green";
    } else {
        marryEarlyElm.style.color = "red";
    }
}

function handleChangeInI() {
    let input = firstName.value;
    console.log(input);
    let hasI = hasAnI(input);
    if (hasI) {
        marryNowElm.style.color = "green";
    } else {
        marryNowElm.style.color = "red";
    }
}

firstName.addEventListener("change", handleChangeInMarryEarly)
firstName.addEventListener("change", handleChangeInI)