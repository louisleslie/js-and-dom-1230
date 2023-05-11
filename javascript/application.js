console.log("Hello from JavaScript!");

const age = 17;

if (age >= 18) {
    console.log("You can vote!");
} else {
    console.log("You can't vote yet!");
}


const addition = (numberOne, numberTwo) => {
    return numberOne + numberTwo;
}

console.log(addition(2, 2));

const capitalize = (inputString) => {
    const firstLetter = inputString[0].toUpperCase();
    const restOfWord = inputString.substring(1).toLowerCase();
    return firstLetter + restOfWord;
}

console.log(capitalize("apple"));
console.log(capitalize("ORANGE"));

const beatles = ["John", "Paul", "George", "Ringo"];

beatles.forEach((beatle) => {
    console.log(`Hello from ${beatle}`);
});

const list = document.querySelector("#players");

list.insertAdjacentHTML("beforeend", "<li class=\"green\">Luke</li>");

list.insertAdjacentHTML("beforeend", `<li class="red">Anakin</li>`);


const fifa = document.querySelector("#fifa-wins");

fifa.querySelectorAll("li").forEach((team, index) => {
    console.log(team.innerText);
    console.log(index);
});

fifa.insertAdjacentHTML("afterbegin", "<li>France (2 wins)</li>");


