const container = document.querySelector("#container");
const btns = document.querySelectorAll("button");
const input = document.querySelector(".input");
const para = document.querySelector(".para");

let buttons = Array.from(btns);

for (const btn in buttons) {
    buttons[btn].addEventListener("click", (event) => {
        console.log(event.target.textContent);
        if (/[0-9]/.test(event.target.textContent)) {
            let intForm = parseInt(event.target.textContent);
            input.value += intForm;
        } else if (event.target.textContent === "C") {
            input.value = "";
            para.textContent = "";
        } else if (event.target.textContent === "") {
            if (/[0-9]/.test(input.value.at(-1))) {
                input.value = input.value.slice(0, -1);
            } else {
                
                input.value = input.value.slice(0, -3);
            }
            
        } else if (/[+\-/*^]/.test(event.target.textContent)) {
            console.log("signs")
            if (input.value.split(" ").length === 1) {
                input.value += ` ${event.target.textContent} `;
            } else if (input.value.split(" ").length === 3) {
                solve();
                input.value += ` ${event.target.textContent} `;
            }
            
        } else if (event.target.textContent === ".") {
            if (input.value.split(" ").length === 1 && !/[.]/.test(input.value.split(" ")[0])) {
                if (/[0-9]/.test(input.value)) {
                input.value += ".";
            } else{
                input.value += "0.";
            }
            } else if (input.value.split(" ").length === 3 && !/[.]/.test(input.value.split(" ")[2])) {
                if (/[0-9]/.test(input.value.at(-1))) {
                input.value += ".";
            } else{
                input.value += "0.";
            }
            }
            
        } else if (event.target.textContent === "=") {
            if (input.value.split(" ").length === 3) {
                solve();
            }
            
        }
    })
};

function solve() {
    let arr =input.value.split(" ");
    let firstInt = parseFloat(arr[0]);
    let secondInt = parseFloat(arr[2]);
    
    if (firstInt == 0 && secondInt == 0 && arr[1] === "/") {
        para.textContent = "Gotcha!";
        input.value = "";
    } else {
        if (arr[1] === "+") {
        para.textContent = `${firstInt} + ${secondInt} = ${firstInt+secondInt}`
        input.value = firstInt + secondInt;
    } else if (arr[1] === "*") {
        para.textContent = `${firstInt} * ${secondInt} = ${firstInt*secondInt}`
        input.value = firstInt * secondInt;
    } else if (arr[1] === "/") {
        para.textContent = `${firstInt} / ${secondInt} = ${(firstInt/secondInt).toFixed(3)}`
        input.value = (firstInt / secondInt).toFixed(3);
    } else if (arr[1] === "-") {
        para.textContent = `${firstInt} - ${secondInt} = ${firstInt-secondInt}`
        input.value = firstInt - secondInt;
    } else if (arr[1] === "^") {
        para.textContent = `${firstInt} ^ ${secondInt} = ${firstInt**secondInt}`
        input.value = firstInt ** secondInt;
    }
    }

    
    
}