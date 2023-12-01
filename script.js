const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

function calculateAge(){
    const birthdayValue = birthdayEl.value;
    if(birthdayValue === ""){
        alert("please enter your birthday")
    }else{
        const age = getAge(birthdayValue);
        resultEl.innerText = `Your age is ${age} ${age > 1 ? "years":"year"} old`;
    }
}

function getAge(birthdayValue) {
    const currenDate = new Date();
    const birthdayDate = new Date(birthdayValue);
    let age = currenDate.getFullYear() - birthdayDate.getFullYear();
    const month = currenDate.getMonth() - birthdayDate.getMonth();
    if(
        month < 0 || (month === 0 && currenDate.getDate() < birthdayDate.getDate())
    ){
        age--;
    }

    return age ;
}

btnEl.addEventListener("click", calculateAge);