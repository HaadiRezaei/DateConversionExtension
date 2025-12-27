const yearElement = document.getElementById("yearElement")
const monthElement = document.getElementById("monthElement")
const dayElement = document.getElementById("dayElement")
const changeButton = document.getElementById("changeButton")
const changedSection = document.getElementById("changedSection")
const changedDateElement = document.getElementById("changedDateElement")

document.addEventListener('DOMContentLoaded', function () {
    changeButton.addEventListener("click", changeDateFunc);
});

function changeDateFunc() {
    yearValue = yearElement.value;
    monthValue = monthElement.value;
    dayValue = dayElement.value;

    date = new Date(yearValue, monthValue - 1, dayValue);
    changeDateValue = Intl.DateTimeFormat('fa-IR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    }).format(date);
    const p2eDate = p2e(changeDateValue);
    changedSection.classList.remove('d-none');
    changedDateElement.innerHTML = p2eDate;

    navigator.clipboard.writeText(p2eDate);
}
    
const p2e = s => s.replace(/[۰-۹]/g, d => '۰۱۲۳۴۵۶۷۸۹'.indexOf(d))

// function printCharFunction(changeDateValue) {
//     for (let i = 0; i < changeDateValue.length; i++) {
//         console.log(changeDateValue[i]);
//     }
//     console.log(p2e(changeDateValue))
// }