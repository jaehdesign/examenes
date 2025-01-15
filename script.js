// console.log("hola mundo");

const listNumbers = document.querySelectorAll("#listNumbers li");
// const finalSection = document.querySelector('#final');
const finalSection = document.getElementById("final");
const startSection = document.getElementById("start");
// const startSection = document.querySelector('#start');
// const submitButton = document.querySelector('#button');
const submitButton = document.getElementById("button");

listNumbers.forEach((number) => {
    number.addEventListener("click", () => {
        listNumbers.forEach((li) => {
            li.style.backgroundColor = "var(--color-dark-blue)";
            li.style.color = "var(--color-light-grey)";
        });
        number.style.backgroundColor = "var(--color-white)";
        number.style.color = "var(--color-very-dark-blue)";
        submitButton.classList.remove("btndisabled");
        submitButton.classList.add("btnunabled");
    });
});

submitButton.addEventListener("click", () => {
    startSection.style.display = "none";
    finalSection.style.display = "block";
});
